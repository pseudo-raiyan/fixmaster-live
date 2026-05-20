// BookingModal.tsx

"use client";

import { X, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  selectedBrand?: string;
  selectedModel?: string;

  formData: {
    customerName: string;
    mobileNumber: string;
    emailAddress: string;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<{
      customerName: string;
      mobileNumber: string;
      emailAddress: string;
    }>
  >;

  onClose: () => void;
}

const BookingModal = ({
  selectedBrand = "",
  selectedModel = "",
  formData,
  setFormData,
  onClose,
}: BookingModalProps) => {
  const [showSuccess, setShowSuccess] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    /*
    ==================================================
    RESEND READY API
    ==================================================

    await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        selectedBrand,
        selectedModel,
      }),
    });

    ==================================================
    */

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 3500);
  };

  return (
    <>
      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md px-4">

          <div className="w-full max-w-sm sm:max-w-md rounded-[24px] sm:rounded-[32px] bg-white p-5 sm:p-8 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300">

            <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2
                size={40}
                className="text-green-600"
              />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-black sm:text-3xl">
              Booking Confirmed
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
              Your booking request has been
              submitted successfully.
              Confirmation email will be sent
              shortly.
            </p>

            <button
              onClick={() => {
                setShowSuccess(false);
                onClose();
              }}
              className="mt-6 h-12 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-md">

        <div className="flex min-h-screen items-center justify-center p-3 sm:p-5">

          <div className="relative w-full max-w-lg rounded-[24px] sm:rounded-[32px] bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300">

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-black"
            >
              <X size={18} />
            </button>

            <div className="p-4 sm:p-6 md:p-8">

              {/* STEP */}
              <div className="mb-5 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2">
                  <div className="h-2 w-2 rounded-full bg-purple-600" />

                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-700">
                    Final Step
                  </span>
                </div>
              </div>

              {/* TITLE */}
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                  Instant Booking
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-[15px] sm:leading-7">
                  Fill in your details and we’ll
                  confirm your repair booking
                  instantly.
                </p>
              </div>

              {/* BRAND + MODEL */}
              <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-4">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Brand
                  </p>

                  <h3 className="truncate text-sm sm:text-base font-semibold text-black">
                    {selectedBrand}
                  </h3>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-4">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Model
                  </p>

                  <h3 className="truncate text-sm sm:text-base font-semibold text-black">
                    {selectedModel}
                  </h3>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Customer Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={
                      formData?.customerName ||
                      ""
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customerName:
                          e.target.value,
                      })
                    }
                    className="h-12 sm:h-14 w-full rounded-2xl border border-gray-200 px-4 text-[16px] outline-none transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    required
                  />
                </div>

                {/* MOBILE */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Mobile Number
                  </label>

                  <div className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">

                    <div className="flex h-12 sm:h-14 items-center border-r border-gray-200 bg-[#fafafa] px-4 text-sm font-semibold text-black">
                      +91
                    </div>

                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={
                        formData?.mobileNumber ||
                        ""
                      }
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
                            mobileNumber:
                              value,
                          });
                        }
                      }}
                      className="h-12 sm:h-14 w-full px-4 text-[16px] outline-none"
                      required
                      maxLength={10}
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                    />
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Only 10 digits allowed
                  </p>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={
                      formData?.emailAddress ||
                      ""
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        emailAddress:
                          e.target.value,
                      })
                    }
                    className="h-12 sm:h-14 w-full rounded-2xl border border-gray-200 px-4 text-[16px] outline-none transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                    required
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="flex h-12 sm:h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-[1.01]"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;