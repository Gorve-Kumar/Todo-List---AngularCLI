import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: Todo;
  @Input() i?: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  constructor(){
  }
 
  ngOnInit(): void {
    
  }

  onClick(todo?:Todo){
    this.todoDelete.emit(todo);
    console.log("Triggered");
  }

  onCheckBoxClick(todo?:Todo){
    this.todoCheckBox.emit(todo);
    console.log("Toggling");
  }
}