import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Huayun Li</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          NAU student, Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}