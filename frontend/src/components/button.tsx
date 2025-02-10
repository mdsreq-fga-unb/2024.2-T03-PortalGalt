'use client';

import React from 'react';

interface ButtonProps {
  svg?: string | null;
  text: string;
  onClick?: () => void;
}

export default function ButtonGalt({ onClick, text, svg }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-5 tracking-wide font-semibold bg-teal-600 text-gray-100 w-full py-4 rounded-lg hover:bg-teal-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
    >
      
      {svg && (
        <svg
          className="w-6 h-6 -ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
      )}
      <span className="ml-3">{text}</span>
    </button>
  );
}
