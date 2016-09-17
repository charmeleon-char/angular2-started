import { Component } from '@angular/core';
import { MyComponent }   from './my-component.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><my-component></my-component><navbar></navbar>'
})
export class AppComponent { }
