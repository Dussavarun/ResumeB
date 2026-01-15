"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

    if (!res?.ok) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome Back
        </h1>
        <p className="text-sm text-white/60 mt-2 mb-8">
          Sign in to continue building your resume
        </p>

        {error && (
          <p className="text-red-400 text-sm mb-4">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-black border border-white/10 focus:border-white/30 outline-none transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-black border border-white/10 focus:border-white/30 outline-none transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90 transition"
        >
          Sign In
        </button>
      </motion.form>
    </div>
  );
}
