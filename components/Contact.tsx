import React from 'react';
import SectionWrapper from './SectionWrapper';
import { MailIcon } from './icons/UiIcons';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
        <div className="text-center max-w-xl mx-auto">
            <p className="text-lg text-gray-400 mb-8">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to connect, or just say hi!
            </p>
            <a 
                href="mailto:akash1021998@gmail.com" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
            >
                <MailIcon className="w-5 h-5 mr-2"/>
                Say Hello
            </a>
            <div className="mt-10 flex justify-center space-x-6">
                 <a href="https://github.com/akash1021998" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    <GitHubIcon className="h-8 w-8" />
                </a>
                <a href="https://linkedin.com/in/akash1021" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                    <LinkedInIcon className="h-8 w-8" />
                </a>
            </div>
        </div>
    </SectionWrapper>
  );
}

export default Contact;