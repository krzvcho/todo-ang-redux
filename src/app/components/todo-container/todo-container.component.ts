import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TodoListItem } from 'src/app/models/todo.model';
import * as TodoActions from 'src/app/actions/todo.actions';

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

  addTask(data: TodoListItem): void {
    const record: TodoListItem = {
      id: new Date().getTime(),
      title: data.title,
      status: data.status
    }

    this.store.dispatch(new TodoActions.AddTodo(record));
  }
}
