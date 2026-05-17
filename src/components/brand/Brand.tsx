"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { FaCheck } from "react-icons/fa6";

import { MOBILE_DATA } from "@/data/mobileData";

import BrandGrid from "./BrandGrid";
import ModelSection from "./ModelSection";
import BookingModal from "./BookingModal";

const Brand = () => {
  // STATES
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const step2Ref = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    emailAddress: "",
  });

  // SELECTED BRAND DATA
  const selectedBrandData = useMemo(() => {
    return MOBILE_DATA.find((item) => item.name === selectedBrand);
  }, [selectedBrand]);

  // FILTERED MODELS
  const filteredModels = useMemo(() => {
    if (!selectedBrandData?.models) return [];

    return selectedBrandData.models.filter((model) =>
      model.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedBrandData, searchQuery]);

  // AUTO SCROLL
  useEffect(() => {
    if (selectedBrand && step2Ref.current) {
      setTimeout(() => {
        step2Ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 250);
    }
  }, [selectedBrand]);

  // BRAND SELECT
  const handleBrandSelect = (brand: string) => {
    // Intercept "Any other" to scroll to Contact Us
    if (brand === "Any other") {
      const contactSection = document.getElementById("contact-us");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // Reset selections so Step 2 doesn't open
      setSelectedBrand("");
      setSelectedModel("");
      setSearchQuery("");
      return; // Exit early
    }

    // Standard behavior for all other brands
    setSelectedBrand(brand);
    setSelectedModel("");
    setSearchQuery("");
  };

  // MODEL SELECT
  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setShowBookingModal(true);
  };

  // CLOSE MODAL
  const handleCloseModal = () => {
    setShowBookingModal(false);
  };

  // SUBMIT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      brand: selectedBrand,
      model: selectedModel,
      ...formData,
    };

    console.log(payload);

    // CLOSE MODAL
    setShowBookingModal(false);

    // SHOW SUCCESS
    setShowSuccess(true);

    // HIDE AFTER 3 SEC
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // RESET
    setFormData({
      customerName: "",
      mobileNumber: "",
      emailAddress: "",
    });
  };

  return (
    <>
      {/* SUCCESS TOAST */}
      {showSuccess && (
        <div className="fixed inset-x-0 top-4 z-[100] flex justify-center px-4 sm:top-6">
          <div className="animate-in slide-in-from-top-3 fade-in duration-300">
            <div className="flex w-full max-w-[92vw] items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 shadow-lg sm:max-w-md sm:px-5">
              {/* ICON */}
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600">
                <FaCheck className="text-[10px] text-white" />
              </div>

              {/* TEXT */}
              <p className="text-xs font-medium leading-relaxed text-green-800 sm:text-sm">
                Repair request received! We’ll contact you shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MAIN SECTION */}
      <section className="w-full bg-[#f7f8fc] px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 sm:text-sm">
              Instant Repair Booking
            </p>

            <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Select Your Device
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
              Choose your mobile brand and model to instantly book your repair.
            </p>
          </div>

          {/* STEP 1 */}
          <div className="rounded-[32px] border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
            {/* STEP TITLE */}
            <div className="mb-7">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-700 sm:text-xs">
                  Step 1
                </span>
              </div>

              <h2 className="text-2xl font-bold text-black sm:text-3xl">
                Select Brand
              </h2>

              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Choose your mobile brand to continue.
              </p>
            </div>

            {/* BRAND GRID */}
            <BrandGrid
              brands={MOBILE_DATA}
              selectedBrand={selectedBrand}
              onSelect={handleBrandSelect}
            />
          </div>

          {/* STEP 2 */}
          {selectedBrand && (
            <div ref={step2Ref}>
              <ModelSection
                selectedBrand={selectedBrand}
                selectedModel={selectedModel}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                models={filteredModels}
                onModelSelect={handleModelSelect}
                onChangeBrand={() => {
                  setSelectedBrand("");
                  setSelectedModel("");
                  setSearchQuery("");
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* MODAL */}
      {showBookingModal && (
        <BookingModal
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
          formData={formData}
          setFormData={setFormData}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Brand;