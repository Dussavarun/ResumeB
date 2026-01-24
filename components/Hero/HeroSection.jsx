import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection({ isVisible, isSignedIn, isLoaded }) {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="
        relative
        flex items-center justify-center
        px-4 sm:px-6 lg:px-8
        pt-16
        min-h-[calc(100vh-4rem)]
      "
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-xs sm:text-sm tracking-widest text-gray-400 mb-4">
          ⚡ ATS-ready Resumes, Made simple
        </p>

        {/* Heading */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-tight">
            Perfect Resume
            <br />
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Every Time
            </span>
          </h1>
        </div>

        {/* Description */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Create professional, ATS-optimized resumes in minutes. Land your
            dream job with resumes that stand out.
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-row items-center gap-3 justify-center mb-12 sm:mb-16">
            {isLoaded && (
              <>
                {isSignedIn ? (
                  <Link href="/template-select">
                    <button
                      className="
                        bg-white text-black
                        px-4 py-2
                        rounded-lg
                        text-xs
                        font-medium
                        whitespace-nowrap
                        hover:bg-gray-100
                        transition
                        sm:px-8 sm:py-4
                        sm:text-lg
                        sm:rounded-full
                      "
                    >
                      Create Resume
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => router.push("/signup")}
                    className="
                      bg-white text-black
                      px-4 py-2
                      rounded-lg
                      text-xs
                      font-medium
                      whitespace-nowrap
                      hover:bg-gray-100
                      transition
                      sm:px-8 sm:py-4
                      sm:text-lg
                      sm:rounded-full
                    "
                  >
                    Create Resume
                  </button>
                )}
              </>
            )}

            <a
              href="https://github.com/Dussavarun/ResumeB"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5
                px-4 py-2
                rounded-lg
                border border-white/20
                text-white
                text-xs
                font-medium
                whitespace-nowrap
                hover:bg-white/5
                transition
                sm:px-8 sm:py-4
                sm:text-lg
                sm:rounded-full
              "
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Star on GitHub
              <svg
                className="w-3 h-3 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.5l2.9 6 6.6.6-5 4.4 1.5 6.5L12 16.8 6 20l1.5-6.5-5-4.4 6.6-.6L12 2.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-light">10K+</div>
              <div className="text-gray-500 text-xs sm:text-sm">
                Resumes Created
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light">95%</div>
              <div className="text-gray-500 text-xs sm:text-sm">
                Success Rate
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light">2 Min</div>
              <div className="text-gray-500 text-xs sm:text-sm">
                Average Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
