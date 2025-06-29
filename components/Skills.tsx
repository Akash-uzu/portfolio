import React from 'react';
import { SKILLS_DATA } from '../constants';
import { SkillCategory } from '../types';
import SectionWrapper from './SectionWrapper';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="space-y-8">
        {SKILLS_DATA.map((category: SkillCategory) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill.name} className="bg-gray-800 text-emerald-300 text-sm font-mono px-3 py-1 rounded-full border border-gray-700">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Skills;