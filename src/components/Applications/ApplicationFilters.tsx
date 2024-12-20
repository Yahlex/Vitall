import React from 'react';
import { ApplicationStatus } from '../../types';

interface ApplicationFiltersProps {
  selectedStatus: ApplicationStatus | 'all';
  onStatusChange: (status: ApplicationStatus | 'all') => void;
}

export default function ApplicationFilters({
  selectedStatus,
  onStatusChange,
}: ApplicationFiltersProps) {
  const statuses: (ApplicationStatus | 'all')[] = [
    'all',
    'new',
    'reviewing',
    'interview',
    'testing',
    'background',
    'medical',
    'accepted',
    'rejected',
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
      <div className="space-y-2">
        {statuses.map((status) => (
          <label
            key={status}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              checked={selectedStatus === status}
              onChange={() => onStatusChange(status)}
              className="form-radio text-blue-600"
            />
            <span className="text-gray-700 capitalize">{status}</span>
          </label>
        ))}
      </div>
    </div>
  );
}