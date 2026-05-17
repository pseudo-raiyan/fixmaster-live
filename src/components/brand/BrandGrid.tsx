"use client";

import BrandCard from "./BrandCard";

interface Brand {
  name: string;
  image: string;
}

interface BrandGridProps {
  brands: Brand[];

  selectedBrand: string;

  onSelect: (brand: string) => void;
}

const BrandGrid = ({
  brands,
  selectedBrand,
  onSelect,
}: BrandGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {brands.map((brand) => (
        <BrandCard
          key={brand.name}
          brand={brand}
          active={selectedBrand === brand.name}
          onClick={() => onSelect(brand.name)}
        />
      ))}
    </div>
  );
};

export default BrandGrid;