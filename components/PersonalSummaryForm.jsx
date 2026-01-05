"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSummary } from "../store/slices/personalSummarySlice";

export default function PersonalSummaryForm() {
  const dispatch = useDispatch();
  const summary = useSelector(
    (s) => s.personalSummary.summary
  );
const fullState = useSelector((state) => state);
console.log("REDUX STATE:", fullState);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Professional Summary
      </h2>

      <textarea
        value={summary}
        onChange={(e) => dispatch(setSummary(e.target.value))}
        placeholder="Brief professional summary (3–5 lines)"
        rows={6}
        className="w-full border rounded-lg p-3 resize-none"
      />

      <p className="text-sm text-gray-500">
        Tip: Focus on skills, experience, and impact.
      </p>
    </div>
  );
}
