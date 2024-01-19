import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AstronomyImg, DateArgs, FilterSliceStore, Status } from "./type";
import { formatDate } from "../../helpers/Date";
import axios, { AxiosError } from "axios";

const initialState: FilterSliceStore = {
  startDate: formatDate(new Date(), "yyyy-mm-dd"),
  endDate: formatDate(new Date(), "yyyy-mm-dd"),
  items: [],
  status: Status.LOADING,
};

export const fetchAstronomyImg = createAsyncThunk<AstronomyImg[], DateArgs>(
  "filter/fetchAstronomyImg",
  async (params) => {
    const { startDate, endDate } = params;

    const { data } = await axios<AstronomyImg[]>(`${process.env.REACT_APP_NASA_URL}`, {
      params: {
        api_key: process.env.REACT_APP_NASA_API_KEY,
        start_date: startDate,
        end_date: endDate,
      },
    });
    return data;
  }
);
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<DateArgs>) {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAstronomyImg.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchAstronomyImg.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload as AstronomyImg[];
    });
    builder.addCase(fetchAstronomyImg.rejected, (state, action) => {
      console.log(action);

      state.status = Status.ERROR;
      state.error = action.error as AxiosError;
      state.items = [];
    });
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
