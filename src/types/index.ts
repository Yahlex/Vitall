// Types pour les candidatures
export type CandidateStatus =
  | 'accepté'
  | 'entretien_validé'
  | 'rejeté'
  | 'examen_medical'
  | 'examen_physique'
  | 'test_connaissances'
  | 'nouveau';

export type StationStatus =
  | 'recrutement_ouvert'
  | 'candidatures_limitées'
  | 'plus_de_candidatures'
  | 'pleine';

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: CandidateStatus;
  appliedDate: string;
  experience: number;
  certifications: string[];
  notes: string;
  nextStep: string;
  preferredStations?: string[];
}

// Types pour les casernes
export interface FireStation {
  id: string;
  name: string;
  region: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  status: StationStatus;
  openPositions: Position[];
  staffingNeeds: StaffingNeed[];
}

export interface Position {
  id: string;
  title: string;
  requirements: string[];
  experience: number;
  certifications: string[];
  shift: string;
  isOpen: boolean;
}

export interface StaffingNeed {
  id: string;
  position: string;
  count: number;
  priority: 'faible' | 'moyenne' | 'haute';
  deadline?: string;
  status: 'ouvert' | 'en_cours' | 'pourvu' | 'annulé';
}

export type UserRole = 'admin' | 'recruiter' | 'station_manager' | 'viewer';