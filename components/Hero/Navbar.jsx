"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Navbar({ isSignedIn, isLoaded, handleScrollTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-black/30 border border-white/5 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo + Name */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => handleScrollTo("hero")}
            >
              <Image
                src="/images/logo.png"
                alt="ResumeB Logo"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ResumeB
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleScrollTo("features")}
                className="text-sm text-gray-400 hover:text-white"
              >
                Features
              </button>
              <button
                onClick={() => handleScrollTo("templates")}
                className="text-sm text-gray-400 hover:text-white"
              >
                Templates
              </button>
              <button
                onClick={() => handleScrollTo("pricing")}
                className="text-sm text-gray-400 hover:text-white"
              >
                Pricing
              </button>

              {isLoaded && (
                <>
                  {isSignedIn ? (
                    <div className="flex items-center space-x-4">
                      <Link href="/template-select">
                        <button className="relative px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
                          Dashboard
                        </button>
                      </Link>

                      {/* Profile + Sign out */}
                      <div className="flex items-center space-x-2">
                        <Image
                          src={session?.user?.image || "/images/avatar.png"}
                          alt="User Avatar"
                          width={32}
                          height={32}
                          className="rounded-full border border-white/20"
                        />
                        <button
                          onClick={() => signOut({ callbackUrl: "/" })}
                          className="text-sm text-gray-400 hover:text-white"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => router.push("/login")}
                        className="text-sm text-gray-400 hover:text-white"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => router.push("/signup")}
                        className="relative px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                      >
                        Get Started
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => handleScrollTo("features")}
                  className="text-sm text-gray-400 text-left"
                >
                  Features
                </button>
                <button
                  onClick={() => handleScrollTo("templates")}
                  className="text-sm text-gray-400 text-left"
                >
                  Templates
                </button>
                <button
                  onClick={() => handleScrollTo("pricing")}
                  className="text-sm text-gray-400 text-left"
                >
                  Pricing
                </button>

                {isSignedIn ? (
                  <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                    <Image
                      src={session?.user?.image || "/images/avatar.png"}
                      alt="User Avatar"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => router.push("/login")}
                      className="text-sm text-gray-400 text-left"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => router.push("/signup")}
                      className="px-4 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
