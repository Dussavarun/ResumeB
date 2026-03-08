import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {
    programmingLanguages: {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    },
    databases: {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
    },
    frameworks: {
      title: "Frameworks",
      skills: ["React", "Node.js", "Express.js", "Django", "Spring Boot"],
    },
    developerTools: {
      title: "Developer Tools",
      skills: ["Git", "Docker", "Webpack", "VS Code", "Jenkins"],
    },
    cloudAndDevOps: {
      title: "Cloud & DevOps",
      skills: ["AWS", "Vercel", "GitHub Actions"],
    },
  },
};

const techSkillsSlice = createSlice({
  name: "techskills",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const title = action.payload;
      const key = Date.now().toString();

      state.categories[key] = {
        title,
        skills: [],
      };
    },

    removeCategory: (state, action) => {
      delete state.categories[action.payload];
    },

    addSkill: (state, action) => {
      const { categoryKey, skill } = action.payload;
      if (!state.categories[categoryKey].skills.includes(skill)) {
        state.categories[categoryKey].skills.push(skill);
      }
    },

    removeSkill: (state, action) => {
      const { categoryKey, skill } = action.payload;
      state.categories[categoryKey].skills =
        state.categories[categoryKey].skills.filter((s) => s !== skill);
    },

   
    setTechSkills: (state, action) => {
  if (!action.payload || !action.payload.categories) {
    return initialState;
  }
  return action.payload;
},

    resetTechSkills: () => initialState,
  },
});

export const {
  addCategory,
  removeCategory,
  addSkill,
  removeSkill,
  setTechSkills, 
  resetTechSkills,
} = techSkillsSlice.actions;

export default techSkillsSlice.reducer;