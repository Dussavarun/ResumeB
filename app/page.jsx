"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Navbar from "../components/Hero/Navbar";
import Notification from "../components/Hero/Notification";
import BackgroundAnimation from "../components/Hero/BackgroundAnimation";
import HeroSection from "../components/Hero/HeroSection";
import FeaturesSection from "../components/Hero/FeaturesSection";
import TemplatesSection from "../components/Hero/TemplatesSection";
import PricingSection from "../components/Hero/PricingSection";
import CTASection from "../components/Hero/CTASection";
import Footer from "../components/Hero/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { data: session, status } = useSession();
  const isSignedIn = status === "authenticated";
  const isLoaded = status !== "loading";

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

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Notification 
        showNotification={showNotification} 
        setShowNotification={setShowNotification} 
      />

      <BackgroundAnimation 
        mousePosition={mousePosition} 
        isClient={isClient} 
      />

      <Navbar 
        isSignedIn={isSignedIn} 
        isLoaded={isLoaded} 
        handleScrollTo={handleScrollTo} 
      />

      <HeroSection 
        isVisible={isVisible} 
        isSignedIn={isSignedIn} 
        isLoaded={isLoaded} 
      />

      <FeaturesSection />

      <TemplatesSection 
        isSignedIn={isSignedIn} 
        isLoaded={isLoaded} 
      />

      <PricingSection 
        isSignedIn={isSignedIn} 
        isLoaded={isLoaded} 
      />

      <CTASection 
        isSignedIn={isSignedIn} 
        isLoaded={isLoaded} 
      />

      <Footer />
    </div>
  );
}