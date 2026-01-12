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

  const addPoint = () => {
    if (!point.trim()) return;
    setForm({
      ...form,
      responsibilities: [...form.responsibilities, point.trim()],
    });
    setPoint("");
  };

  const removePoint = (idx) => {
    setForm({
      ...form,
      responsibilities: form.responsibilities.filter((_, i) => i !== idx),
    });
  };

  const handleAdd = () => {
    if (!form.company.trim() || !form.role.trim()) return;
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

  return (
    <div className="min-h-screen bg-white flex justify-center items-start p-8">
      <div
        className="w-full max-w-4xl bg-white p-10 rounded-3xl
        border-[3px] border-black
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
          Experience
        </h2>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="input"
          />

          <input
            placeholder="Role / Position"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="input"
          />

          <input
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="input"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="month"
              value={form.startDate}
              onChange={(e) =>
                setForm({ ...form, startDate: e.target.value })
              }
              className="input"
            />

            <input
              type="month"
              value={form.endDate}
              onChange={(e) =>
                setForm({ ...form, endDate: e.target.value })
              }
              className="input"
            />
          </div>
        </div>

        {/* RESPONSIBILITIES AS POINTS */}
        <div className="space-y-3">
          <div className="flex gap-3">
            <input
              placeholder="Add responsibility point"
              value={point}
              onChange={(e) => setPoint(e.target.value)}
              className="input flex-1"
            />
            <button
              onClick={addPoint}
              className="px-4 py-2 bg-black text-white font-semibold
              border-2 border-black rounded-xl
              hover:bg-white hover:text-black transition-colors"
            >
              Add
            </button>
          </div>

          {form.responsibilities.length > 0 && (
            <ul className="space-y-2">
              {form.responsibilities.map((r, i) => (
                <li
                  key={i}
                  className="flex justify-between items-start gap-4
                  bg-white border-2 border-black rounded-xl p-3"
                >
                  <span className="text-sm text-black">• {r}</span>
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

        <button
          onClick={handleAdd}
          className="w-full px-6 py-3 bg-black text-white font-semibold
          border-2 border-black rounded-xl
          hover:bg-white hover:text-black transition-colors"
        >
          Add Experience
        </button>

        {/* EXPERIENCE LIST */}
        {experiences.length > 0 && (
          <ul className="space-y-4">
            {experiences.map((exp, i) => (
              <li
                key={i}
                className="flex justify-between items-start gap-4
                bg-white border-2 border-black rounded-xl p-4"
              >
                <div>
                  <p className="font-bold text-black">{exp.company}</p>
                  <p className="text-sm text-black">
                    {exp.role} ({exp.startDate} – {exp.endDate})
                  </p>
                  <p className="text-sm text-gray-600">{exp.location}</p>
                </div>

                <button
                  onClick={() => dispatch(removeExperience(i))}
                  className="text-black font-bold hover:text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
