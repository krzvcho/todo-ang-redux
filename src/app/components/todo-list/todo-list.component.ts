import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListItem } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() items$!: Observable<{ itemList: Map<number, TodoListItem> }>;
  @Output() removeItem: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  triggerRemove(id: number | undefined): void {
    if (id) {
      console.log(id);
      this.removeItem.emit(id);
    }
  }
}
