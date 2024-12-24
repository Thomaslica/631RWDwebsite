import React from 'react';
import { Code, Palette, Server } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: <Code className="h-6 w-6" />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend Development',
    icon: <Server className="h-6 w-6" />,
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Design',
    icon: <Palette className="h-6 w-6" />,
    items: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design']
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This is Li, I'm NAU student also a passionate full-stack developer with many years of experience building web applications.
            I love creating beautiful, functional, and user-friendly websites that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}