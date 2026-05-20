"use client";

import Image from "next/image";

interface BrandCardProps {
  brand: {
    name: string;
    image: string;
  };

  active: boolean;

  onClick: () => void;
}

const BrandCard = ({
  brand,
  active,
  onClick,
}: BrandCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`group overflow-hidden rounded-3xl border transition-all duration-300

      ${
        active
          ? "border-purple-600 bg-white shadow-lg shadow-purple-100 ring-2 ring-purple-200"
          : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-lg"
      }

      px-4 py-5 sm:px-6 sm:py-7`}
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className={`relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 sm:h-20 sm:w-20

          ${
            active
              ? "bg-purple-50"
              : "bg-purple-100 group-hover:bg-purple-200"
          }`}
        >
          <Image
            src={brand.image}
            alt={brand.name}
            width={46}
            height={46}
            className="object-contain sm:h-[52px] sm:w-[52px]"
          />
        </div>

        <h3
          className={`mt-4 text-center text-xs font-semibold sm:text-base

          ${
            active
              ? "text-purple-700"
              : "text-gray-900"
          }`}
        >
          {brand.name}
        </h3>
      </div>
    </button>
  );
};

export default BrandCard;