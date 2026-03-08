"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  removeExperience,
} from "../store/slices/experienceSlice";

export default function ExperienceForm() {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experience.experiences);

  const [form, setForm] = useState({
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    location: "",
    responsibilities: [],
  });

  const [point, setPoint] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const addPoint = () => {
    if (!point.trim()) return;
    setForm((prev) => ({
      ...prev,
      responsibilities: [...prev.responsibilities, point.trim()],
    }));
    setPoint("");
  };

  const removePoint = (idx) => {
    setForm((prev) => ({
      ...prev,
      responsibilities: prev.responsibilities.filter((_, i) => i !== idx),
    }));
  };

  const handleAdd = () => {
    if (editingIndex !== null) {
      dispatch(removeExperience(editingIndex));
      setEditingIndex(null);
    }

    dispatch(addExperience(form));

    setForm({
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      location: "",
      responsibilities: [],
    });
  };

  const handleEdit = (exp, index) => {
    setForm({
      company: exp.company || "",
      role: exp.role || "",
      startDate: exp.startDate || "",
      endDate: exp.endDate || "",
      location: exp.location || "",
      responsibilities: exp.responsibilities || [],
    });
    setEditingIndex(index);
  };

  return (
    <div className="w-full px-2 sm:px-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-3xl border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4 sm:space-y-8">

        <h2 className="text-lg sm:text-3xl font-extrabold text-black text-center border-b-2 border-black pb-2 sm:pb-4">
          Experience
        </h2>

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">

            <input
              placeholder="Company"
              value={form.company}
              onChange={(e) =>
                setForm({ ...form, company: e.target.value })
              }
              className="input py-1.5 text-sm"
              required
            />

            <input
              placeholder="Role / Position"
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
              className="input py-1.5 text-sm"
              required
            />

            <input
              placeholder="Location"
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
              className="input py-1.5 text-sm"
              required
            />

            <div className="grid grid-cols-2 gap-2">
              <input
                type="month"
                value={form.startDate}
                onChange={(e) =>
                  setForm({ ...form, startDate: e.target.value })
                }
                className="input py-1.5 text-xs"
                required
              />

              <input
                type="month"
                value={form.endDate}
                onChange={(e) =>
                  setForm({ ...form, endDate: e.target.value })
                }
                className="input py-1.5 text-xs"
                required
              />
            </div>
          </div>

          {/* RESPONSIBILITIES */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                placeholder="Add responsibility point"
                value={point}
                onChange={(e) => setPoint(e.target.value)}
                className="input py-1.5 text-sm flex-1"
              />
              <button
                type="button"
                onClick={addPoint}
                className="px-3 py-1.5 bg-black text-white text-sm font-semibold border-2 border-black rounded-lg hover:bg-white hover:text-black"
              >
                Add
              </button>
            </div>

            {form.responsibilities.length > 0 && (
              <ul className="space-y-1.5">
                {form.responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-start border border-black rounded-lg px-3 py-2 text-xs text-black"
                  >
                    <span>• {r}</span>
                    <button
                      type="button"
                      onClick={() => removePoint(i)}
                      className="font-bold text-red-600"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white text-sm font-semibold border-2 border-black rounded-lg hover:bg-white hover:text-black"
          >
            {editingIndex !== null ? "Update Experience" : "Add Experience"}
          </button>
        </form>

        {/* EXPERIENCE LIST */}
        {experiences.length > 0 && (
          <ul className="space-y-3">
            {experiences.map((exp, i) => {
              const isExpanded = expandedIndex === i;
              const count = exp.responsibilities?.length || 0;

              return (
                <li
                  key={i}
                  className="border-2 border-black rounded-lg p-3 flex justify-between gap-3 bg-white"
                >
                  <div className="flex-1 space-y-1 text-black">
                    <p className="font-bold text-sm">{exp.company}</p>

                    <p className="text-sm">
                      {exp.role} {exp.startDate} – {exp.endDate}
                    </p>

                    <p className="text-xs">{exp.location}</p>

                    <div className="sm:hidden">
                      {count > 0 && (
                        <button
                          onClick={() =>
                            setExpandedIndex(isExpanded ? null : i)
                          }
                          className="text-xs font-medium mt-1"
                        >
                          ({count} responsibilities) ⬇️
                        </button>
                      )}

                      {isExpanded && (
                        <ul className="list-disc list-inside text-xs mt-1">
                          {exp.responsibilities.map((r, j) => (
                            <li key={j}>{r}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="hidden sm:block">
                      <ul className="list-disc list-inside text-sm">
                        {exp.responsibilities.map((r, j) => (
                          <li key={j}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <button
                  onClick={() => handleEdit(exp, i)}
                  className="text-black font-semibold hover:text-blue-600"
                >
                  ✏️
                </button>

                    <button
                      onClick={() => dispatch(removeExperience(i))}
                      className="font-bold text-red-600 text-lg leading-none"
                    >
                      ×
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}