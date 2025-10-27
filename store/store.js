// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice";
// import educationReducer from "./slices/educationSlice";
// import experienceReducer from "./slices/experienceSlice";
// import projectReducer from "./slices/projectSlice";
// import techSkillsReducer from "./slices/techSkillsSlice";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// // Combine all slices
// const rootReducer = combineReducers({
//   user: userReducer,
//   education: educationReducer,
//   experience: experienceReducer,
//   project: projectReducer,
//   techskills: techSkillsReducer,
// });

// // Persist config
// const persistConfig = {
//   key: "root",
//   storage,
// };

// // Persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Store setup
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// // Persistor
// export const persistor = persistStore(store);
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import educationReducer from "./slices/educationSlice";
import experienceReducer from "./slices/experienceSlice";
import projectReducer from "./slices/projectSlice";
import techSkillsReducer from "./slices/techSkillsSlice";
import accomplishmentReducer from "./slices/Acomplishment";
import certificationReducer from "./slices/Certificate"

const rootReducer = combineReducers({
  user: userReducer,
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
