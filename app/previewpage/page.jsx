import { Suspense } from "react";
import ResumePreviewClient from "./ResumePreviewClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ResumePreviewClient />
    </Suspense>
  );
}
