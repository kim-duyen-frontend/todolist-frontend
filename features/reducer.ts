import { createReducer } from "@reduxjs/toolkit";
import {
  addToDoList,
  getListTodo,
  setMessageForm,
  setModal,
  setSaveOneIdTodo,
  setTextForm,
  setTitleModal,
} from "./actions";
import { TTodolistState } from "./types";

const initialState: TTodolistState = {
  pending: false,
  listTodo: [{ _id: "", text: "", status: false, createdAt: "" }],
  input_form: "",
  error: false,
  message: "",
  open_modal: false,
  title_modal: "",
  id_todo: "",
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
    })
    .addCase(setModal, (state, { payload }) => {
      state.open_modal = payload;
    })
    .addCase(setTitleModal, (state, { payload }) => {
      state.title_modal = payload;
    })
    .addCase(setSaveOneIdTodo, (state, { payload }) => {
      state.id_todo = payload;
    });
});
