// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   summary: "",
// };

// const personalSummarySlice = createSlice({
//   name: "personalSummary",
//   initialState,
//   reducers: {
//     setSummary: (state, action) => {
//       state.summary = action.payload;
//     },
//     resetSummary: () => initialState,
//   },
// });

// export const { setSummary, resetSummary } =
//   personalSummarySlice.actions;

// export default personalSummarySlice.reducer;

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
      state.summary = action.payload;
    },
    resetSummary: () => initialState,
  },
});

export const { setSummary, resetSummary } =
  personalSummarySlice.actions;

export default personalSummarySlice.reducer;
