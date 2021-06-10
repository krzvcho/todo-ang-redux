import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TodoListItem } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {
  public todos$: Observable<{ itemList: Map<number, TodoListItem> }> = of();

  constructor(private store: Store<{ todos: { itemList: Map<number, TodoListItem> } }>) { }

  ngOnInit(): void {
    this.todos$ = this.store.select('todos');
    console.log(this.todos$);
  }

  onTaskSubmitted(item: TodoListItem): void {
    console.log(item);

  }
}
