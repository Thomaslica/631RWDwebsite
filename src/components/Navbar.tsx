import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-800">Portfolio</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Home</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Projects</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Contact</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="text-gray-500 hover:text-gray-700">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-500 hover:text-gray-700">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#projects" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Projects</a>
            <a href="#about" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}