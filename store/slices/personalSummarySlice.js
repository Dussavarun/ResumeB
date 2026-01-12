import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summary:
    "Software Engineer with hands-on experience building scalable web applications and real-time systems using modern technologies. Proven ability to deliver measurable impact through performance optimization and clean architecture.",
};

const personalSummarySlice = createSlice({
  name: "personalSummary",
  initialState,
  reducers: {
    setSummary: (state, action) => {
      const value = action.payload;
      if (typeof value === "string" && value.trim().length > 0) {
        state.summary = value;
      }
    },
    resetSummary: () => initialState,
  },
});

export const { setSummary, resetSummary } = personalSummarySlice.actions;

export default personalSummarySlice.reducer;
