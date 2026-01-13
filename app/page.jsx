"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { SignInButton, SignUpButton, useAuth, UserButton, useUser } from "@clerk/nextjs";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const { data: session, status } = useSession();
const isSignedIn = status === "authenticated";
const isLoaded = status !== "loading";

  const router = useRouter();

  // useEffect(() => {
  //   if (isSignedIn && user) {
  //     fetch("/api/auth/user", { method: "POST" });
  //   }
  // }, [isSignedIn, user]);

  // Fixed particle positions to avoid hydration mismatch
  const particles = [
    { width: 4, height: 4, left: 15, top: 25, delay: 0 },
    { width: 6, height: 6, left: 85, top: 70, delay: 2 },
    { width: 3, height: 3, left: 25, top: 45, delay: 4 },
    { width: 5, height: 5, left: 75, top: 15, delay: 1 },
    { width: 4, height: 4, left: 45, top: 80, delay: 3 },
    { width: 3, height: 3, left: 65, top: 35, delay: 5 },
    { width: 5, height: 5, left: 35, top: 60, delay: 2.5 },
    { width: 4, height: 4, left: 55, top: 20, delay: 3.5 },
  ];

  useEffect(() => {
    setIsClient(true);
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const features = [
    {
      title: "AI-Powered Writing",
      description: "Advanced algorithms craft compelling content tailored to your industry and role.",
      icon: "🤖"
    },
    {
      title: "ATS Optimized",
      description: "Ensure your resume passes through applicant tracking systems with ease.",
      icon: "🎯"
    },
    {
      title: "Professional Templates",
      description: "Choose from dozens of clean, modern templates designed by hiring experts.",
      icon: "📄"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] animate-in slide-in-from-top duration-500">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-2xl shadow-2xl border border-orange-400 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Please sign in first!</p>
                <p className="text-xs text-orange-100 mt-1">You need to create an account to access the resume builder.</p>
              </div>
              <button 
                onClick={() => setShowNotification(false)}
                className="flex-shrink-0 ml-4 text-orange-100 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
            transition: 'background 0.3s ease',
          }}
        />
        
        {/* Floating Particles */}
        {isClient && particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Futuristic Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
        {/* Glowing Border Effect */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 via-blue-500/20 to-purple-500/10 blur-lg"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Nav Container with glassmorphism */}
          <div className="relative backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
            
            {/* Scan line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan pointer-events-none"></div>
            
            <div className="relative px-6 py-3 flex items-center justify-between">
              {/* Logo with holographic effect */}
              <div 
                className="flex items-center space-x-2 cursor-pointer group"
                onClick={() => handleScrollTo('hero')}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                    ResumeB
                  </span>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                <button 
                  onClick={() => handleScrollTo('features')} 
                  className="relative px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Features</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
                
                <button 
                  onClick={() => handleScrollTo('templates')} 
                  className="relative px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Templates</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
                
                <button 
                  onClick={() => handleScrollTo('pricing')} 
                  className="relative px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">Pricing</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
                
                {/* Auth Buttons */}
                {isLoaded && (
                  <>
                    {isSignedIn ? (
                      <div className="flex items-center space-x-3 ml-4">
                        <Link href="/template-select">
                          <button className="relative px-5 py-2 text-sm lg:text-base font-medium overflow-hidden rounded-full group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-100"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 text-white">Dashboard</span>
                          </button>
                        </Link>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50"></div>
                          {/* <UserButton 
                            afterSignOutUrl="/"
                            appearance={{
                              elements: {
                                avatarBox: "w-9 h-9 ring-2 ring-purple-500/50",
                              },
                            }}
                          /> */}
                     <button
  onClick={() => signOut({ callbackUrl: "/" })}
  className="text-sm text-gray-300 hover:text-white"
>
  Sign Out
</button>


                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3 ml-4">
                        {/* <SignInButton mode="modal">
                          <button className="relative px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-white transition-all duration-300 group">
                            <span className="relative z-10">Sign In</span>
                            <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </button>
                        </SignInButton> */}
                        <button onClick={() => router.push("/login")}>
  Sign In
</button>

                        {/* <SignUpButton mode="modal">
                          <button className="relative px-5 py-2 text-sm lg:text-base font-medium overflow-hidden rounded-full group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-100"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <span className="relative z-10 text-white">Get Started</span>
                          </button>
                        </SignUpButton> */}
                        <button onClick={() => router.push("/signup")}>
  Get Started
</button>

                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Futuristic Mobile Menu Button */}
              <button 
                className="md:hidden relative p-2 group"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative z-10 w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>

            {/* Mobile Menu with futuristic styling */}
            {mobileMenuOpen && (
              <div className="md:hidden relative border-t border-white/10 backdrop-blur-xl bg-black/60">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5"></div>
                <div className="relative px-6 py-6 flex flex-col space-y-4">
                  <button 
                    onClick={() => handleScrollTo('features')} 
                    className="text-left text-sm text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5 group flex items-center"
                  >
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Features
                  </button>
                  
                  <button 
                    onClick={() => handleScrollTo('templates')} 
                    className="text-left text-sm text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5 group flex items-center"
                  >
                    <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Templates
                  </button>
                  
                  <button 
                    onClick={() => handleScrollTo('pricing')} 
                    className="text-left text-sm text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5 group flex items-center"
                  >
                    <div className="w-1 h-4 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    Pricing
                  </button>
                  
                  {isLoaded && (
                    <>
                      {isSignedIn ? (
                        <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                          <Link href="/template-select" onClick={() => setMobileMenuOpen(false)}>
                            <button className="w-full relative px-4 py-3 text-sm font-medium overflow-hidden rounded-xl group">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                              <span className="relative z-10 text-white">Dashboard</span>
                            </button>
                          </Link>
                          <div className="flex items-center px-4 py-2">
                            {/* <UserButton 
                              afterSignOutUrl="/"
                              appearance={{
                                elements: {
                                  avatarBox: "w-8 h-8 ring-2 ring-purple-500/50",
                                },
                              }}
                            /> */}
                         <button
  onClick={() => {signOut({ callbackUrl: "/" }) , console.log("clicked sigout button")}}
  className="text-sm text-gray-300 hover:text-white"
>
  Sign Out
</button>

                            <span className="ml-3 text-sm text-gray-300">Account</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                          {/* <SignInButton mode="modal">
                            <button 
                              className="w-full text-left text-sm text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5" 
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Sign In
                            </button>

                          </SignInButton> */}
                          <button onClick={() => router.push("/login")}>
  Sign In
</button>

                          {/* <SignUpButton mode="modal">
                            <button 
                              className="w-full relative px-4 py-3 text-sm font-medium overflow-hidden rounded-xl group" 
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg opacity-50"></div>
                              <span className="relative z-10 text-white">Get Started</span>
                            </button>
                          </SignUpButton> */}
                          <button onClick={() => router.push("/signup")}>
  Get Started
</button>

                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight mb-6 sm:mb-8 leading-none">
              Perfect Resume
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                Every Time
              </span>
            </h1>
          </div>
          
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Create professional, ATS-optimized resumes in minutes with the power of AI. 
              Land your dream job with resumes that stand out.
            </p>
          </div>

          <div 
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4">
              {isLoaded && (
                <>
                  {isSignedIn ? (
                    <Link href="/template-select">
                      <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        Create Resume Now
                      </button>
                    </Link>
                  ) : (
                    // <SignUpButton mode="modal">
                    //   <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    //     Create Resume Now
                    //   </button>
                    // </SignUpButton>
                    <button onClick={() => router.push("/signup")}>
  Get Started
</button>

                  )}
                </>
              )}
              
              <button className="border border-white border-opacity-30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:border-opacity-50 hover:bg-white hover:bg-opacity-5 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div 
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xs sm:max-w-md mx-auto px-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-light mb-1 sm:mb-2">50K+</div>
                <div className="text-gray-500 text-xs sm:text-sm">Resumes Created</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-light mb-1 sm:mb-2">95%</div>
                <div className="text-gray-500 text-xs sm:text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-light mb-1 sm:mb-2">2 Min</div>
                <div className="text-gray-500 text-xs sm:text-sm">Average Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white bg-opacity-50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin mb-4 sm:mb-6">
              Why Choose <span className="font-normal">ResumeB</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Leverage cutting-edge technology to create resumes that get noticed by both humans and machines.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer px-4"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin mb-4 sm:mb-6">
              Professional <span className="font-normal">Templates</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4 mb-8">
              Choose from our collection of modern, ATS-friendly templates designed for every industry.
            </p>
          </div>

          {/* Template Slider */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4 sm:px-0">
              {/* Template 1 - Modern */}
              <div className="flex-shrink-0 w-72 sm:w-80 snap-center">
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
                    <div className="h-full flex flex-col">
                      <div className="mb-6">
                        <div className="h-3 bg-indigo-600 rounded w-32 mb-2"></div>
                        <div className="h-2 bg-gray-400 rounded w-24"></div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-300 rounded w-4/6"></div>
                        <div className="mt-6 space-y-2">
                          <div className="h-2 bg-indigo-400 rounded w-2/3"></div>
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 border-t border-gray-200">
                    <h3 className="text-gray-900 font-semibold mb-1">Modern Professional</h3>
                    <p className="text-gray-600 text-sm">Clean and contemporary design</p>
                  </div>
                </div>
              </div>

              {/* Template 2 - Classic */}
              <div className="flex-shrink-0 w-72 sm:w-80 snap-center">
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="aspect-[8.5/11] bg-white p-8 border-l-4 border-emerald-500">
                    <div className="h-full flex flex-col">
                      <div className="mb-6 text-center">
                        <div className="h-3 bg-gray-800 rounded w-40 mb-2 mx-auto"></div>
                        <div className="h-2 bg-gray-400 rounded w-32 mx-auto"></div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div className="h-2 bg-emerald-500 rounded w-24 mb-3"></div>
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                        <div className="mt-6 space-y-2">
                          <div className="h-2 bg-emerald-500 rounded w-24"></div>
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 border-t border-gray-200">
                    <h3 className="text-gray-900 font-semibold mb-1">Classic Elegance</h3>
                    <p className="text-gray-600 text-sm">Traditional and professional</p>
                  </div>
                </div>
              </div>

              {/* Template 3 - Minimalist */}
              <div className="flex-shrink-0 w-72 sm:w-80 snap-center">
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="aspect-[8.5/11] bg-gray-50 p-8">
                    <div className="h-full flex flex-col">
                      <div className="mb-6">
                        <div className="h-4 bg-gray-900 rounded w-36 mb-2"></div>
                        <div className="h-1 bg-gray-900 rounded w-20 mb-3"></div>
                        <div className="h-2 bg-gray-400 rounded w-28"></div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-300 rounded w-11/12"></div>
                        <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                        <div className="mt-6">
                          <div className="h-2 bg-gray-900 rounded w-1/3 mb-2"></div>
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-300 rounded w-full"></div>
                            <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 border-t border-gray-200">
                    <h3 className="text-gray-900 font-semibold mb-1">Minimalist Pro</h3>
                    <p className="text-gray-600 text-sm">Simple yet impactful</p>
                  </div>
                </div>
              </div>

              {/* Template 4 - Creative */}
              <div className="flex-shrink-0 w-72 sm:w-80 snap-center">
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-8">
                    <div className="h-full flex flex-col">
                      <div className="mb-6">
                        <div className="h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded w-40 mb-2"></div>
                        <div className="h-2 bg-gray-400 rounded w-28"></div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div className="flex gap-2 mb-4">
                          <div className="h-2 bg-purple-400 rounded w-16"></div>
                          <div className="h-2 bg-pink-400 rounded w-16"></div>
                        </div>
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                        <div className="mt-6 space-y-2">
                          <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-2/3"></div>
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 border-t border-gray-200">
                    <h3 className="text-gray-900 font-semibold mb-1">Creative Edge</h3>
                    <p className="text-gray-600 text-sm">Bold and distinctive</p>
                  </div>
                </div>
              </div>

              {/* Template 5 - Executive */}
              <div className="flex-shrink-0 w-72 sm:w-80 snap-center">
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="aspect-[8.5/11] bg-gradient-to-b from-slate-100 to-white p-8">
                    <div className="h-full flex flex-col">
                      <div className="mb-6 pb-4 border-b-2 border-slate-800">
                        <div className="h-3 bg-slate-800 rounded w-36 mb-2"></div>
                        <div className="h-2 bg-slate-500 rounded w-28"></div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div className="h-2 bg-slate-800 rounded w-24 mb-2"></div>
                        <div className="h-2 bg-gray-300 rounded w-full"></div>
                        <div className="h-2 bg-gray-300 rounded w-11/12"></div>
                        <div className="mt-6 space-y-3">
                          <div className="h-2 bg-slate-800 rounded w-24"></div>
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 border-t border-gray-200">
                    <h3 className="text-gray-900 font-semibold mb-1">Executive Suite</h3>
                    <p className="text-gray-600 text-sm">Premium and sophisticated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Templates Button */}
          <div className="text-center mt-12">
            {isLoaded && (
              <>
                {isSignedIn ? (
                  <Link href="/template-select">
                    <button className="bg-white bg-opacity-10 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20">
                      View All Templates →
                    </button>
                  </Link>
                ) : (
                  // <SignUpButton mode="modal">
                  //   <button className="bg-white bg-opacity-10 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20">
                  //     View All Templates →
                  //   </button>
                  // </SignUpButton>
                  <button onClick={() => router.push("/signup")}>
  Get Started
</button>

                )}
              </>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin mb-4 sm:mb-6">
              Simple <span className="font-normal">Pricing</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4 mb-8">
              Start for free, upgrade when you need more power.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                        <button className="w-full bg-white bg-opacity-5 text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-10 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                          Get Started
                        </button>
                      </Link>
                    ) : (
                      // <SignUpButton mode="modal">
                      //   <button className="w-full bg-white bg-opacity-5 text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-10 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                      //     Get Started
                      //   </button>
                      // </SignUpButton>
                      <button onClick={() => router.push("/signup")}>
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
                      // <SignUpButton mode="modal">
                      //   <button className="w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group">
                      //     <span className="relative z-10">Upgrade Now</span>
                      //     <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      //   </button>
                      // </SignUpButton>
                      <button onClick={() => router.push("/signup")}>
  Get Started
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

                <button className="w-full relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 group border border-amber-500 border-opacity-50 hover:border-opacity-100">
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

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        {/* Background gradient only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-white bg-opacity-10 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
              <span className="text-xs sm:text-sm text-gray-300">Join 50,000+ professionals</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin mb-6 sm:mb-8 leading-tight px-4">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent font-normal">
                Career Story
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Don't let a mediocre resume hold you back. Create a compelling professional narrative 
              that opens doors to opportunities you deserve.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            {isLoaded && (
              <>
                {isSignedIn ? (
                  <Link href="/template-select">
                    <button className="group bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden">
                      <span className="relative z-10">Start Your Journey</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </Link>
                ) : (
                  // <SignUpButton mode="modal">
                  //   <button className="group bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden">
                  //     <span className="relative z-10">Start Your Journey</span>
                  //     <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  //   </button>
                  // </SignUpButton>
                  <button onClick={() => router.push("/signup")}>
  Get Started
</button>

                )}
              </>
            )}
            
            <button className="group border-2 border-white border-opacity-40 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-medium hover:border-opacity-80 hover:bg-white hover:bg-opacity-10 transition-all duration-500 backdrop-blur-sm">
              <span className="flex items-center justify-center">
                <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
                Watch Success Stories
              </span>
            </button>
          </div>

          {/* Social Proof Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="text-center p-4 sm:p-6 bg-white bg-opacity-5 rounded-2xl backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-thin mb-1 sm:mb-2 text-green-400">2x</div>
              <div className="text-sm sm:text-base text-gray-400">More Interview Calls</div>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-white bg-opacity-5 rounded-2xl backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-thin mb-1 sm:mb-2 text-blue-400">4.9★</div>
              <div className="text-sm sm:text-base text-gray-400">User Rating</div>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-white bg-opacity-5 rounded-2xl backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-thin mb-1 sm:mb-2 text-purple-400">24h</div>
              <div className="text-sm sm:text-base text-gray-400">Average Job Offer</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center px-4">
            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
              ✓ No credit card required  •  ✓ 3 free resumes  •  ✓ Cancel anytime
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 opacity-60">
              <div className="text-xs text-gray-500">TRUSTED BY</div>
              <div className="hidden sm:block h-px bg-gray-600 w-16"></div>
              <div className="text-xs sm:text-sm text-gray-500">Fortune 500 Companies</div>
              <div className="hidden sm:block h-px bg-gray-600 w-16"></div>
              <div className="text-xs text-gray-500">SINCE 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">ResumeB</div>
            <div className="flex flex-wrap justify-center space-x-6 sm:space-x-8 text-gray-400 text-sm sm:text-base">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div className="text-center mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm">
            © 2025 ResumeB. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}