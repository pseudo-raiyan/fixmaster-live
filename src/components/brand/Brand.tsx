// Brand.tsx

"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { usePathname, useRouter } from "next/navigation";

import { MOBILE_DATA } from "@/data/mobileData";

import BrandGrid from "./BrandGrid";
import ModelSection from "./ModelSection";
import BookingModal from "./BookingModal";

const Brand = () => {
  // NEXT NAVIGATION
  const router = useRouter();
  const pathname = usePathname();

  // STATES
  const [selectedBrand, setSelectedBrand] =
    useState("");

  const [selectedModel, setSelectedModel] =
    useState("");

  const [showBookingModal, setShowBookingModal] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  const step2Ref =
    useRef<HTMLDivElement | null>(null);

  // FORM DATA
  const [formData, setFormData] =
    useState({
      customerName: "",
      mobileNumber: "",
      emailAddress: "",
    });

  // SELECTED BRAND DATA
  const selectedBrandData = useMemo(() => {
    return MOBILE_DATA.find(
      (item) => item.name === selectedBrand
    );
  }, [selectedBrand]);

  // FILTERED MODELS
  const filteredModels = useMemo(() => {
    if (!selectedBrandData?.models)
      return [];

    return selectedBrandData.models.filter(
      (model) =>
        model
          .toLowerCase()
          .includes(
            searchQuery.toLowerCase()
          )
    );
  }, [
    selectedBrandData,
    searchQuery,
  ]);

  // AUTO SCROLL
  useEffect(() => {
    if (
      selectedBrand &&
      step2Ref.current
    ) {
      setTimeout(() => {
        step2Ref.current?.scrollIntoView(
          {
            behavior: "smooth",
            block: "start",
          }
        );
      }, 250);
    }
  }, [selectedBrand]);

  // BRAND SELECT
  const handleBrandSelect = (
    brand: string
  ) => {
    /*
    ============================================
    ANY OTHER BRAND
    ============================================
    */

    if (brand === "Any other") {
      // IF USER IS ON HOMEPAGE
      if (pathname === "/") {
        const contactSection =
          document.getElementById(
            "contact-us"
          );

        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }

      // IF USER IS ON OTHER PAGE
      else {
        router.push("/contact");
      }

      // RESET
      setSelectedBrand("");
      setSelectedModel("");
      setSearchQuery("");

      return;
    }

    /*
    ============================================
    NORMAL FLOW
    ============================================
    */

    setSelectedBrand(brand);
    setSelectedModel("");
    setSearchQuery("");
  };

  // MODEL SELECT
  const handleModelSelect = (
    model: string
  ) => {
    setSelectedModel(model);

    setShowBookingModal(true);
  };

  // CLOSE MODAL
  const handleCloseModal = () => {
    setShowBookingModal(false);

    // RESET FORM
    setFormData({
      customerName: "",
      mobileNumber: "",
      emailAddress: "",
    });
  };

  return (
    <>
      {/* MAIN SECTION */}
      <section className="w-full bg-[#f7f8fc] px-4 py-10 sm:py-14">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="mb-10 text-center sm:mb-14">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 sm:text-sm">
              Instant Repair Booking
            </p>

            <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Select Your Device
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
              Choose your mobile brand and
              model to instantly book your
              repair.
            </p>
          </div>

          {/* STEP 1 */}
          <div className="rounded-[24px] sm:rounded-[32px] border border-gray-100 bg-white p-4 shadow-sm sm:p-7">

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
                Choose your mobile brand to
                continue.
              </p>
            </div>

            {/* BRAND GRID */}
            <BrandGrid
              brands={MOBILE_DATA}
              selectedBrand={
                selectedBrand
              }
              onSelect={
                handleBrandSelect
              }
            />
          </div>

          {/* STEP 2 */}
          {selectedBrand && (
            <div
              ref={step2Ref}
              className="mt-8"
            >
              <ModelSection
                selectedBrand={
                  selectedBrand
                }
                selectedModel={
                  selectedModel
                }
                searchQuery={
                  searchQuery
                }
                setSearchQuery={
                  setSearchQuery
                }
                models={
                  filteredModels
                }
                onModelSelect={
                  handleModelSelect
                }
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

      {/* BOOKING MODAL */}
      {showBookingModal && (
        <BookingModal
          selectedBrand={
            selectedBrand
          }
          selectedModel={
            selectedModel
          }
          formData={formData}
          setFormData={
            setFormData
          }
          onClose={
            handleCloseModal
          }
        />
      )}
    </>
  );
};

export default Brand;