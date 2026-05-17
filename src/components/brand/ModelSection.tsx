"use client";

import { Search } from "lucide-react";

import ModelCard from "./ModelCard";

interface ModelSectionProps {
  selectedBrand: string;

  selectedModel: string;

  searchQuery: string;

  setSearchQuery: (value: string) => void;

  models: string[];

  onModelSelect: (model: string) => void;

  onChangeBrand: () => void;
}

const ModelSection = ({
  selectedBrand,
  selectedModel,
  searchQuery,
  setSearchQuery,
  models,
  onModelSelect,
  onChangeBrand,
}: ModelSectionProps) => {
  return (
    <div className="mt-6 rounded-[32px] border border-gray-100 bg-white p-5 shadow-sm sm:p-7">

      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-purple-600" />

            <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-700 sm:text-xs">
              Step 2
            </span>
          </div>

          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            Select your {selectedBrand} model
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Choose your device model.
          </p>
        </div>

        <button
          onClick={onChangeBrand}
          className="w-fit rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-purple-500 hover:text-purple-600"
        >
          ← Change Brand
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <div className="flex h-12 items-center gap-3 rounded-2xl border border-gray-200 bg-[#fafafa] px-4 transition-all duration-300 focus-within:border-purple-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-purple-100">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search model..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            className="h-full w-full bg-transparent text-sm text-black outline-none placeholder:text-purple-400"
          />
        </div>
      </div>

      {/* MODELS */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {models.map((model) => (
          <ModelCard
            key={model}
            model={model}
            active={selectedModel === model}
            onClick={() =>
              onModelSelect(model)
            }
          />
        ))}
      </div>

      {/* EMPTY */}
      {models.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 py-14 text-center">

          <div className="mb-3 rounded-full bg-purple-50 p-4">
            <Search
              size={24}
              className="text-purple-600"
            />
          </div>

          <h3 className="text-lg font-semibold text-black">
            No models found
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Try searching with a different keyword.
          </p>
        </div>
      )}
    </div>
  );
};

export default ModelSection;