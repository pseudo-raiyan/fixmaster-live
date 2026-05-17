import { 
  Smartphone, 
  BatteryCharging, 
  Plug, 
  Droplet, 
  Cpu, 
  Camera 
} from "lucide-react";

// Service Data Array for easy maintenance
const servicesData = [
  {
    title: "Screen Replacement",
    description:
      "Cracked or shattered display? We use OEM-grade panels with perfect colour & touch.",
    icon: Smartphone,
  },
  {
    title: "Battery Replacement",
    description:
      "Drains too fast? Get a genuine high-capacity battery installed in under an hour.",
    icon: BatteryCharging,
  },
  {
    title: "Charging Issues",
    description:
      "Loose port, slow charging, or no power? We diagnose and fix all charging faults.",
    icon: Plug,
  },
  {
    title: "Water Damage",
    description:
      "Liquid spill or rain damage? Expert ultrasonic cleaning and component-level repair.",
    icon: Droplet,
  },
  {
    title: "Software Issues",
    description:
      "Stuck on logo, IMEI loss, OS crashes — full software repair and data backup.",
    icon: Cpu,
  },
  {
    title: "Camera & Speaker",
    description:
      "Blurry photos or muffled audio? Restore your camera, mic & speakers like new.",
    icon: Camera,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 sm:text-sm">
            Our Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Every repair, expertly handled
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base lg:mt-5">
            From cracked screens to deep water damage — our certified technicians
            fix it all with genuine parts and warranty.
          </p>
        </div>

        {/* GRID SECTION */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-[24px] border border-gray-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-8"
              >
                {/* ICON WRAPPER */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[14px] bg-purple-600 text-white transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                </div>

                {/* TEXT CONTENT */}
                <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Services;