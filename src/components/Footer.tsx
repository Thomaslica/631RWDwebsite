import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold">Li's Portfolio</span>
            <p className="mt-2 text-gray-400">Building amazing web experiences</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Li. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}