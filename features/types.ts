export type TTodolist = {
  _id: string;
  text: string;
  status: boolean;
  createdAt:number;
};
export type TTodolistState = {
  pending: boolean;
  listTodo: TTodolist[];
  input_form: string;
  error: boolean;
  message: string;
  message_modal_edit: string;
  open_modal: boolean;
  title_modal: string;
  data_todo: TTodolist;
  search_text: string;
  checked: boolean;
  text_edit: string;
  type_sort_date: boolean;
};
