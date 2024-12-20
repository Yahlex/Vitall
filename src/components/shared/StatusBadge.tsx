import React from 'react';
import { Badge } from '../ui/Badge';

interface StatusConfig {
  label: string;
  className: string;
}

type StatusType = 'station' | 'candidate';

const statusConfigs: Record<string, StatusConfig> = {
  // Statuts des casernes
  recrutement_ouvert: {
    label: 'Recrutement ouvert',
    className: 'bg-green-100 text-green-800'
  },
  candidatures_limitées: {
    label: 'Candidatures limitées',
    className: 'bg-yellow-100 text-yellow-800'
  },
  plus_de_candidatures: {
    label: 'Plus de candidatures',
    className: 'bg-orange-100 text-orange-800'
  },
  pleine: {
    label: 'Pleine',
    className: 'bg-red-100 text-red-800'
  },
  // Statuts des candidats
  nouveau: {
    label: 'Nouveau',
    className: 'bg-blue-100 text-blue-800'
  },
  test_connaissances: {
    label: 'Test de connaissances',
    className: 'bg-purple-100 text-purple-800'
  },
  examen_physique: {
    label: 'Examen physique',
    className: 'bg-indigo-100 text-indigo-800'
  },
  examen_medical: {
    label: 'Examen médical',
    className: 'bg-pink-100 text-pink-800'
  },
  entretien_validé: {
    label: 'Entretien validé',
    className: 'bg-teal-100 text-teal-800'
  },
  accepté: {
    label: 'Accepté',
    className: 'bg-green-100 text-green-800'
  },
  rejeté: {
    label: 'Rejeté',
    className: 'bg-red-100 text-red-800'
  }
};

interface StatusBadgeProps {
  status: string;
  type: StatusType;
}

export default function StatusBadge({ status, type }: StatusBadgeProps) {
  const config = statusConfigs[status];
  if (!config) return null;

  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  );
}