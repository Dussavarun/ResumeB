// Store initialization utility
export const initializeStore = (store) => {
  // Check if the store is properly initialized
  const state = store.getState();
  
  // Initialize user state if not present
  if (!state.user) {
    store.dispatch({ type: 'user/clearUser' });
  }
  
  // Initialize skills state if not present
  if (!state.skills || !state.skills.items) {
    store.dispatch({ type: 'skills/clearSkills' });
  }
  
  // Initialize experience state if not present
  if (!state.experience || !state.experience.items) {
    store.dispatch({ type: 'experience/clearExperience' });
  }
  
  // Initialize education state if not present
  if (!state.education || !state.education.items) {
    store.dispatch({ type: 'education/clearEducation' });
  }
  
  // Initialize projects state if not present
  if (!state.projects || !state.projects.items) {
    store.dispatch({ type: 'projects/clearProjects' });
  }
  
  // Initialize resume state if not present
  if (!state.resume) {
    store.dispatch({ type: 'resume/resetResume' });
  }
};

// Default state checker
export const checkDefaultState = (state) => {
  return {
    user: state.user || {
      basics: {
        name: "",
        headline: "",
        email: "",
        phone: "",
        location: "",
        url: { href: "", label: "" },
        customFields: [],
      },
      profiles: {
        visible: true,
        items: [],
        columns: 2,
      },
    },
    skills: state.skills || {
      visible: true,
      name: "Skills",
      columns: 2,
      items: [],
      id: "skills",
    },
    experience: state.experience || {
      visible: true,
      name: "Work Experience",
      columns: 1,
      items: [],
      id: "experience",
    },
    education: state.education || {
      visible: true,
      name: "Education",
      columns: 1,
      items: [],
      id: "education",
    },
    projects: state.projects || {
      visible: true,
      name: "Projects",
      columns: 1,
      items: [],
      id: "projects",
    },
    resume: state.resume || {
      theme: "default",
      layout: "classic",
      lastUpdated: null,
    },
  };
};
