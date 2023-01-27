import {
  URL_API_ALL_TODO_LIST,
  URL_API_DELETE_TODO_LIST,
  URL_API_POST_TODO_LIST,
} from "@/utils/config";
import { axiosInstance } from "@/utils/axiosInterceptor";
import { TResponseError } from "@/utils/interface";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { TTodolist } from "./types";

export const getListTodo = createAsyncThunk(
  "todolist/getlistcart",
  async (__, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<TTodolist[]>(
        URL_API_ALL_TODO_LIST
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        (error as AxiosError<TResponseError>).response?.data
      );
    }
  }
);
export const addToDoList = createAsyncThunk(
  "todolist/addtodo",
  async (dataForm: Partial<TTodolist>, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<TTodolist[]>(
        URL_API_POST_TODO_LIST,
        dataForm
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        (error as AxiosError<TResponseError>).response?.data
      );
    }
  }
);
export const deleteToDoList = createAsyncThunk(
  "todolist/deletetodo",
  async (_id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete<TTodolist[]>(
        `${URL_API_DELETE_TODO_LIST}/${_id}`
      );
      return response;
    } catch (error) {
      return rejectWithValue(
        (error as AxiosError<TResponseError>).response?.data
      );
    }
  }
);
export const setTextForm = createAction<string>("todolist/inputform");
export const setMessageForm = createAction<string>("todolist/messageform");
export const setModal = createAction<boolean>("todolist/modal");
export const setTitleModal = createAction<string>("todolist/titlemodal");
export const setSaveOneIdTodo = createAction<string>("todolist/saveidtodo")