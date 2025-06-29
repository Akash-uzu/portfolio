
import React from 'react';

interface IconProps {
  className?: string;
}

export const PlayStoreIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21.58,11.51l-1.42-1.42a1,1,0,0,0-1.41,0L17.34,11.5l-3.34-3.34a1,1,0,0,0-1.42,0L3.41,17.34,2,18.75,11.5,22l.71-.71,5.65-5.65ZM11.5,3,2,12.5,3.41,13.91,12.5,4.83a1,1,0,0,1,1.42,0L16.24,7.17,11.5,11.91,4.83,5.24,5.54,4.54Z"/>
  </svg>
);

export const AppStoreIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.33,12.06a4,4,0,0,0-2,.37,4.32,4.32,0,0,0-3.18,3.8,1.4,1.4,0,0,1-1.39,1.38H11.8a1.4,1.4,0,0,1-1.4-1.38,4.32,4.32,0,0,0-3.18-3.8,4,4,0,0,0-2-.37,3.69,3.69,0,0,0-2.45,1.13,3.7,3.7,0,0,0,2.45,6.23,4,4,0,0,0,2-.36,4.32,4.32,0,0,0,3.18-3.8,1.4,1.4,0,0,1,1.4-1.39h.06a1.4,1.4,0,0,1,1.4,1.39,4.32,4.32,0,0,0,3.18,3.8,4,4,0,0,0,2,.36,3.7,3.7,0,0,0,2.45-6.23A3.69,3.69,0,0,0,18.33,12.06ZM12,6.18a1.39,1.39,0,0,0-1.39,1.38v.07a1.39,1.39,0,0,0,1.4,1.38h.06a1.39,1.39,0,0,0,1.39-1.38V7.56A1.39,1.39,0,0,0,12.06,6.18Z"/>
  </svg>
);

export const WebsiteIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);
