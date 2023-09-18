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
  dndClasses: DndClass[] = [];
  result: any;

  functionForm = new FormGroup({
    className: new FormControl(''),
    functionName: new FormControl(''),
  });

  constructor() {
    this.functionForm.valueChanges.subscribe((value) => {
      console.log(value);
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
    console.log('Class to check:', classToCheck);
    console.log('Class to check prototype:', Object.getOwnPropertyNames(classToCheck.prototype));
    
    
    for (const method of Object.entries(classToCheck)) {
      console.log('Method:', method);
      
    }
    
    const names = Object.getOwnPropertyNames(classToCheck.prototype)
    console.log('Names:', names);
    
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
    console.log('Function Form:', this.functionForm.value);
    
    const className = this.functionForm.get('className')?.value as keyof typeof dnd;
    const functionName = this.functionForm.get('functionName')?.value;
    
    if (className && functionName) {
      const selectedClass = new dnd[className]();
      const selectedFunction = (selectedClass as any)[functionName];
      

      console.log('Selected Class:', selectedClass);
      console.log('Selected Function:', selectedFunction);

      
      
      if (typeof selectedFunction === 'function') {

        this.result = await (selectedClass as any)[functionName]();
        console.log('Function Result:', this.result);
      } else {
        console.error('Selected function is not a valid function.');
      }
    }
  }
}

interface DndClass {
  name: string;
  methods: DndFunction[];
}

interface DndFunction {
  name: string;
  params: string[];
  returns: string;
  fn: Function;
}
