import React from 'react';
import { X } from 'lucide-react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function FilterDrawer({ isOpen, onClose, children }: FilterDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="absolute right-0 h-full w-80 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Filtres</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}