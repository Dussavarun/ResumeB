import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      title: "Personal Portfolio",
      description: [
        "Designed and developed a responsive personal website using Next.js, TypeScript, and Tailwind CSS",
        "Implemented reusable UI components and responsive layouts",
        "Optimized SEO and performance for better visibility",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://johndoe.com",
    },
    {
      title: "E-Commerce Platform",
      description: [
        "Built a full-stack MERN e-commerce application",
        "Integrated secure payment gateway and admin dashboard",
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/johndoe/ecommerce",
    },
    {
      title: "ChatSphere",
      description: [
        "Developed a real-time chat application using Socket.IO",
        "Implemented Redis-based scaling for concurrent users",
      ],
      technologies: ["React", "Node.js", "Socket.IO", "Redis"],
      link: "https://github.com/johndoe/chatsphere",
    },
  ],
};


const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(
        (_, i) => i !== action.payload
      );
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    resetProject: () => initialState,
  },
});

export const {
  addProject,
  removeProject,
  setProjects,
  resetProject,
} = projectSlice.actions;

export default projectSlice.reducer;
