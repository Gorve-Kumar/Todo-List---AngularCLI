import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  // todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "hello1",
        desc: "hi",
        active: false
      },
      {
        sno: 2,
        title: "hello2",
        desc: "hi2",
        active: true
      },
      {
        sno: 3,
        title: "hello3",
        desc: "hi3",
        active: false
      }
    ]
  }

  ngOnInit(): void {

  }
}
