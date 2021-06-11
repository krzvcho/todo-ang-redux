import { createAction, props } from "@ngrx/store";
import { TodoListItem } from "../models/todo.model";
//import { ActionWithPayload, TodoListItem } from "../models/todo.model";

// export const ADD_TODO = "ADD_TODO";

// export class AddTodo implements ActionWithPayload {
//   readonly type = ADD_TODO;

//   constructor(public payload: TodoListItem) { }
// }

export const addTodo = createAction('AddTodo', props<TodoListItem>());
export const removeTodo = createAction('Remove', props<{ id: number }>());
//export type TodoActions = AddTodo;


