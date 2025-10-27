import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   programmingLanguages: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
    frameworks: ["React", "Node.js", "Express.js", "Django", "Spring Boot"],
    developerTools: ["Git", "Docker", "Webpack", "VS Code", "Jenkins"],
    cloudAndDevOps: ["AWS", "Vercel", "GitHub Actions"]
};

const techSkillsSlice = createSlice({
  name: "techskills",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      const { category, skill } = action.payload;
      if (!state[category].includes(skill)) state[category].push(skill);
    },
    removeSkill: (state, action) => {
      const { category, skill } = action.payload;
      state[category] = state[category].filter((s) => s !== skill);
    },
    setTechSkills: (_, action) => action.payload,
    resetTechSkills: () => initialState,
  },
});

export const { addSkill, removeSkill, setTechSkills, resetTechSkills } = techSkillsSlice.actions;
export default techSkillsSlice.reducer;
