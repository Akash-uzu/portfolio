import React from 'react';
import { PROJECTS_DATA } from '@/constants';
import { Project } from '@/types';  
import SectionWrapper from './SectionWrapper';
import { AppStoreIcon, PlayStoreIcon, WebsiteIcon } from './icons/LinkIcons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 flex flex-col h-full hover:border-emerald-600/50 transition-all duration-300 shadow-lg">
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-sm text-gray-400 whitespace-nowrap pl-4">{project.period}</p>
      </div>
      <p className="mt-3 text-gray-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map(tech => (
          <span key={tech} className="bg-gray-700 text-emerald-300 text-xs font-mono px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-6 flex items-center space-x-4 text-gray-400">
        {project.links.playStore && (
            <a href={project.links.playStore} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <PlayStoreIcon className="w-6 h-6" />
            </a>
        )}
        {project.links.appStore && (
            <a href={project.links.appStore} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <AppStoreIcon className="w-6 h-6" />
            </a>
        )}
        {project.links.website && (
            <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <WebsiteIcon className="w-6 h-6" />
            </a>
        )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Key Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;