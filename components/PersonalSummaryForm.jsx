"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSummary } from "../store/slices/personalSummarySlice";

export default function PersonalSummaryForm() {
  const dispatch = useDispatch();
  const summary = useSelector((s) => s.personalSummary.summary);

  return (
    <div className="w-full px-3 sm:px-6 lg:px-0">
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
        {/* Title */}
        <h2
          className="
            text-lg sm:text-3xl lg:text-4xl
            font-extrabold text-black text-center
            border-b-2 border-black
            pb-2 sm:pb-4
          "
        >
          Professional Summary
        </h2>

        {/* Textarea */}
        <textarea
          value={summary}
          onChange={(e) => dispatch(setSummary(e.target.value))}
          placeholder="Write a concise professional summary (3–5 lines). Focus on skills, experience, and impact."
          className="
            w-full
            border-2 border-black
            rounded-lg sm:rounded-xl
            px-3 py-2 sm:px-4 sm:py-3
            text-sm sm:text-base
            text-black
            resize-none
            focus:outline-none focus:ring-2 focus:ring-black
            h-28 sm:h-40
          "
        />

        {/* Tip */}
        <p className="text-xs sm:text-sm text-gray-600">
          Tip: Highlight your core skills, years of experience, and key achievements.
        </p>
      </div>
    </div>
  );
}
