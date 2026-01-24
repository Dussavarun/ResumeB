"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, removeSkill } from "../store/slices/techSkillsSlice";

const categories = [
  { key: "programmingLanguages", label: "Programming Languages" },
  { key: "databases", label: "Databases" },
  { key: "frameworks", label: "Frameworks" },
  { key: "developerTools", label: "Developer Tools" },
  { key: "cloudAndDevOps", label: "Cloud & DevOps" },
];

export default function TechSkillsForm() {
  const dispatch = useDispatch();
  const techSkills = useSelector((state) => state.techskills);

  const [inputs, setInputs] = useState({
    programmingLanguages: "",
    databases: "",
    frameworks: "",
    developerTools: "",
    cloudAndDevOps: "",
  });

  const handleAdd = (category) => {
    const skill = inputs[category].trim();
    if (!skill) return;
    dispatch(addSkill({ category, skill }));
    setInputs((prev) => ({ ...prev, [category]: "" }));
  };

  const handleRemove = (category, skill) => {
    dispatch(removeSkill({ category, skill }));
  };

  return (
    <div className="w-full px-2 sm:px-4">
      <div
        className="
          w-full max-w-4xl mx-auto
          bg-white
          p-4 sm:p-8 lg:p-10
          rounded-xl sm:rounded-3xl
          border-2 sm:border-[3px] border-black
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
          space-y-4 sm:space-y-8
        "
      >
        {categories.map(({ key, label }) => (
          <div key={key} className="space-y-2 sm:space-y-4">
            {/* Category title */}
            <h3
              className="
                text-sm sm:text-lg
                font-bold text-black
                border-b border-black
                pb-1
              "
            >
              {label}
            </h3>

            {/* Input + Add */}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputs[key]}
                onChange={(e) =>
                  setInputs({ ...inputs, [key]: e.target.value })
                }
                placeholder={`Add ${label.slice(0, -1)}`}
                className="
                  w-full
                  px-3 py-1.5 sm:px-4 sm:py-2
                  bg-white text-black placeholder-gray-400
                  border-2 border-black
                  rounded-lg sm:rounded-xl
                  text-xs sm:text-sm
                  focus:outline-none focus:ring-2 focus:ring-black
                "
              />

              <button
                onClick={() => handleAdd(key)}
                className="
                  px-3 py-1.5 sm:px-4 sm:py-2
                  bg-black text-white
                  text-xs sm:text-sm
                  font-semibold
                  rounded-lg sm:rounded-xl
                  border-2 border-black
                  hover:bg-white hover:text-black
                  transition-colors
                "
              >
                Add
              </button>
            </div>

            {/* Skill pills */}
            {techSkills[key] && techSkills[key].length > 0 && (
              <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                {techSkills[key].map((skill, i) => (
                  <li
                    key={i}
                    className="
                      flex items-center gap-1
                      px-2.5 py-0.5 sm:px-3 sm:py-1
                      bg-white text-black
                      border border-black
                      rounded-full
                      text-[11px] sm:text-xs
                    "
                  >
                    {skill}
                    <button
                      onClick={() => handleRemove(key, skill)}
                      className="font-bold hover:text-red-600"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
