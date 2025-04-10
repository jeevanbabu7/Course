import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SyllabusCard = ({ moduleNumber, title, content, projects }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden mb-4 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg">
      <button
        className="w-full p-4 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="bg-blue-600/30 text-blue-300 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-3 shadow-inner">
            {moduleNumber}
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <div className="text-gray-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isOpen && (
        <div className="p-4 pt-0 border-t border-white/10 bg-black/20">
          <p className="text-gray-300 mb-4">{content}</p>

          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-wider text-blue-300 mb-2">Projects</h4>
            <ul className="space-y-2">
              {projects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-500/20 text-green-300 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 shadow-sm">
                    <span className="text-xs">→</span>
                  </div>
                  <span className="text-gray-200">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SyllabusCard;
