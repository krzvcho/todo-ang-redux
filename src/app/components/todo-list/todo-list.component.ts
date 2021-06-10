import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListItem } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() items$!: Observable<{ itemList: Map<number, TodoListItem> }>;

  constructor() { }

  ngOnInit(): void {
  }

}
