import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

export const selectCollectionTodo = (state: RootState) => state.listTodo;
export const selectCollectionTodoceSelector = createSelector(
  selectCollectionTodo,
  (state) => state
);
