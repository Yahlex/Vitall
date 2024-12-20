import React from 'react';
import { CandidateStatus } from '../../types';

interface CandidateFiltersProps {
  selectedStatus: CandidateStatus | 'tous';
  onStatusChange: (status: CandidateStatus | 'tous') => void;
}

export default function CandidateFilters({
  selectedStatus,
  onStatusChange,
}: CandidateFiltersProps) {
  const statuses: (CandidateStatus | 'tous')[] = [
    'tous',
    'nouveau',
    'test_connaissances',
    'examen_physique',
    'examen_medical',
    'entretien_validé',
    'accepté',
    'rejeté',
  ];

  const getStatusLabel = (status: CandidateStatus | 'tous'): string => {
    const labels: Record<CandidateStatus | 'tous', string> = {
      tous: 'Tous les candidats',
      nouveau: 'Nouveaux',
      test_connaissances: 'Test de connaissances',
      examen_physique: 'Examen physique',
      examen_medical: 'Examen médical',
      entretien_validé: 'Entretien validé',
      accepté: 'Accepté',
      rejeté: 'Rejeté',
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