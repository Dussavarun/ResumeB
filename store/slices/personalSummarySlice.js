import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summary: "",
};

const personalSummarySlice = createSlice({
  name: "personalSummary",
  initialState,
  reducers: {
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    resetSummary: () => initialState,
  },
});

export const { setSummary, resetSummary } =
  personalSummarySlice.actions;

export default personalSummarySlice.reducer;
