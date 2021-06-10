import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  public taskName: string = '';
  public taskImportant: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitTask() {
    this.formSubmit.emit({
      name: this.taskName,
      important: this.taskImportant
    })
  }
}
