"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // whenever pathname changes → show loader for a short duration
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600); // smooth transition
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-[9999] flex items-center justify-center transition-opacity duration-300">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
