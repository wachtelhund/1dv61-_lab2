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
  exportedClasses = Object.keys(dnd);
  exportedFunctions!: Function[];
  chosenClassMethodNames: String[] = [];
  dndClasses: DndClass[] = [];

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
    return Object.keys(module);
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

 executeFunction() {
    console.log('Function Form:', this.functionForm.value);
    
    const className = this.functionForm.get('className')?.value as keyof typeof dnd;
    const functionName = this.functionForm.get('functionName')?.value;
    
    if (className && functionName) {
      const selectedClass = dnd[className];
      const selectedFunction = (selectedClass as any).prototype[functionName];
      

      console.log('Selected Class:', selectedClass);
      console.log('Selected Function:', selectedFunction);

      
      
      if (typeof selectedFunction === 'function') {
        const result = selectedFunction();
        console.log('Function Result:', result);
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
