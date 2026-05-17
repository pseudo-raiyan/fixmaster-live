"use client";

import {
  ChevronRight,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

interface ModelCardProps {
  model: string;

  active: boolean;

  onClick: () => void;
}

const ModelCard = ({
  model,
  active,
  onClick,
}: ModelCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex min-h-[120px] rounded-2xl border text-left transition-all duration-300

      ${
        active
          ? "border-purple-500 bg-purple-50 shadow-md shadow-purple-100"
          : "border-gray-200 bg-white hover:border-purple-400 hover:shadow-md"
      }

      p-4`}
    >
      <div className="flex h-full w-full flex-col justify-between">

        <div className="flex items-start justify-between gap-3">

          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all

            ${
              active
                ? "bg-purple-600"
                : "bg-purple-50 group-hover:bg-purple-100"
            }`}
          >
            <Smartphone
              size={17}
              className={
                active
                  ? "text-white"
                  : "text-purple-600"
              }
            />
          </div>

          <div className="shrink-0">
            {active ? (
              <CheckCircle2
                size={18}
                className="text-purple-600"
              />
            ) : (
              <ChevronRight
                size={16}
                className="text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-purple-500"
              />
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3
            className={`text-sm font-semibold leading-relaxed sm:text-[15px]

            ${
              active
                ? "text-purple-700"
                : "text-gray-900"
            }`}
          >
            {model}
          </h3>
        </div>
      </div>
    </button>
  );
};

export default ModelCard;