import { createReducer } from "@reduxjs/toolkit";
import {
  addToDoList,
  deleteToDoList,
  getListTodo,
  setChecked,
  setInputTextModalEdit,
  setMessageForm,
  setMessageModalEdit,
  setModal,
  setSaveOneDataTodo,
  setSearchText,
  setTextForm,
  setTitleModal,
  setTypeSortDate,
  updateToDoList,
} from "./actions";
import { TTodolistState } from "./types";

const initialState: TTodolistState = {
  pending: false,
  listTodo: [{ _id: "", text: "", status: false, createdAt: 0 }],
  input_form: "",
  error: false,
  message: "",
  message_modal_edit: "",
  open_modal: false,
  title_modal: "",
  data_todo: { _id: "", text: "", status: false, createdAt: 0 },
  search_text: "",
  checked: false,
  text_edit: "",
  type_sort_date: false,
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
    .addCase(setMessageModalEdit, (state, { payload }) => {
      state.message_modal_edit = payload;
    })
    .addCase(setModal, (state, { payload }) => {
      state.open_modal = payload;
    })
    .addCase(setTitleModal, (state, { payload }) => {
      state.title_modal = payload;
    })
    .addCase(setSaveOneDataTodo, (state, { payload }) => {
      state.data_todo = payload;
    })
    .addCase(deleteToDoList.pending, (state) => {
      state.pending = true;
    })
    .addCase(deleteToDoList.fulfilled, (state, { payload }) => {
      const temp = [...state.listTodo];
      state.pending = false;
      state.listTodo = temp.filter((item) => item._id !== payload._id);
    })
    .addCase(setSearchText, (state, { payload }) => {
      state.search_text = payload;
    })
    .addCase(setChecked, (state, { payload }) => {
      state.checked = payload;
    })
    .addCase(updateToDoList.pending, (state) => {
      state.pending = true;
    })
    .addCase(updateToDoList.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.listTodo = payload;
    })
    .addCase(updateToDoList.rejected, (state) => {
      state.pending = false;
      state.error = true;
    })
    .addCase(setInputTextModalEdit, (state, { payload }) => {
      state.text_edit = payload;
    })
    .addCase(setTypeSortDate, (state, { payload }) => {
      state.type_sort_date = payload;
    });
});
