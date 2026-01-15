"use client";
export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-light">ResumeB</div>
          <div className="flex space-x-8 text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          © 2025 ResumeB. All rights reserved.
        </div>
      </div>
    </footer>
  );
}