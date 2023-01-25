export type TTodolist = {
  _id: string;
  text: string;
  status: boolean;
  createdAt:string;
};
export type TTodolistState = {
  pending: boolean
  listTodo: TTodolist[];
};
