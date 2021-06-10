import { Injectable } from "@angular/core";
import { TodoListItem } from "../models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: Map<string, TodoListItem> = new Map<string, TodoListItem>();

  constructor() { }

  getListItems(): Map<string, TodoListItem> {
    return this.todoList;
  }
}
