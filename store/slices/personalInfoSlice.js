import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {
    name: "John Doe",
    email: "john@doe.com",
    phone: "+1 (123) 456 7890",
    location: "Kolkata, India",
    about: "A passionate full-stack developer with a love for problem-solving.",
    links: {
      portfolio: "https://johndoe.com",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      leetcode: "https://leetcode.com/johndoe",
      codeforces: "https://codeforces.com/profile/johndoe",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfileField: (state, action) => {
      const { field, value } = action.payload;

      // Handle nested link fields
      if (["portfolio", "github", "linkedin", "leetcode", "codeforces"].includes(field)) {
        state.personalInfo.links[field] = value;
      } else {
        state.personalInfo[field] = value;
      }
    },
    // ADD THIS ACTION
    setPersonalInfo: (state, action) => {
      state.personalInfo = {
        ...state.personalInfo,
        ...action.payload,
        links: {
          ...state.personalInfo.links,
          ...(action.payload.links || {}),
        },
      };
    },
    resetProfile: () => initialState,
  },
});

export const { setProfileField, setPersonalInfo, resetProfile } = userSlice.actions;
export default userSlice.reducer;