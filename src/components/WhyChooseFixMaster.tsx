import { Home, Zap, IndianRupee, Award } from "lucide-react";

// Data array for easy adjustments
const featuresData = [
  {
    title: "Doorstep Service",
    description: "We come to you — home, office or anywhere in Hyderabad.",
    icon: Home,
  },
  {
    title: "Same Day Repair",
    description: "Most repairs completed within 60 minutes on the spot.",
    icon: Zap,
  },
  {
    title: "Affordable Pricing",
    description: "Transparent quotes. No hidden charges. Best rates in town.",
    icon: IndianRupee,
  },
  {
    title: "Expert Technicians",
    description: "10+ years of experience with all leading mobile brands.",
    icon: Award,
  },
];

const WhyChooseFixMaster = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300 sm:text-sm">
            Why FixMaster
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white min-[400px]:text-4xl lg:text-5xl">
            Built on trust. Backed by warranty.
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 gap-5 min-[540px]:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col rounded-[24px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09] hover:shadow-xl sm:p-7"
              >
                {/* ICON WRAPPER */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-purple-200 transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white sm:h-11 sm:w-11">
                  <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" strokeWidth={2} />
                </div>

                {/* CONTENT */}
                <h3 className="mb-2.5 text-lg font-bold text-white sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-purple-100/70 group-hover:text-purple-100/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseFixMaster;