// ContactUs.tsx

"use client";

import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

import { useState } from "react";

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
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-[16px] text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100";

const ContactUs = () => {
  const [showSuccess, setShowSuccess] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      phoneNumber: "",
      email: "",
      brand: "",
      model: "",
      issue: "",
    });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    /*
    ==================================================
    RESEND READY API
    ==================================================

    await fetch("/api/contact-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    ==================================================
    */

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);

      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        brand: "",
        model: "",
        issue: "",
      });
    }, 3500);
  };

  return (
    <>
      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md px-4">

          <div className="w-full max-w-sm sm:max-w-md rounded-[24px] sm:rounded-[32px] bg-white p-5 sm:p-8 text-center shadow-2xl">

            <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2
                size={40}
                className="text-green-600"
              />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-black sm:text-3xl">
              Request Submitted
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
              Your repair request has been
              submitted successfully.
              Confirmation email will be sent
              shortly.
            </p>

            <button
              onClick={() =>
                setShowSuccess(false)
              }
              className="mt-6 h-12 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section
        className="overflow-hidden bg-[#f7f7f9] py-10 sm:py-14 lg:py-24 scroll-mt-24"
        id="contact-us"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-12 lg:px-8">

          {/* LEFT SIDE */}
          <div className="flex w-full flex-col justify-center lg:max-w-[480px]">

            <span className="w-fit rounded-full bg-purple-100 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-purple-700 sm:text-xs">
              Get In Touch
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Professional Mobile Repair Services
              You Can Trust
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              At FixMaster Mobiles, we provide
              fast, reliable, and affordable
              smartphone repair solutions.
            </p>

            {/* CONTACT CARDS */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">

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
                    target={
                      external
                        ? "_blank"
                        : undefined
                    }
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
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                        {title}
                      </p>

                      <p className="break-words text-sm font-semibold text-gray-900">
                        {value}
                      </p>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          {/* FORM */}
          <div className="w-full rounded-[22px] sm:rounded-[28px] border border-gray-200 bg-white p-4 sm:p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:flex-1">

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Book a Repair Appointment
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Fill out the form below and our
                support team will contact you
                shortly.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* ROW */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className={inputClass}
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName:
                        e.target.value,
                    })
                  }
                />

                <input
                  type="tel"
                  placeholder="9876543210"
                  className={inputClass}
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    const value =
                      e.target.value.replace(
                        /\D/g,
                        ""
                      );

                    if (
                      value.length <= 10
                    ) {
                      setFormData({
                        ...formData,
                        phoneNumber:
                          value,
                      });
                    }
                  }}
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                />
              </div>

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className={inputClass}
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email:
                      e.target.value,
                  })
                }
              />

              {/* ROW */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                <input
                  type="text"
                  placeholder="Device Brand"
                  className={inputClass}
                  value={formData.brand}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      brand:
                        e.target.value,
                    })
                  }
                />

                <input
                  type="text"
                  placeholder="Device Model"
                  className={inputClass}
                  value={formData.model}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      model:
                        e.target.value,
                    })
                  }
                />
              </div>

              {/* ISSUE */}
              <textarea
                rows={4}
                placeholder="Describe the issue..."
                className={`${inputClass} resize-none`}
                value={formData.issue}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    issue:
                      e.target.value,
                  })
                }
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="flex h-12 sm:h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-purple-700 to-violet-500 px-6 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-[1.01]"
              >
                Submit Repair Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;