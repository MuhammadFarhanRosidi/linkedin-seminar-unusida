"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Simple test data
const testSlides = [
  {
    id: "test1",
    title: "Test Slide 1",
    type: "test",
  },
  {
    id: "test2",
    title: "Test Slide 2",
    type: "test",
  },
];

export default function SimplePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < testSlides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-2xl min-h-[600px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12"
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {testSlides[currentSlide].title}
              </h1>
              <p className="text-gray-600">
                This is slide {currentSlide + 1} of {testSlides.length}
              </p>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Content Area</h2>
                <p>Simple content to test the slide functionality.</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Navigation */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg disabled:opacity-50"
            title="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === testSlides.length - 1}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg disabled:opacity-50"
            title="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
