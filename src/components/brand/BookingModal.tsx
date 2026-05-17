"use client";

import { X } from "lucide-react";

interface BookingModalProps {
  selectedBrand: string;

  selectedModel: string;

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

  onSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => void;
}

const BookingModal = ({
  selectedBrand,
  selectedModel,
  formData,
  setFormData,
  onClose,
  onSubmit,
}: BookingModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-5 backdrop-blur-md">

      {/* MODAL */}
      <div className="relative w-full max-w-[460px] rounded-[30px] bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-black"
        >
          <X size={18} />
        </button>

        {/* CONTENT */}
        <div className="p-5 sm:p-6">

          {/* STEP */}
          <div className="mb-5 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-purple-600" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-700">
                Final Step
              </span>
            </div>
          </div>

          {/* TITLE */}
          <div className="mb-5 text-center">
            <h2 className="text-2xl font-bold text-black sm:text-3xl">
              Instant Booking
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-gray-500 sm:text-[15px]">
              Fill in your details and we’ll confirm
              your repair booking instantly.
            </p>
          </div>

          {/* BRAND + MODEL */}
          <div className="mb-5 grid grid-cols-2 gap-3">

            {/* BRAND */}
            <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                Brand
              </p>

              <h3 className="truncate text-sm font-semibold text-black">
                {selectedBrand}
              </h3>
            </div>

            {/* MODEL */}
            <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                Model
              </p>

              <h3 className="truncate text-sm font-semibold text-black">
                {selectedModel}
              </h3>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="space-y-4"
          >

            {/* NAME */}
            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Customer Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.customerName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    customerName:
                      e.target.value,
                  })
                }
                className="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-100 text-purple-600"
                required
              />
            </div>

            {/* MOBILE */}
            <div>
              <label className="mb-2 block text-sm font-medium text-black">
                Mobile Number
              </label>

              <div className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100">

                <div className="flex h-12 items-center border-r border-gray-200 bg-[#fafafa] px-4 text-sm font-semibold text-black">
                  +91
                </div>

                <input
                  type="tel"
                  placeholder="9876543210"
                  value={formData.mobileNumber}
                  onChange={(e) => {
                    const value =
                      e.target.value.replace(
                        /\D/g,
                        ""
                      );

                    if (value.length <= 10) {
                      setFormData({
                        ...formData,
                        mobileNumber:
                          value,
                      });
                    }
                  }}
                  className="h-12 w-full bg-white px-4 text-sm outline-none text-purple-600"
                  required
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                />
              </div>

              <p className="mt-1 text-[11px] text-gray-500">
                Enter a valid 10-digit mobile
                number
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
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    emailAddress:
                      e.target.value,
                  })
                }
                className="h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm outline-none transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-100 text-purple-600"
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-1 flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-[1.01] hover:opacity-95 active:scale-[0.98]"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;