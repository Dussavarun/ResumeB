"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-6">Sign In</h1>

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
          className="w-full bg-white text-black py-3 rounded font-medium"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
