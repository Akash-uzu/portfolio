import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto max-w-5xl py-6 px-4 text-center text-gray-500">
        <p>&copy; {currentYear} Akash E. All rights reserved.</p>
        <p className="text-sm mt-1">Why do programmers like dark mode? Because light attracts bugs.</p>
      </div>
    </footer>
  );
}

export default Footer;