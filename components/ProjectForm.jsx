"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, removeProject } from "../store/slices/projectSlice";

export default function ProjectForm() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.projects);

  const [form, setForm] = useState({
    title: "",
    descriptionPoints: [],
    technologies: "",
    link: "",
  });

  const [point, setPoint] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  /* ADD DESCRIPTION POINT */
  const addPoint = () => {
    if (!point.trim()) return;
    setForm((prev) => ({
      ...prev,
      descriptionPoints: [...prev.descriptionPoints, point.trim()],
    }));
    setPoint("");
  };

  /* REMOVE DESCRIPTION POINT */
  const removePoint = (idx) => {
    setForm((prev) => ({
      ...prev,
      descriptionPoints: prev.descriptionPoints.filter((_, i) => i !== idx),
    }));
  };

  /* ADD / UPDATE PROJECT */
  const handleSubmit = () => {
    if (!form.title.trim()) return;

    const payload = {
      title: form.title,
      description: form.descriptionPoints,
      technologies: form.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      link: form.link,
    };

    dispatch(addProject(payload));

    setForm({
      title: "",
      descriptionPoints: [],
      technologies: "",
      link: "",
    });
    setEditingIndex(null);
  };

  /* EDIT PROJECT */
  const handleEdit = (proj, index) => {
    setForm({
      title: proj.title,
      descriptionPoints: Array.isArray(proj.description)
        ? proj.description
        : [],
      technologies: proj.technologies?.join(", ") || "",
      link: proj.link || "",
    });

    setEditingIndex(index);
    dispatch(removeProject(index));
  };

  return (
    <div className="w-full max-w-4xl bg-white p-4 sm:p-10 rounded-xl sm:rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
      {/* Title */}
      <h2 className="hidden sm:block text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
        Projects
      </h2>
      <h2 className="block sm:hidden text-lg font-bold text-black text-center">
  Projects
  <span className="block w-full h-[2px] bg-black mt-2" />
</h2>


      {/* FORM */}
      <div className="space-y-4">
        <input
          placeholder="Project Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="input text-sm sm:text-base py-1.5 sm:py-2"
        />

        {/* DESCRIPTION POINTS */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              placeholder="Add project description point"
              value={point}
              onChange={(e) => setPoint(e.target.value)}
              className="input flex-1 text-sm sm:text-base py-1.5 sm:py-2"
            />
            <button
              onClick={addPoint}
              className="px-3 py-2 text-sm font-semibold bg-black text-white border-2 border-black rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Add
            </button>
          </div>

          {form.descriptionPoints.length > 0 && (
            <ul className="space-y-2">
              {form.descriptionPoints.map((p, i) => (
                <li
                  key={i}
                  className="flex justify-between gap-3 bg-white border-2 border-black rounded-lg p-2"
                >
                  <span className="text-sm text-black">• {p}</span>
                  <button
                    onClick={() => removePoint(i)}
                    className="font-bold text-black hover:text-red-600"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          placeholder="Technologies (comma-separated)"
          value={form.technologies}
          onChange={(e) =>
            setForm({ ...form, technologies: e.target.value })
          }
          className="input text-sm sm:text-base py-1.5 sm:py-2"
        />

        <input
          placeholder="Project Link (GitHub / Live)"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          className="input text-sm sm:text-base py-1.5 sm:py-2"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base bg-black text-white font-semibold border-2 border-black rounded-xl hover:bg-white hover:text-black transition-colors"
      >
        {editingIndex !== null ? "Update Project" : "Add Project"}
      </button>

      {/* PROJECT LIST */}
      {projects.length > 0 && (
        <ul className="space-y-3">
          {projects.map((proj, i) => {
            const isExpanded = expandedIndex === i;
            const descCount = proj.description?.length || 0;

            return (
              <li
                key={i}
                className="flex justify-between gap-4 bg-white border-2 border-black rounded-xl p-3"
              >
                <div className="space-y-1 flex-1">
                  <p className="font-bold text-black">{proj.title}</p>

                  {/* DESKTOP: show full description */}
                  <div className="hidden sm:block">
                    {Array.isArray(proj.description) && (
                      <ul className="list-disc list-inside text-sm text-black">
                        {proj.description.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* MOBILE: collapsed description */}
                  <div className="sm:hidden">
                    {descCount > 0 && (
                      <button
                        onClick={() =>
                          setExpandedIndex(isExpanded ? null : i)
                        }
                        className="flex items-center gap-1 text-sm text-black font-medium"
                      >
                        ({descCount} descriptions)
                        <span
                          className={`transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        >
                          ⬇️
                        </span>
                      </button>
                    )}

                    {isExpanded && (
                      <ul className="mt-2 list-disc list-inside text-sm text-black">
                        {proj.description.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600">
                    {proj.technologies?.join(", ")}
                  </p>

                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline text-sm"
                    >
                      {proj.link}
                    </a>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleEdit(proj, i)}
                    className="text-black font-semibold hover:text-blue-600"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => dispatch(removeProject(i))}
                    className="text-black font-semibold hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
