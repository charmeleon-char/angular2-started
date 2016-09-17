import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponent }   from './my-component.component';
import { NavbarComponent }   from './navbar.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, MyComponent, NavbarComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
