import { URL_API_ALL_TODO_LIST } from "@/utils/config";
import { axiosInstance } from "@/utils/axiosInterceptor";
import { TResponseError } from "@/utils/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export const getListTodo = createAsyncThunk(
  "todolist/getlistcart",
  async (__, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(URL_API_ALL_TODO_LIST);
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        (error as AxiosError<TResponseError>).response?.data
      );
    }
  }
);
