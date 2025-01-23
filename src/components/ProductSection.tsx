"use client";

import React, { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Define the type for a product
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  hoverImage: string;
}

// Define the props interface
interface ProductSectionProps {
  products: Product[];
}

// Update the component to accept products with the defined type
const ProductSection: React.FC<ProductSectionProps> = ({ products }) => {
  const categories = [
    "Paper Products",
    "Box Files",
    "Writing Instruments",
    "Office Essentials",
    "Printers & Technology",
    "Office Machines",
    "Desk Organizers",
  ];

  // State
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to the first category
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1); // Dynamic based on screen size

  // Adjust items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) {
          setItemsPerSlide(4); // Desktop
        } else if (window.innerWidth >= 768) {
          setItemsPerSlide(2); // Tablet
        } else {
          setItemsPerSlide(1); // Mobile
        }
      }
    };

    updateItemsPerSlide(); // Run initially
    window.addEventListener("resize", updateItemsPerSlide);

    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  // Memoized filtered products based on active category
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => activeCategory === "DEALS" || product.category === activeCategory
    );
  }, [activeCategory, products]);

  // Slider navigation handlers with reset for empty or single-item lists
  const nextSlide = () => {
    if (filteredProducts.length <= itemsPerSlide) {
      setCurrentIndex(0); // Reset to first position
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex >= filteredProducts.length - itemsPerSlide ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (filteredProducts.length <= itemsPerSlide) {
      setCurrentIndex(0); // Reset to first position
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? filteredProducts.length - itemsPerSlide : prevIndex - 1
      );
    }
  };

  // Change active category and reset slider
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentIndex(0); // Reset slider position
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-20">
        {/* Header */}
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Our Products
        </h2>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
              }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`w-full flex-shrink-0 px-4 sm:w-1/2 md:w-1/4`}
                  style={{ flexBasis: `${100 / itemsPerSlide}%` }}
                >
                  {/* Product Card */}
                  <div className="group relative overflow-hidden rounded-lg bg-gray-100 pb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    {/* Image Section */}
                    <div className="relative aspect-square w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <Image
                        src={product.hoverImage}
                        alt={product.name}
                        fill
                        className="absolute inset-0 object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <div className="w-full px-6">
                        <button className="mt-4 w-full rounded-full bg-blue-600 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
