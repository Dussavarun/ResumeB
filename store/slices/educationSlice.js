import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: [
    {
      "institution": "Massachusetts Institute of Technology",
      "degree": "Bachelor of Science in Computer Science",
      "gpa": "8.4 / 10",
      "location": "Cambridge, MA, USA",
      "duration": "Sep 2018 – June 2022"
    },
    {
      "institution": "Stanford University",
      "degree": "Master of Science in Artificial Intelligence",
      "gpa": "9.2 / 10",
      "location": "Stanford, CA, USA",
      "duration": "Sep 2022 – June 2024"
    },
    {
      "institution": "Central High School",
      "degree": "High School Diploma",
      "gpa": "90.5%",
      "location": "Springfield, IL, USA",
      "duration": "Apr 2016 – Apr 2018"
    }
  ]
}; 

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state, action) => { state.education.push(action.payload); },
    removeEducation: (state, action) => {state.education =  state.education.filter((_, i) => i !== action.payload)},
    setEducation: (_, action) => action.payload,
    resetEducation: () => initialState,
  },
});

export const { addEducation, removeEducation, setEducation, resetEducation } = educationSlice.actions;
export default educationSlice.reducer;
