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

  const categories = useSelector(
    (state) => state.techskills.categories
  );

  const [newCategoryTitle, setNewCategoryTitle] =
    useState("");

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

    setInputs((prev) => ({
      ...prev,
      [categoryKey]: "",
    }));
  };

  return (
    <div className="w-full">

      {/* MAIN CARD */}
      <div className="mx-auto w-full max-w-3xl rounded-[26px] border-[3px] border-black bg-[#ececec] px-5 py-7 shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:px-8 sm:py-9">

        {/* TITLE */}
        <div className="mb-6">
          <h2 className="text-center text-black font-extrabold tracking-tight leading-none text-[30px] sm:text-[52px]">
            Technical Skills
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-full bg-black" />
        </div>

        {/* ADD CATEGORY */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={newCategoryTitle}
            onChange={(e) =>
              setNewCategoryTitle(e.target.value)
            }
            placeholder="Enter new skill"
            className="h-12 w-full rounded-[18px] border-2 border-black bg-[#ececec] px-4 text-[15px] text-black placeholder:text-gray-500 outline-none"
          />

          <button
            onClick={handleAddCategory}
            className="h-12 shrink-0 rounded-[18px] border-2 border-black bg-black px-5 text-[15px] font-bold text-white transition hover:bg-white hover:text-black"
          >
            Add Section
          </button>
        </div>

        {/* CATEGORY LIST */}
        <div className="mt-5 space-y-4">
          {Object.entries(categories || {}).map(
            ([key, category]) => (
              <div
                key={key}
                className="rounded-[22px] border-2 border-black bg-[#ececec] p-4"
              >

                {/* HEADER */}
                <div className="flex items-center justify-between gap-3 border-b border-black pb-2">
                  <h3 className="break-words text-[20px] font-bold text-black">
                    {category.title}
                  </h3>

                  <button
                    onClick={() =>
                      dispatch(removeCategory(key))
                    }
                    className="shrink-0 text-[14px] font-semibold text-red-600"
                  >
                    Delete
                  </button>
                </div>

                {/* ADD SKILL */}
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    value={inputs[key] || ""}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        [key]: e.target.value,
                      })
                    }
                    placeholder="Add skill"
                    className="h-12 w-full rounded-[18px] border-2 border-black bg-[#ececec] px-4 text-[15px] text-black placeholder:text-gray-500 outline-none"
                  />

                  <button
                    onClick={() =>
                      handleAddSkill(key)
                    }
                    className="h-12 shrink-0 rounded-[18px] border-2 border-black bg-black px-5 text-[15px] font-bold text-white transition hover:bg-white hover:text-black"
                  >
                    Add Skill
                  </button>
                </div>

                {/* SKILLS */}
                {category.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map(
                      (skill, i) => (
                        <div
                          key={i}
                          className="flex max-w-full items-center gap-2 rounded-full border-2 border-black bg-white px-3 py-1.5 text-[13px] text-black"
                        >
                          <span className="break-all">
                            {skill}
                          </span>

                          <button
                            onClick={() =>
                              dispatch(
                                removeSkill({
                                  categoryKey: key,
                                  skill,
                                })
                              )
                            }
                            className="shrink-0 font-bold hover:text-red-600"
                          >
                            ×
                          </button>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* FOOTER */}
        <p className="mt-6 text-[15px] leading-relaxed text-gray-700">
          Tip: Group your skills into categories
          like Frontend, Backend, Database,
          Tools, and Cloud.
        </p>
      </div>
    </div>
  );
}