import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: { minPrice: number; maxPrice: number }) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [minPrice, setMinPrice] = useState<string>('0');
  const [maxPrice, setMaxPrice] = useState<string>('100');
  const [areFiltersApplied, setAreFiltersApplied] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) {
      setMinPrice('0');
      setMaxPrice('100');
      setAreFiltersApplied(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleApply = () => {
    onApply({ minPrice: Number(minPrice), maxPrice: Number(maxPrice) });
    setAreFiltersApplied(true);
    onClose();
  };

  const handleClearFilters = () => {
    setMinPrice('0');
    setMaxPrice('100');
    setAreFiltersApplied(false);
    onApply({ minPrice: 0, maxPrice: 100 });
    onClose();
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? String(Number(value)) : '');
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? String(Number(value)) : '');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Filter Products</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Min Price</label>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Max Price</label>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex justify-end">
          <Button
            onClick={onClose}
            className={`mr-2 px-4 py-2 ${
              areFiltersApplied
                ? 'bg-gray-200 hover:bg-gray-300'
                : 'bg-gray-200 cursor-not-allowed'
            }`}
            // disabled={!areFiltersApplied}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClearFilters}
            className="mr-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Clear Filters
          </Button>
          <Button
            onClick={handleApply}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
