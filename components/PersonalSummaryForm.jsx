"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSummary } from "../store/slices/personalSummarySlice";

export default function PersonalSummaryForm() {
  const dispatch = useDispatch();
  const summary = useSelector((s) => s.personalSummary.summary);

  return (
    <div className="min-h-screen bg-white flex justify-center items-start p-8">
      <div
        className="w-full max-w-4xl bg-white p-10 rounded-3xl
        border-[3px] border-black
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
          Professional Summary
        </h2>

        <textarea
          value={summary}
          onChange={(e) => dispatch(setSummary(e.target.value))}
          placeholder="Write a concise professional summary (3–5 lines). Focus on skills, experience, and impact."
          rows={6}
          className="w-full border-2 border-black rounded-xl p-4
          text-black resize-none focus:outline-none"
        />

        <p className="text-sm text-gray-600">
          Tip: Highlight your core skills, years of experience, and key achievements.
        </p>
      </div>
    </div>
  );
}
