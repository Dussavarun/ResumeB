"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, removeEducation } from "../store/slices/educationSlice";

export default function EducationForm() {
  const dispatch = useDispatch();
  const education = useSelector((s) => s.education.education);

  const [form, setForm] = useState({
    institution: "",
    degree: "",
    gpa: "",
    location: "",
    duration: "",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = () => {
    if (!form.institution.trim() || !form.degree.trim()) return;

    dispatch(addEducation(form));

    setForm({
      institution: "",
      degree: "",
      gpa: "",
      location: "",
      duration: "",
    });
    setEditingIndex(null);
  };

  const handleEdit = (edu, index) => {
    setForm({
      institution: edu.institution || "",
      degree: edu.degree || "",
      gpa: edu.gpa || "",
      location: edu.location || "",
      duration: edu.duration || "",
    });

    setEditingIndex(index);
    dispatch(removeEducation(index));
  };

  return (
    <div
      className="
        w-full max-w-4xl bg-white
        p-4 sm:p-10
        rounded-xl sm:rounded-3xl
        border-2 sm:border-[3px] border-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        space-y-6 sm:space-y-8
      "
    >
      {/* Title */}
      <h2 className="hidden sm:block text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
        Education
      </h2>
      <h2 className="block sm:hidden text-lg font-bold text-black text-center">
        Education
        <span className="block w-full h-[2px] bg-black mt-2" />
      </h2>

      {/* FORM */}
      <div className="space-y-4">
        <input
          placeholder="Institution"
          value={form.institution}
          onChange={(e) =>
            setForm({ ...form, institution: e.target.value })
          }
          className="input text-sm sm:text-base py-1.5 sm:py-2"
        />

        <input
          placeholder="Degree"
          value={form.degree}
          onChange={(e) =>
            setForm({ ...form, degree: e.target.value })
          }
          className="input text-sm sm:text-base py-1.5 sm:py-2"
        />

        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
          className="input text-sm sm:text-base py-1.5 sm:py-2"
        />

        <input
          placeholder="Duration (e.g. Sep 2018 – June 2022)"
          value={form.duration}
          onChange={(e) =>
            setForm({ ...form, duration: e.target.value })
          }
          className="input text-sm sm:text-base py-1.5 sm:py-2"
        />

        <input
          placeholder="GPA (e.g. 8.4 / 10)"
          value={form.gpa}
          onChange={(e) =>
            setForm({ ...form, gpa: e.target.value })
          }
          className="input text-sm sm:text-base py-1.5 sm:py-2"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        onClick={handleSubmit}
        className="
          w-full px-4 py-2.5 sm:px-6 sm:py-3
          bg-black text-white font-semibold
          border-2 border-black rounded-xl
          hover:bg-white hover:text-black transition-colors
        "
      >
        {editingIndex !== null ? "Update Education" : "Add Education"}
      </button>

      {/* EDUCATION LIST */}
      {education.length > 0 && (
        <ul className="space-y-3">
          {education.map((edu, i) => (
            <li
              key={i}
              className="
                flex justify-between gap-4
                bg-white border-2 border-black
                rounded-xl p-3 sm:p-4
              "
            >
              <div className="space-y-1">
                <p className="font-bold text-black">
                  {edu.institution}
                </p>
                <p className="text-sm text-black">{edu.degree}</p>

                {edu.duration && (
                  <p className="text-xs sm:text-sm text-gray-600">
                    {edu.duration}
                  </p>
                )}
                {edu.location && (
                  <p className="text-xs sm:text-sm text-gray-600">
                    {edu.location}
                  </p>
                )}
                {edu.gpa && (
                  <p className="text-xs sm:text-sm text-gray-600">
                    GPA: {edu.gpa}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleEdit(edu, i)}
                  className="text-black font-semibold hover:text-blue-600"
                >
                  ✏️
                </button>
                <button
                  onClick={() => dispatch(removeEducation(i))}
                  className="text-black font-semibold hover:text-red-600"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
