"use client";

export default function FeaturesSection() {
  const features = [
    {
      title: "ATS Optimized",
      description:
        "Built to pass applicant tracking systems with clean structure, correct headings, and keyword-friendly layouts.",
      icon: "🎯",
    },
    {
      title: "Instant PDF Download",
      description:
        "Export a perfectly formatted, print-ready PDF anytime — no watermarks, no compromises.",
      icon: "📄",
    },
    {
      title: "Live Resume Preview",
      description:
        "See every change reflected instantly so your resume always looks exactly how you want it.",
      icon: "🖥️",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 sm:py-24 lg:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
            Why Choose <span className="font-normal">ResumeB</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Leverage cutting-edge technology to create resumes that get noticed by both humans and machines.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
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
  );
}
