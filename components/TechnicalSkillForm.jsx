"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  removeCategory,
  addSkill,
  removeSkill,
} from "../store/slices/techSkillsSlice";

export default function TechSkillsForm() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.techskills.categories);

  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const [inputs, setInputs] = useState({});

  const handleAddCategory = () => {
    if (!newCategoryTitle.trim()) return;
    dispatch(addCategory(newCategoryTitle.trim()));
    setNewCategoryTitle("");
  };

  const handleAddSkill = (categoryKey) => {
    const skill = inputs[categoryKey]?.trim();
    if (!skill) return;

    dispatch(addSkill({ categoryKey, skill }));
    setInputs((prev) => ({ ...prev, [categoryKey]: "" }));
  };

  return (
    <div className="w-full px-2 sm:px-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 sm:p-8 rounded-2xl border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] space-y-6">

        {/* Title */}
        <h2 className="text-lg sm:text-3xl font-extrabold text-center border-b-2 border-black pb-2">
          Technical Skills
        </h2>

        {/* Add Section */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newCategoryTitle}
            onChange={(e) => setNewCategoryTitle(e.target.value)}
            placeholder="Enter new skill section"
            className="flex-1 border-2 border-black rounded-lg px-3 py-2 text-sm sm:text-base"
          />
          <button
            onClick={handleAddCategory}
            className="px-3 sm:px-4 py-2 bg-black text-white border-2 border-black rounded-lg text-sm font-semibold hover:bg-white hover:text-black transition"
          >
            Add
          </button>
        </div>

        {/* Categories */}
        <div className="space-y-5">
          {Object.entries(categories || {}).map(([key, category]) => (
            <div
              key={key}
              className="border-2 border-black rounded-xl p-3 sm:p-5 space-y-3"
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-black pb-1">
                <h3 className="font-bold text-sm sm:text-lg">
                  {category.title}
                </h3>

                <button
                  onClick={() => dispatch(removeCategory(key))}
                  className="text-red-600 text-xs sm:text-sm font-semibold"
                >
                  Delete
                </button>
              </div>

              {/* Add Skill */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputs[key] || ""}
                  onChange={(e) =>
                    setInputs({ ...inputs, [key]: e.target.value })
                  }
                  placeholder="Add skill"
                  className="flex-1 border-2 border-black rounded-lg px-3 py-2 text-sm"
                />

                <button
                  onClick={() => handleAddSkill(key)}
                  className="px-3 py-2 bg-black text-white border-2 border-black rounded-lg text-sm font-semibold hover:bg-white hover:text-black transition"
                >
                  Add
                </button>
              </div>

              {/* Skill Capsules */}
              {category.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1 px-2 py-0.5 border border-black rounded-full text-xs"
                    >
                      {skill}
                      <button
                        onClick={() =>
                          dispatch(removeSkill({ categoryKey: key, skill }))
                        }
                        className="font-bold hover:text-red-600 text-xs"
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
    </div>
  );
}