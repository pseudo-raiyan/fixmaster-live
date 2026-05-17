"use client";

import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    title: "Phone Support",
    value: "+91 8686509563",
    href: "tel:+918686509563",
    icon: Phone,
  },
  {
    title: "Email Address",
    value: "support@fixmastermobiles.com",
    href: "mailto:support@fixmastermobiles.com",
    icon: Mail,
  },
  {
    title: "Service Location",
    value: "Hyderabad, Telangana",
    href: "https://maps.google.com/?q=Hyderabad,Telangana",
    icon: MapPin,
    external: true,
  },
];

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100";

const ContactUs = () => {
  return (
    <section className="overflow-hidden bg-[#f7f7f9] py-12 sm:py-16 lg:py-24 scroll-mt-24" id="contact-us">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-10 lg:px-8">
        
        {/* LEFT SIDE */}
        <div className="flex w-full flex-col justify-center lg:max-w-[480px]">
          <span className="w-fit rounded-full bg-purple-100 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-700 sm:text-xs">
            Get In Touch
          </span>

          <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight text-gray-900 min-[400px]:text-4xl sm:text-5xl">
            Professional Mobile Repair Services You Can Trust
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            At FixMaster Mobiles, we provide fast, reliable, and
            affordable smartphone repair solutions handled by skilled
            technicians. Whether it’s a screen replacement, battery
            issue, software problem, or water damage, we’re here to
            restore your device with precision and care.
          </p>

          {/* CONTACT CARDS */}
          <div className="mt-7 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-1">
            {contactInfo.map(
              ({
                title,
                value,
                href,
                icon: Icon,
                external,
              }) => (
                <a
                  key={title}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={
                    external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-h-[88px] items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 text-white">
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-[11px]">
                      {title}
                    </p>

                    <p className="break-words text-sm font-semibold text-gray-900 sm:text-base">
                      {value}
                    </p>
                  </div>
                </a>
              )
            )}
          </div>
        </div>

        {/* FORM */}
        <div className="w-full rounded-[28px] border border-gray-200 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-7 md:p-8 lg:flex-1">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Book a Repair Appointment
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Fill out the form below and our support team will contact
              you shortly to confirm your repair request.
            </p>
          </div>

          <form className="space-y-5">
            
            {/* ROW */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InputField
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
              />

              <InputField
                label="Phone Number"
                type="tel"
                placeholder="+91 9876543210"
              />
            </div>

            <InputField
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
            />

            {/* ROW */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InputField
                label="Device Brand"
                type="text"
                placeholder="Any brand you have"
              />

              <InputField
                label="Device Model"
                type="text"
                placeholder="Any model you have"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                Describe the Issue
              </label>

              <textarea
                rows={5}
                placeholder="Please provide details about the problem you are experiencing with your device..."
                className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              />
            </div>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-purple-700 to-violet-500 px-6 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl sm:h-14 sm:text-base"
            >
              Submit Repair Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField = ({
  label,
  type,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-800">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
};

export default ContactUs;