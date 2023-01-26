import { createReducer } from "@reduxjs/toolkit";
import {
  addToDoList,
  getListTodo,
  setMessageForm,
  setTextForm,
} from "./actions";
import { TTodolistState } from "./types";

const initialState: TTodolistState = {
  pending: false,
  listTodo: [{ _id: "", text: "", status: false, createdAt: "" }],
  input_form: "",
  error: false,
  message: "",
};
export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getListTodo.pending, (state) => {
      state.pending = true;
    })
    .addCase(getListTodo.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.listTodo = payload;
    })
    .addCase(setTextForm, (state, { payload }) => {
      state.input_form = payload;
    })
    .addCase(addToDoList.pending, (state) => {
      state.pending = true;
    })
    .addCase(addToDoList.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.listTodo = payload;
    })
    .addCase(addToDoList.rejected, (state) => {
      state.pending = false;
      state.error = true;
    })
    .addCase(setMessageForm, (state, { payload }) => {
      state.message = payload;
    });
});
