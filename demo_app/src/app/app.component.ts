import { Component } from '@angular/core';
import * as dnd from '../../../src/index'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo_app';
  exportedClasses = this.getClassNames(dnd);
  exportedFunctions!: Function[];
  chosenClassMethodNames: String[] = [];
  parameters: string[] = [];
  result: any;

  functionForm = new FormGroup({
    className: new FormControl(''),
    functionName: new FormControl(''),
    params: new FormControl('')
  });

  constructor() {
    this.functionForm.valueChanges.subscribe((value) => {
      if (value && value.className !== null && value.className !== undefined) {
        const className = value.className as keyof typeof dnd;
        this.chosenClassMethodNames = this.getFunctionNames(dnd[className]);
      } else {
        this.chosenClassMethodNames = [];
        this.functionForm.get('functionName')?.setValue('');
      }
      this.parameters = [];

      if (value && value.functionName !== null && value.functionName !== undefined && value.functionName !== '') {
        const className = value.className as keyof typeof dnd;
        const functionName = value.functionName as string;
        
        const selectedClass = new dnd[className]();
        const selectedFunction = (selectedClass as any)[functionName];
        
        this.parameters = this.getParamaterNames(selectedFunction);
      } else {
        this.parameters = [];
      }
    });
  }

  getClassNames(module: any): string[] {
    return Object.keys(module).filter((key) => {
      return this.getFunctionNames(module[key]).length > 0;
    })
  }

  getFunctionNames(classToCheck: any): string[] {
    const names = Object.getOwnPropertyNames(classToCheck.prototype)
    
    if (names) {
      return names.filter(
        (prop) =>
          typeof classToCheck.prototype[prop] === 'function' &&
          prop !== 'constructor'
      );
    }
    return [];
  }

  getParamaterNames(functionToCheck: Function): string[] {
    if (functionToCheck) {
      const functionAsString = functionToCheck.toString()
      let params = functionAsString.slice(functionAsString.indexOf("(") + 1, functionAsString.indexOf(")")).split(",")
      if (params.length === 1 && params[0] === "") {
        return [];
      }
      params = params.map((param) => {
        return param.trim().split(" ")[0]
      })
      
      return params;
    }
    return [];
  }

  getFormParams(): string[] {
    const params = this.functionForm.get('params')?.value as string;
    
    if (params) {
      return params.split(",").map((param) => {
        return param.trim();
      });
    }
    return [];
  }

  async executeFunction(): Promise<void> {
    const className = this.functionForm.get('className')?.value as keyof typeof dnd;
    const functionName = this.functionForm.get('functionName')?.value;
    
    if (className && functionName) {
      const selectedClass = new dnd[className]();
      const selectedFunction = (selectedClass as any)[functionName];

      if (typeof selectedFunction === 'function') {
        let params: string[];
        if (this.getFormParams().length > 0) {
          params = this.getFormParams();
        } else {
          params = [];
        }
        this.result = await (selectedClass as any)[functionName](...params);
      } else {
        this.result = "There was an error executing the function."
      }
    } else {
      this.result = "Select a function."
    }
  }
}
