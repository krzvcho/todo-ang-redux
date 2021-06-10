import { TodoListItem } from "../models/todo.model";

const initialState = {
  itemList: new Map<number, TodoListItem>([
    [1, { id: 1, status: 'new', title: 'Title1' }],
    [2, { id: 2, status: 'new', title: 'Title2' }]
  ])
};

export function todoReducer(state = initialState) {
  return state;
}
