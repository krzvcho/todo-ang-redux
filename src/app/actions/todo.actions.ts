import { Action } from "@ngrx/store";
import { TodoListItem } from "../models/todo.model";

export const ADD_TODO = "ADD_TODO";

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: TodoListItem) { }
}

export type TodoActions = AddTodo;
