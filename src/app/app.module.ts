import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';


// This File is basically entry point in our project.

@NgModule({
  declarations: [ // All components we developed.
    AppComponent, TodosComponent
  ],
  imports: [ // Externals Modules
    BrowserModule, // Used for DOM manipulations
    AppRoutingModule // Opens URL without reloading the Page.
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
