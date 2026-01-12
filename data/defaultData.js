// export const defaultResumeData = {
//   "personalInfo": {
//     "name": "John Doe",
//     "email": "john@doe.com",
//     "phone": "+1 (123) 456 7890",
//     "location": "Kolkata, India",
//     "links": {
//       "portfolio": "https://johndoe.com",
//       "github": "https://github.com/johndoe",
//       "linkedin": "https://linkedin.com/in/johndoe",
//       "leetcode": "https://leetcode.com/johndoe",
//       "codeforces": "https://codeforces.com/profile/johndoe"
//     }
//   },
//   "education": [
//     {
//       "institution": "Massachusetts Institute of Technology",
//       "degree": "Bachelor of Science in Computer Science",
//       "gpa": "8.4 / 10",
//       "location": "Cambridge, MA, USA",
//       "duration": "Sep 2018 – June 2022"
//     },
//     {
//       "institution": "Stanford University",
//       "degree": "Master of Science in Artificial Intelligence",
//       "gpa": "9.2 / 10",
//       "location": "Stanford, CA, USA",
//       "duration": "Sep 2022 – June 2024"
//     },
//     {
//       "institution": "Central High School",
//       "degree": "High School Diploma",
//       "gpa": "90.5%",
//       "location": "Springfield, IL, USA",
//       "duration": "Apr 2016 – Apr 2018"
//     }
//   ],
//   "techSkills": {
//   "programmingLanguages": ["JavaScript", "TypeScript", "Python", "Java", "C++"],
//   "databases": ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
//   "frameworks": ["React", "Node.js", "Express.js", "Django", "Spring Boot"],
//   "developerTools": ["Git", "Docker", "Webpack", "VS Code", "Jenkins"],
//   "cloudAndDevOps": ["AWS", "Vercel", "GitHub Actions"]
// },
//   "experience": [
//     {
//       "company": "SCALE AI (Outlier)",
//       "role": "C++ AI Trainer (Freelance)",
//       "location": "Remote",
//       "duration": "Oct 2024 – Present",
//       "responsibilities": [
//         "Conducted AI judging on 30+ AI model responses, optimizing performance using C++.",
//         "Created 10+ complex prompts to improve model training and achieve better accuracy.",
//         "Evaluated over 200 AI iterations for accuracy, relevance, and linguistic correctness.",
//         "Provided targeted feedback that led to improvement in AI decision-making and output quality."
//       ]
//     },
//     {
//       "company": "Pycel",
//       "role": "AI Engineer Intern",
//       "location": "Remote",
//       "duration": "Jan 2024 – Jun 2024",
//       "responsibilities": [
//         "Adapted models for numeric and NLP analysis using C.",
//         "Developed and integrated AST classes with Constast (Python 3.8+).",
//         "Reduced parsing time by 46.5% by refactoring legacy Python components."
//       ]
//     },
//     {
//       "company": "TechCorp",
//       "role": "Software Engineer Intern",
//       "location": "Bangalore, India",
//       "duration": "May 2023 – Aug 2023",
//       "responsibilities": [
//         "Developed RESTful APIs with Node.js and Express, reducing server response time by 80%.",
//         "Collaborated with team of 6 to implement CI/CD pipelines using Jenkins and Docker.",
//         "Optimized database queries in PostgreSQL, improving data retrieval speed by 25%."
//       ]
//     }
//   ],
//   "projects": [
//     {
//       "title": "Personal Portfolio",
//       "description": "Developed a responsive portfolio website using Next.js, TypeScript, and Tailwind CSS.",
//       "impact": "Increased personal visibility and improved load time by 20%.",
//       "link": "https://johndoe.com"
//     },
//     {
//       "title": "E-Commerce Platform",
//       "description": "Built a full-stack MERN e-commerce web app with payment integration and admin dashboard.",
//       "impact": "Enhanced customer engagement by 30% and improved API latency by 16%.",
//       "link": "https://github.com/johndoe/ecommerce"
//     },
//     {
//       "title": "ChatSphere",
//       "description": "Developed a real-time chat application using Next.js, Socket.IO, and Zustand with Redis backend.",
//       "impact": "Handled 10k+ concurrent users efficiently.",
//       "link": "https://github.com/johndoe/chatsphere"
//     }
//   ],
//   "accomplishments": [
//   {
//     "title": "2023 Knights Rank - Top 1.5% on LeetCode"
//   },
//   {
//     "title": "School Gold Medalist (2018)"
//   },
//   // {
//   //   "title": "Amazon ML Summer School – Top 5%"
//   // },
//   // {
//   //   "title": "Codeforces Specialist (Top 10%)"
//   // }
// ],
//   "certifications": [
//   {
//     "title": "AWS Certified Developer – Associate",
//     "provider": "Amazon Web Services",
//     "date": "2024",
//     "credentialUrl": ""
//   },
//   {
//     "title": "Meta Front-End Developer",
//     "provider": "Coursera",
//     "date": "2023",
//     "credentialUrl": ""
//   }
// ]
// }
export const defaultResumeData = {
  personalInfo: {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (123) 456-7890",
    location: "Kolkata, India",
    links: {
      portfolio: "https://johndoe.com",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      leetcode: "https://leetcode.com/johndoe",
      codeforces: "https://codeforces.com/profile/johndoe"
    }
  },

  education: [
    {
      institution: "Stanford University",
      degree: "Master of Science in Artificial Intelligence",
      gpa: "9.2 / 10",
      location: "Stanford, CA, USA",
      duration: "Sep 2022 – Jun 2024"
    },
    {
      institution: "Massachusetts Institute of Technology",
      degree: "Bachelor of Science in Computer Science",
      gpa: "8.4 / 10",
      location: "Cambridge, MA, USA",
      duration: "Sep 2018 – Jun 2022"
    }
  ],

  techSkills: {
    programmingLanguages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++"
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQLite"
    ],
    frameworks: [
      "React",
      "Node.js",
      "Express.js",
      "Django",
      "Spring Boot"
    ],
    developerTools: [
      "Git",
      "Docker",
      "Webpack",
      "VS Code",
      "Jenkins"
    ],
    cloudAndDevOps: [
      "AWS",
      "Vercel",
      "GitHub Actions"
    ]
  },

  experience: [
    {
      company: "SCALE AI (Outlier)",
      role: "C++ AI Trainer (Freelance)",
      location: "Remote",
      duration: "Oct 2024 – Present",
      responsibilities: [
        "Reviewed and evaluated AI model outputs to improve accuracy, relevance, and consistency.",
        "Designed and refined complex prompts to enhance model reasoning and response quality.",
        "Analyzed large volumes of AI-generated responses to identify performance gaps.",
        "Delivered structured feedback that contributed to measurable improvements in model behavior."
      ]
    },
    {
      company: "Pycel",
      role: "AI Engineer Intern",
      location: "Remote",
      duration: "Jan 2024 – Jun 2024",
      responsibilities: [
        "Enhanced numerical and NLP pipelines by adapting models written in C.",
        "Implemented abstract syntax tree (AST) components for improved parsing accuracy.",
        "Optimized legacy Python modules, reducing overall processing time by 46.5%."
      ]
    },
    {
      company: "TechCorp",
      role: "Software Engineer Intern",
      location: "Bangalore, India",
      duration: "May 2023 – Aug 2023",
      responsibilities: [
        "Built and maintained RESTful APIs using Node.js and Express for high-traffic services.",
        "Worked with cross-functional teams to implement CI/CD workflows using Jenkins and Docker.",
        "Improved database query performance in PostgreSQL, leading to faster data retrieval."
      ]
    }
  ],

 projects: [
  {
    title: "Personal Portfolio",
    description: [
      "Designed and developed a responsive personal website using Next.js, TypeScript, and Tailwind CSS.",
      "Implemented responsive layouts and reusable UI components.",
      "Optimized performance and SEO for better visibility."
    ],
    impact:
      "Improved page performance and increased visibility across professional platforms.",
    link: "https://johndoe.com"
  },
  {
    title: "E-Commerce Platform",
    description: [
      "Developed a full-stack MERN-based e-commerce application.",
      "Integrated secure payment processing and admin controls.",
      "Optimized backend APIs for reduced response latency."
    ],
    impact:
      "Enhanced user engagement and reduced API response latency.",
    link: "https://github.com/johndoe/ecommerce"
  },
],

  accomplishments: [
    {
      title: "Ranked in the top 1.5% globally on LeetCode coding challenges"
    },
    {
      title: "Awarded School Gold Medal for academic excellence"
    }
  ],

  certifications: [
    {
      title: "AWS Certified Developer – Associate",
      provider: "Amazon Web Services",
      date: "2024",
      credentialUrl: ""
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      provider: "Coursera",
      date: "2023",
      credentialUrl: ""
    }
  ]
};
