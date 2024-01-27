import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_details: {},
  is_initial_loading: false,
  is_loading: false,
  count: 0,
};

export const appSlice = createSlice({
  name: "nativeApp",
  initialState,
  reducers: {
    serviceCall: (state, { payload }) => {
      state.is_loading = payload;
    },
    getServiceCall: (state, { payload }) => {
      state.is_initial_loading = payload;
    },
    countIncreament: (state) => {
      state.count += 1;
    },
    countDecrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { serviceCall, getServiceCall, countIncreament, countDecrement } =
  appSlice.actions;

export default appSlice.reducer;
