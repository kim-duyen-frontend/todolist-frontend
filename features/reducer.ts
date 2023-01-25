import { createReducer } from "@reduxjs/toolkit";
import { getListTodo } from "./actions";
import { TTodolistState } from "./types";

const initialState: TTodolistState = {
  pending: false,
  listTodo: [{ _id: "", text: "", status: false, createdAt: "" }],
};
export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getListTodo.pending, (state) => {
      state.pending = true;
    })
    .addCase(getListTodo.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.listTodo = payload;
    });
});
