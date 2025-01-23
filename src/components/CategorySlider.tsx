"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import paperProducts from "../../public/category/paper-products.avif";
import boxFiles from "../../public/category/box-files.jpg";
import writingProducts from "../../public/category/WritingTools.webp";
import officeEssentials from "../../public/category/office-essentials.webp";
import printer from "../../public/category/printers.jpg";
import deskOrganizer from "../../public/category/desk-organizer.jpg";
import officeMachines from "../../public/category/office-equipments.avif";

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1); // Default to 1 for SSR safety

  const categories = [
    { id: 1, name: "Paper Products", image: paperProducts },
    { id: 2, name: "Box Files", image: boxFiles },
    { id: 3, name: "Writing Instruments", image: writingProducts },
    { id: 4, name: "Office Essentials", image: officeEssentials },
    { id: 5, name: "Printers & Technology", image: printer },
    { id: 6, name: "Office Machines", image: officeMachines },
    { id: 7, name: "Desk Organizers", image: deskOrganizer },
  ];

  // Function to determine the number of visible slides based on screen width
  const calculateVisibleSlides = () => {
    if (typeof window === "undefined") return 1; // SSR fallback
    if (window.innerWidth < 768) return 1; // 1 slide for mobile
    if (window.innerWidth < 1024) return 2; // 2 slides for tablets
    return 4; // 4 slides for desktop
  };

  useEffect(() => {
    // Set the initial number of visible slides
    setVisibleSlides(calculateVisibleSlides());

    // Update visible slides on window resize
    const handleResize = () => {
      setVisibleSlides(calculateVisibleSlides());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handlers for slider navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - visibleSlides ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - visibleSlides : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Shop By Categories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Essential Office Supplies In Our Online Stationery Shop That Keep
            Your Office Operations Smooth And Efficient
          </p>
        </div>
        <div className="relative">
          {categories.length > visibleSlides && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 md:-left-6"
              >
                <ChevronLeft className="h-6 w-6 text-gray-900" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 md:-right-6"
              >
                <ChevronRight className="h-6 w-6 text-gray-900" />
              </button>
            </>
          )}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              }}
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="w-full shrink-0 px-2 sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div
                    className="group relative overflow-hidden rounded-lg"
                    style={{ minHeight: "200px" }}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent sm:opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {categories.length > visibleSlides && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: categories.length - visibleSlides + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentIndex === index ? "bg-gray-900 w-4" : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySlider;
