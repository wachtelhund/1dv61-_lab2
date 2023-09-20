import { Component } from '@angular/core';
import * as dnd from '../../../src/index'
import { FormControl, FormGroup } from '@angular/forms';
import { prettyPrintJson } from 'pretty-print-json';

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
  result: any;

  functionForm = new FormGroup({
    className: new FormControl(''),
    functionName: new FormControl(''),
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
    });
  }

  getClassNames(module: any) {
    return Object.keys(module).filter((key) => {
      return this.getFunctionNames(module[key]).length > 0;
    })
  }

  getFunctionNames(classToCheck: any) {
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

 async executeFunction() {
    const className = this.functionForm.get('className')?.value as keyof typeof dnd;
    const functionName = this.functionForm.get('functionName')?.value;
    
    if (className && functionName) {
      const selectedClass = new dnd[className]();
      const selectedFunction = (selectedClass as any)[functionName];

      if (typeof selectedFunction === 'function') {
        this.result = await (selectedClass as any)[functionName]();
      } else {
        this.result = "There was an error executing the function."
      }
    } else {
      this.result = "Select a function."
    }
  }
}
