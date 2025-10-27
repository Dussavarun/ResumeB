import { createSlice } from "@reduxjs/toolkit";

const initialState = { experiences: [
   {
      "company": "SCALE AI (Outlier)",
      "role": "C++ AI Trainer (Freelance)",
      "location": "Remote",
      "duration": "Oct 2024 – Present",
      "responsibilities": [
        "Conducted AI judging on 30+ AI model responses, optimizing performance using C++.",
        "Created 10+ complex prompts to improve model training and achieve better accuracy.",
        "Evaluated over 200 AI iterations for accuracy, relevance, and linguistic correctness.",
        "Provided targeted feedback that led to improvement in AI decision-making and output quality."
      ]
    },
    {
      "company": "Pycel",
      "role": "AI Engineer Intern",
      "location": "Remote",
      "duration": "Jan 2024 – Jun 2024",
      "responsibilities": [
        "Adapted models for numeric and NLP analysis using C.",
        "Developed and integrated AST classes with Constast (Python 3.8+).",
        "Reduced parsing time by 46.5% by refactoring legacy Python components."
      ]
    },
    {
      "company": "TechCorp",
      "role": "Software Engineer Intern",
      "location": "Bangalore, India",
      "duration": "May 2023 – Aug 2023",
      "responsibilities": [
        "Developed RESTful APIs with Node.js and Express, reducing server response time by 80%.",
        "Collaborated with team of 6 to implement CI/CD pipelines using Jenkins and Docker.",
        "Optimized database queries in PostgreSQL, improving data retrieval speed by 25%."
      ]
    }
] };

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience: (state, action) => { state.experiences.push(action.payload); },
    removeExperience: (state, action) => {
      state.experiences = state.experiences.filter((_, i) => i !== action.payload);
    },
    setExperiences: (state, action) => { state.experiences = action.payload; },
    resetExperience: () => initialState,
  },
});

export const { addExperience, removeExperience, setExperiences, resetExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
