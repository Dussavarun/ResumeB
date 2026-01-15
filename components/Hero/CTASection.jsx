"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CTASection({ isSignedIn, isLoaded }) {
  const router = useRouter();

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
      
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm text-gray-300">Join 50,000+ professionals</span>
          </div>
          
          <h2 className="text-6xl font-light mb-8 leading-tight">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-normal">
              Career Story
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Don't let a mediocre resume hold you back. Create a compelling professional narrative 
            that opens doors to opportunities you deserve.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          {isLoaded && (
            <>
              {isSignedIn ? (
                <Link href="/template-select">
                  <button className="group bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden">
                    <span className="relative z-10">Start Your Journey</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </Link>
              ) : (
                <button 
                  onClick={() => router.push("/signup")}
                  className="group bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              )}
            </>
          )}
          
          <button className="group border-2 border-white/40 text-white px-10 py-5 rounded-full text-lg font-medium hover:border-white/80 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm">
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
              </svg>
              Watch Success Stories
            </span>
          </button>
        </div>

        {/* Social Proof Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-thin mb-2 text-green-400">2x</div>
            <div className="text-gray-400">More Interview Calls</div>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-4xl font-thin mb-2 text-blue-400">4.9★</div>
            <div className="text-gray-400">User Rating</div>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="text-4xl font-thin mb-2 text-purple-400">24h</div>
            <div className="text-gray-400">Average Job Offer</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6">
            ✓ No credit card required  •  ✓ 3 free resumes  •  ✓ Cancel anytime
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 opacity-60">
            <div className="text-xs text-gray-500">TRUSTED BY</div>
            <div className="hidden sm:block h-px bg-gray-600 w-16"></div>
            <div className="text-sm text-gray-500">Fortune 500 Companies</div>
            <div className="hidden sm:block h-px bg-gray-600 w-16"></div>
            <div className="text-xs text-gray-500">SINCE 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
}