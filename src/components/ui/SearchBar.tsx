import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: LucideIcon;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
  icon: Icon,
}: SearchBarProps) {
  return (
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
          Icon ? 'pl-10' : 'pl-4'
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}