import { createSlice } from "@reduxjs/toolkit";

const initialState = { projects: [
  {
      "title": "Personal Portfolio",
      "description": "Developed a responsive portfolio website using Next.js, TypeScript, and Tailwind CSS.",
      "impact": "Increased personal visibility and improved load time by 20%.",
      "link": "https://johndoe.com"
    },
    {
      "title": "E-Commerce Platform",
      "description": "Built a full-stack MERN e-commerce web app with payment integration and admin dashboard.",
      "impact": "Enhanced customer engagement by 30% and improved API latency by 16%.",
      "link": "https://github.com/johndoe/ecommerce"
    },
    {
      "title": "ChatSphere",
      "description": "Developed a real-time chat application using Next.js, Socket.IO, and Zustand with Redis backend.",
      "impact": "Handled 10k+ concurrent users efficiently.",
      "link": "https://github.com/johndoe/chatsphere"
    }
] };

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => { state.projects.push(action.payload); },
    removeProject: (state, action) => {
      state.projects = state.projects.filter((_, i) => i !== action.payload);
    },
    setProjects: (state, action) => { state.projects = action.payload; },
    resetProject: () => initialState,
  },
});

export const { addProject, removeProject, setProjects, resetProject } = projectSlice.actions;
export default projectSlice.reducer;
