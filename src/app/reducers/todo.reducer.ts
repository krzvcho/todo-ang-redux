import { Action } from "@ngrx/store";
import { TodoListItem } from "../models/todo.model";
import * as todoActions from '../actions/todo.actions';

const initialState = {
  itemList: new Map<number, TodoListItem>([
    [1, { id: 1, status: 'new', title: 'Title1', important: true }],
    [2, { id: 2, status: 'new', title: 'Title2', important: false }]
  ])
};

export function todoReducer(state = initialState, action: Action | any) {
  console.log(state, action);
  switch (action.type) {
    case 'AddTodo': {
      return {
        ...state,
        itemList: new Map(state.itemList).set(action.id, action)
      }
    }
    case 'Remove': {
      let tmpList = new Map(state.itemList);
      tmpList.delete(action.id);
      return {
        ...state,
        itemList: tmpList
      }
    }
    default:
      return state;
  }
}
