/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { User, Code, Briefcase, Mail, GraduationCap } from 'lucide-react';

const sections = [
  { id: 'home', icon: User, label: 'Home' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'contact', icon: Mail, label: 'Contact' }
];

const Navigation = ({ currentSection, onNavigate }) => {
  return (
    <>
      {/* Dot Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
              ${currentSection === index ? 'w-6 bg-blue-600' : 'bg-gray-400 hover:bg-gray-600'}`}
            onClick={() => onNavigate(index)}
          />
        ))}
      </div>
      
      {/* Icon Navigation */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 space-y-6">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <div key={section.id} className="group relative">
              <IconComponent 
                className={`w-6 h-6 cursor-pointer transition-colors duration-300
                  ${currentSection === index ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                onClick={() => onNavigate(index)}
              />
              <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded
                text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.label}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;