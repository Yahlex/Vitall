import React from 'react';
import { StationStatus } from '../../types';

interface StationFiltersProps {
  selectedStatus: StationStatus | 'tous';
  onStatusChange: (status: StationStatus | 'tous') => void;
}

export default function StationFilters({
  selectedStatus,
  onStatusChange,
}: StationFiltersProps) {
  const statuses: (StationStatus | 'tous')[] = [
    'tous',
    'recrutement_ouvert',
    'candidatures_limitées',
    'plus_de_candidatures',
    'pleine',
  ];

  const getStatusLabel = (status: StationStatus | 'tous'): string => {
    const labels: Record<StationStatus | 'tous', string> = {
      tous: 'Toutes les casernes',
      recrutement_ouvert: 'Recrutement ouvert',
      candidatures_limitées: 'Candidatures limitées',
      plus_de_candidatures: "N'accepte plus de candidatures",
      pleine: 'Pleine',
    };
    return labels[status];
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtres</h3>
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
            <span className="text-gray-700">{getStatusLabel(status)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}