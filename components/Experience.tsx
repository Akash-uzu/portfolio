import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { ExperienceItem } from '../types';
import SectionWrapper from './SectionWrapper';
import { CheckIcon } from './icons/UiIcons';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
    <div className="relative pl-8 sm:pl-12 py-6 group">
        {/* Timeline Line */}
        <div className="flex items-center absolute top-5 left-0">
            <div className="w-4 h-4 rounded-full bg-gray-700 group-hover:bg-emerald-500 transition-colors duration-300"></div>
            <div className="w-px h-full bg-gray-700 translate-x-1.5"></div>
        </div>
        <div className="absolute w-px h-full bg-gray-700 top-5 left-[7px]"></div>
        
        {/* Card Content */}
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-emerald-600/50 transition-all duration-300 shadow-lg">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-md text-emerald-400">{item.company}</p>
                </div>
                <div className="text-right text-sm text-gray-400">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-400">
                {item.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon className="w-4 h-4 mr-2 mt-1 text-emerald-400 flex-shrink-0" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="relative">
         {EXPERIENCE_DATA.map((item, index) => <ExperienceCard key={index} item={item} />)}
      </div>
    </SectionWrapper>
  );
}

export default Experience;