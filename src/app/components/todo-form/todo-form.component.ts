import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TodoListItem } from 'src/app/models/todo.model';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<TodoListItem> = new EventEmitter();
  public taskName: string = '';
  public taskImportant: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitTask() {
    this.formSubmit.emit({
      title: this.taskName,
      status: 'new',
      important: this.taskImportant
    })
  }
}
