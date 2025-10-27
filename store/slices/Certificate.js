import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  certifications: [
    { title: "React Developer", provider: "Coursera", date: "2024-03-10", credentialUrl: "https://example.com/react" },
    { title: "Node.js Mastery", provider: "Udemy", date: "2023-12-15", credentialUrl: "https://example.com/node" }
  ],
};

const certificationSlice = createSlice({
  name: "certifications",
  initialState,
  reducers: {
    addCertification: (state, action) => {
      state.certifications.push(action.payload);
    },
    removeCertification: (state, action) => {
      state.certifications = state.certifications.filter(
        (_, index) => index !== action.payload
      );
    },
    updateCertification: (state, action) => {
      const { index, data } = action.payload;
      if (state.certifications[index]) state.certifications[index] = { ...state.certifications[index], ...data };
    },
  },
});

export const { addCertification, removeCertification, updateCertification } = certificationSlice.actions;
export default certificationSlice.reducer;
