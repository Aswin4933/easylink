"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import office1 from "../../public/heroImages/office-1.jpg";
import office2 from "../../public/heroImages/office-3.jpg";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const slides = [
    {
      title: "Stock up your desk",
      subtitle: "Mix & match",
      offer: "with our premium office",
      description: "supplies",
      image: office1,
    },
    {
      title: "Premium Collection",
      subtitle: "New Arrivals",
      offer: "exclusive designs",
      description: "stationery",
      image: office2,
    },
  ];

  // Handle slide changes
  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    setShouldAnimate(false);
    setTimeout(() => setShouldAnimate(true), 50);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((activeSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  // Inject styles for animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideFromLeft {
        from {
          transform: translateX(-100px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideFromRight {
        from {
          transform: translateX(100px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .animate-slideFromLeft {
        animation: slideFromLeft 0.7s ease-out forwards;
      }
      
      .animate-slideFromRight {
        animation: slideFromRight 0.7s ease-out forwards;
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.7s ease-out forwards;
      }
      
      .animation-delay-100 {
        animation-delay: 100ms;
      }
      
      .animation-delay-200 {
        animation-delay: 200ms;
      }
      
      .animation-delay-300 {
        animation-delay: 300ms;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Clean up the styles when the component unmounts
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-blue-600 px-5 md:px-20">
      {/* Sliding Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            activeSlide === index
              ? "translate-x-0"
              : index < activeSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

          {/* Content for this slide */}
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-5 md:px-20">
              <div className="max-w-2xl">
                {shouldAnimate && (
                  <>
                    <span className="mb-4 inline-block animate-slideFromLeft rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                      {slide.subtitle}
                    </span>

                    <h1 className="mb-2 animate-slideFromRight text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>

                    <h2 className="mb-2 animate-slideFromLeft animation-delay-100 text-4xl font-bold text-white/90 md:text-5xl lg:text-6xl">
                      {slide.offer}
                    </h2>

                    <p className="mb-8 animate-slideFromRight animation-delay-200 text-3xl font-light text-white/80 md:text-4xl">
                      {slide.description}
                    </p>

                    <button onClick={()=>location.href='/contact'} className="group relative animate-fadeIn animation-delay-300 overflow-hidden rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition-all hover:shadow-lg">
                      <span className="relative z-10 flex items-center gap-2">
                        Contact Now
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 rounded-full transition-all ${
              activeSlide === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
