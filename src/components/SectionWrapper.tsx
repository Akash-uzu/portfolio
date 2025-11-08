
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default SectionWrapper;
