"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  ShieldCheck,
  Star,
  Phone,
  BadgeCheck,
} from "lucide-react";

const stats = [
  { icon: Clock3, label: "Same Day Service" },
  { icon: ShieldCheck, label: "6-Month Warranty" },
  { icon: Star, label: "4.9/5 Customer Rating" },
];

export default function Hero() {
  const supportPhoneNumber = "tel:+918686509563";

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_35%)]" />
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,white,rgba(255,255,255,0.75),transparent)]" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-2 text-sm font-medium text-purple-700 backdrop-blur">
            <BadgeCheck className="h-4 w-4 fill-purple-600 text-white" />
            Trusted Mobile Repair Experts in Hyderabad
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-4xl font-black leading-[1.05] tracking-[-0.04em] text-gray-950 sm:text-5xl lg:text-7xl">
            Fast & Reliable{" "}
            <span className="bg-gradient-to-r from-purple-500 to-violet-700 bg-clip-text text-transparent">
              Mobile Repair
            </span>{" "}
            at Your Doorstep
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            Get premium smartphone repairs with genuine parts, expert
            technicians, free pickup support and warranty-backed service —
            all delivered quickly at your convenience.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(139,92,246,0.45)]"
            >
              Book Your Repair
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href={supportPhoneNumber}
              className="inline-flex items-center justify-center rounded-2xl border border-purple-200 bg-white px-8 py-4 text-base font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50"
            >
              <Phone className="mr-2 h-5 w-5 text-purple-600" />
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
                  <Icon className="h-5 w-5 text-purple-600" />
                </div>

                <p className="mt-4 text-sm font-semibold text-gray-900">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex items-center justify-center">
          
          {/* Glow Effects */}
          <div className="absolute h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-3xl" />
          <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-violet-400/20 blur-2xl" />

          {/* Image Card */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-purple-500/10 to-violet-500/10 blur-2xl" />

            <Image
              src="/hero-img.png"
              alt="Broken iPhone repair with tools and screws"
              width={850}
              height={750}
              priority
              className="relative z-10 h-auto w-full max-w-[650px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}