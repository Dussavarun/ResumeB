// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   accomplishments: [
//     { title: "Completed 100+ coding challenges on LeetCode" },
//     { title: "Speaker at Dev Conference 2024" }
//   ],
// };

// const accomplishmentSlice = createSlice({
//   name: "accomplishments",
//   initialState,
//   reducers: {
//     addAccomplishment: (state, action) => {
//       state.accomplishments.push(action.payload);
//     },
//     removeAccomplishment: (state, action) => {
//       state.accomplishments = state.accomplishments.filter(
//         (_, index) => index !== action.payload
//       );
//     },
//     updateAccomplishment: (state, action) => {
//       const { index, title } = action.payload;
//       if (state.accomplishments[index]) state.accomplishments[index].title = title;
//     },
//   },
// });

// export const { addAccomplishment, removeAccomplishment, updateAccomplishment } = accomplishmentSlice.actions;
// export default accomplishmentSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accomplishments: [
    { title: "Completed 100+ coding challenges on LeetCode" },
    { title: "Speaker at Dev Conference 2024" }
  ],
};

const accomplishmentSlice = createSlice({
  name: "accomplishments",
  initialState,
  reducers: {
    addAccomplishment: (state, action) => {
      state.accomplishments.push(action.payload);
    },
    removeAccomplishment: (state, action) => {
      state.accomplishments = state.accomplishments.filter(
        (_, index) => index !== action.payload
      );
    },
    updateAccomplishment: (state, action) => {
      const { index, title } = action.payload;
      if (state.accomplishments[index]) state.accomplishments[index].title = title;
    },
    // ADD THIS MISSING REDUCER
    setAccomplishments: (state, action) => {
      state.accomplishments = action.payload;
    },
    resetAccomplishments: () => initialState,
  },
});

export const { 
  addAccomplishment, 
  removeAccomplishment, 
  updateAccomplishment,
  setAccomplishments,
  resetAccomplishments 
} = accomplishmentSlice.actions;

export default accomplishmentSlice.reducer;