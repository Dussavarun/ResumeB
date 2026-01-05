import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/personalInfoSlice";
import educationReducer from "./slices/educationSlice";
import experienceReducer from "./slices/experienceSlice";
import projectReducer from "./slices/projectSlice";
import techSkillsReducer from "./slices/techSkillsSlice";
import accomplishmentReducer from "./slices/acomplishmentSlice";
import personalSummaryReducer from "./slices/personalSummarySlice"
import certificationReducer from "./slices/certificationSlice"

const rootReducer = combineReducers({
  user: userReducer,
  personalSummary : personalSummaryReducer,
  education: educationReducer,
  experience: experienceReducer,
  project: projectReducer,
  techskills: techSkillsReducer,
  accomplishments: accomplishmentReducer,
  certifications: certificationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
