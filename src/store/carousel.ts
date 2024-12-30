// ** Redux Imports
import { CarouselItem } from "@/types/carousel";
import { createSlice } from "@reduxjs/toolkit";

export const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    data: [] as CarouselItem[],
  },
  reducers: {
    setData: (state, action: { payload: CarouselItem[] }) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = carouselSlice.actions;

export default carouselSlice.reducer;
