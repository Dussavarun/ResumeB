import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection({ isVisible, isSignedIn, isLoaded }) {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >  
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm  tracking-widest text-gray-400 mb-4">
  ⚡ATS-ready Resumes, Made simple
</p>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
            Perfect Resume
            <br />
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Every Time
            </span>
          </h1>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Create professional, ATS-optimized resumes in minutes. Land your
            dream job with resumes that stand out.
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {isLoaded && (
              <>
                {isSignedIn ? (
                  <Link href="/template-select">
                    <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                      Create Resume Now
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => router.push("/signup")}
                    className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    Create Resume Now
                  </button>
                )}
              </>
            )}

            <a
              href="https://github.com/Dussavarun/ResumeB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full
             border border-white/20 text-white text-lg font-medium
             hover:bg-white/5 transition-all duration-300
             transform hover:scale-105"
            >
              {/* GitHub Icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>

              <span>Star on GitHub</span>
              {/* Star Symbol */}
              <svg
                className="w-4 h-4 text-yellow-400"
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
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light mb-2">10K+</div>
              <div className="text-gray-500 text-sm">Resumes Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">95%</div>
              <div className="text-gray-500 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">2 Min</div>
              <div className="text-gray-500 text-sm">Average Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
