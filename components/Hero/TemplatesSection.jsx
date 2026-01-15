"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TemplatesSection({ isSignedIn, isLoaded }) {
  const router = useRouter();
  const templates = [
  {
    name: "Modern Professional",
    description: "Clean and contemporary design",
    image: "/images/modern.png",
  },
  {
    name: "Classic Elegance",
    description: "Traditional and professional",
    image: "/images/classic.png",
  },
  {
    name: "Gengar",
    description: "Bold and modern layout",
    image: "/images/gengar.png",
  },
];
const repeatedTemplates = [...templates, ...templates, ...templates];

  return (
    <section id="templates" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-6">
             📄Professional <span className="font-normal">Templates</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Handcrafted templates built to pass ATS scans and impress hiring managers — clean, focused, and job-ready.
          </p>
        </div>

        {/* Template Slider */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {/* Template 1 - Modern */}
           {repeatedTemplates.map((template, index) => (
  <div key={index} className="flex-shrink-0 w-80 snap-center">
    <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
      
      {/* Template Image */}
      <div className="aspect-[8.5/11] bg-gray-100 overflow-hidden">
        <img
          src={template.image}
          alt={template.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer */}
      <div className="bg-white p-4 border-t border-gray-200">
        <h3 className="text-gray-900 font-semibold mb-1">
          {template.name}
        </h3>
        <p className="text-gray-600 text-sm">
          {template.description}
        </p>
      </div>
    </div>
  </div>
))}

          </div>
        </div>

        {/* View All Templates Button */}
        <div className="text-center mt-12">
          {isLoaded && (
            <>
              {isSignedIn ? (
                <Link href="/template-select">
                  <button className="bg-white/10 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                    View All Templates →
                  </button>
                </Link>
              ) : (
                <button 
                  onClick={() => router.push("/signup")}
                  className="bg-white/10 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  View All Templates →
                </button>
              )}
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}