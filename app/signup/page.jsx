"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Signup failed");
      setLoading(false);
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSignup}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-6">Create Account</h1>

        {error && (
          <p className="text-red-400 text-sm mb-4">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded bg-black border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-black border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black py-3 rounded font-medium"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
