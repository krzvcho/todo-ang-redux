export type TodoStatus = 'new' | 'ready' | 'important';
export interface TodoListItem {
  id?: number;
  title: string;
  status: TodoStatus,
  important: boolean
}

