import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';


// This File is basically entry point in our project.

@NgModule({
  declarations: [ // All components we developed.
    AppComponent, TodosComponent, TodoItemComponent, AddTodoComponent
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
