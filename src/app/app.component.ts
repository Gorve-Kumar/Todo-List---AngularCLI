import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // element selector
  templateUrl: './app.component.html', // which template?
  styleUrl: './app.component.css' // styling of CSS?
})

export class AppComponent {
  title = 'Todo List';


  
  // constructor() {
  //   setTimeout(() => {
  //     this.title = "Changed Title"; // it updates title, without reloading.
  //   }, 4000);
  // };
}
