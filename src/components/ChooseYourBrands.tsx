"use client";

import { useState } from "react";
import Image from "next/image";

const brands = [
  {
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    models: ["iPhone 15", "iPhone 14", "iPhone 13", "iPhone 12"],
  },
  {
    name: "Samsung",
    logo: "https://logo.clearbit.com/samsung.com",
    models: ["Galaxy S24", "Galaxy S23", "Galaxy A54", "Galaxy Z Fold"],
  },
  {
    name: "OnePlus",
    logo: "https://logo.clearbit.com/oneplus.com",
    models: ["OnePlus 12", "OnePlus 11", "Nord CE 4", "OnePlus Open"],
  },
  {
    name: "Xiaomi",
    logo: "https://logo.clearbit.com/mi.com",
    models: ["Redmi Note 13", "Xiaomi 14", "Poco X6", "Redmi 13C"],
  },
  {
    name: "Oppo",
    logo: "https://logo.clearbit.com/oppo.com",
    models: ["Oppo Reno 11", "F21 Pro", "A78", "Find X7"],
  },
  {
    name: "Vivo",
    logo: "https://logo.clearbit.com/vivo.com",
    models: ["Vivo V30", "X100", "Y200", "T2 Pro"],
  },
  {
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    models: ["Pixel 8", "Pixel 8 Pro", "Pixel 7", "Pixel Fold"],
  },
  {
    name: "Realme",
    logo: "https://logo.clearbit.com/realme.com",
    models: ["Realme 12", "Narzo 70", "GT Neo", "C67"],
  },
];

export default function ChooseYourBrands() {
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-600">
            Step 1
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Choose Your Brand
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Select your phone brand and model — we’ll book your repair instantly.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => {
            const active = selectedBrand.name === brand.name;

            return (
              <button
                key={brand.name}
                type="button"
                onClick={() => setSelectedBrand(brand)}
                className={`rounded-3xl border p-6 text-left transition-all duration-300 ${
                  active
                    ? "border-purple-600 bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-xl"
                    : "border-gray-200 bg-white hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
                }`}
              >
                {/* Brand Logo */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    active ? "bg-white/20" : "bg-gray-100"
                  }`}
                >
                  {/* Using normal img avoids Next.js remote image errors */}
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                {/* Brand Name */}
                <h3
                  className={`mt-6 text-xl font-bold ${
                    active ? "text-white" : "text-gray-900"
                  }`}
                >
                  {brand.name}
                </h3>

                {/* Models Count */}
                <p
                  className={`mt-2 text-sm ${
                    active ? "text-purple-100" : "text-gray-500"
                  }`}
                >
                  {brand.models.length}+ models
                </p>
              </button>
            );
          })}
        </div>

        {/* Models Section */}
        <div className="mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-3xl font-black text-gray-950">
                {selectedBrand.name} Models
              </h3>

              <p className="mt-2 text-gray-600">
                Select your device model for repair service.
              </p>
            </div>

            <div className="rounded-full bg-purple-50 px-5 py-2 text-sm font-semibold text-purple-700">
              {selectedBrand.models.length}+ Models
            </div>
          </div>

          {/* Models Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {selectedBrand.models.map((model) => (
              <button
                key={model}
                type="button"
                className="rounded-2xl border border-gray-200 bg-white px-5 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
              >
                <h4 className="text-base font-bold text-gray-900">
                  {model}
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  Repair Available
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}