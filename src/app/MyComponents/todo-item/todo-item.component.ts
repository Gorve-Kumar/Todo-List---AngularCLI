import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  constructor(){
  }
 
  ngOnInit(): void {
    
  }
}