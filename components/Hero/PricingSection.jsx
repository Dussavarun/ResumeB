"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PricingSection({ isSignedIn, isLoaded }) {
  const router = useRouter();

  return (
    <section id="pricing" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-6">
            Simple <span className="font-normal">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Start for free, upgrade when you need more power.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative bg-black border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-light text-white mb-2">Free</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-thin text-white">$0</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 text-sm">Perfect for getting started</p>
              </div>

              {isLoaded && (
                <>
                  {isSignedIn ? (
                    <Link href="/template-select">
                      <button className="w-full bg-white/5 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40">
                        Get Started
                      </button>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => router.push("/signup")}
                      className="w-full bg-white/5 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40"
                    >
                      Get Started
                    </button>
                  )}
                </>
              )}

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">3 resume creations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Basic templates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">PDF download</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">ATS optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="relative group md:-mt-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 animate-pulse"></div>
            <div className="relative bg-black border-2 border-purple-500 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>

              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-light text-white mb-2">Premium</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-thin bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">$9</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 text-sm">For serious job seekers</p>
              </div>

              {isLoaded && (
                <>
                  {isSignedIn ? (
                    <Link href="/template-select">
                      <button className="w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group">
                        <span className="relative z-10">Upgrade Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => router.push("/signup")}
                      className="w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
                    >
                      <span className="relative z-10">Upgrade Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  )}
                </>
              )}

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-sm font-medium">Unlimited resumes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-sm font-medium">AI-powered content generation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-sm font-medium">All premium templates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-sm font-medium">Cover letter builder</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-sm font-medium">Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-sm font-medium">LinkedIn optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl opacity-50 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative bg-black border border-amber-900 rounded-2xl p-8 hover:border-amber-600 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-light text-white mb-2">Enterprise</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-thin text-amber-500">$29</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 text-sm">For professionals & teams</p>
              </div>

              <button className="w-full relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 group border border-amber-500/50 hover:border-amber-500">
                <span className="relative z-10">Contact Sales</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Everything in Premium</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Team collaboration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Custom branding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">API access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 text-sm">SLA guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm mb-4">
            All plans include 14-day money-back guarantee
          </p>
          <p className="text-gray-600 text-xs">
            Need help choosing? <button className="text-purple-400 hover:text-purple-300 underline transition-colors">Contact our sales team</button>
          </p>
        </div>
      </div>
    </section>
  );
}