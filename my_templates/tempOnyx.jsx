"use client";
import Image from "next/image";

export default function OnyxResume() {
  // 🔹 Static mock data
  const userData = {
   //  avatarUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
    personalInfo: {
      fullName: "Varun Dussa",
      title: "Full Stack Developer",
      email: "varun@example.com",
      phone: "+91 9876543210",
      address: "Hyderabad, India",
      linkedin: "linkedin.com/in/varundussa",
      github: "github.com/varundussa",
      portfolio: "varundussa.dev",
      summary:
        "Passionate full-stack developer skilled in building modern web apps using MERN stack. Experienced in optimizing performance, real-time communication, and system scalability.",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    experience: [
      {
        company: "TechNova Labs",
        role: "Software Engineer",
        startDate: "Jan 2023",
        endDate: "Present",
        location: "Remote",
        responsibilities: [
          "Built and deployed scalable REST APIs using Node.js and MongoDB",
          "Implemented real-time chat features using Socket.IO",
          "Enhanced frontend performance by 30% with React optimization",
        ],
      },
      {
        company: "InnoVerse",
        role: "Frontend Developer",
        startDate: "Jul 2021",
        endDate: "Dec 2022",
        location: "Bangalore, India",
        responsibilities: [
          "Developed reusable React components with Tailwind CSS",
          "Integrated APIs and optimized for mobile responsiveness",
          "Collaborated with designers to improve UI/UX consistency",
        ],
      },
    ],
    education: [
      {
        institution: "National Institute of Technology",
        degree: "B.Tech in Computer Science",
        startDate: "2018",
        endDate: "2022",
      },
    ],
    projects: [
      {
        name: "Resume Builder Pro",
        description:
          "A full-stack resume builder app that supports live preview, template selection, and PDF download.",
        link: "https://resume-builder-pro.vercel.app",
      },
      {
        name: "Chatify",
        description:
          "Real-time chat application with encryption, group support, and socket persistence.",
        link: "https://chatify-app.vercel.app",
      },
    ],
  };

  const { personalInfo, experience, education, projects } = userData;

  return (
    <div className="flex bg-gray-100 min-h-screen p-10 justify-center">
      <div className="flex max-w-5xl w-full shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-gray-900 text-white w-1/3 p-6 space-y-6">
          <div className="flex flex-col items-center">
            {userData.avatarUrl && (
              <Image
                src={userData.avatarUrl}
                alt="Avatar"
                width={100}
                height={100}
                className="rounded-full border-4 border-gray-700"
              />
            )}
            <h1 className="text-2xl font-semibold mt-3 text-center">
              {personalInfo.fullName}
            </h1>
            <p className="text-gray-400 text-sm">{personalInfo.title}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold border-b border-gray-700 mb-2 pb-1">
              Contact
            </h2>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.address}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold border-b border-gray-700 mb-2 pb-1">
              Links
            </h2>
            <p>LinkedIn: {personalInfo.linkedin}</p>
            <p>GitHub: {personalInfo.github}</p>
            <p>Portfolio: {personalInfo.portfolio}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold border-b border-gray-700 mb-2 pb-1">
              Skills
            </h2>
            <ul className="list-disc ml-5">
              {personalInfo.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="bg-white w-2/3 p-8 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-3">
              Summary
            </h2>
            <p className="text-gray-700 text-sm">{personalInfo.summary}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-3">
              Experience
            </h2>
            {experience.map((exp, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{exp.company}</h3>
                  <span className="text-sm text-gray-500">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="italic">{exp.role}</p>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-3">
              Education
            </h2>
            {education.map((edu, i) => (
              <div key={i} className="mb-3">
                <h3 className="font-semibold">{edu.institution}</h3>
                <p>
                  {edu.degree} ({edu.startDate} - {edu.endDate})
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 border-b pb-1 mb-3">
              Projects
            </h2>
            {projects.map((proj, i) => (
              <div key={i} className="mb-3">
                <h3 className="font-semibold">{proj.name}</h3>
                <p className="text-sm text-gray-700">{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  className="text-blue-600 text-sm"
                >
                  {proj.link}
                </a>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
