import { FireStation, Candidate } from '../types';

export const mockFireStations: FireStation[] = [
  {
    id: '1',
    name: 'Caserne Centrale',
    region: 'Centre-Ville',
    address: '123 Rue Principale, Centre-Ville',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    contactPerson: 'Jean Dupont',
    contactEmail: 'jean.dupont@caserne.fr',
    contactPhone: '01 23 45 67 89',
    status: 'recrutement_ouvert',
    openPositions: [
      {
        id: '1',
        title: 'Sapeur-Pompier 1ère Classe',
        requirements: ['Certification Pompier', 'Permis Poids Lourd'],
        experience: 0,
        certifications: ['PSE1', 'PSE2'],
        shift: '24/48',
        isOpen: true,
      },
    ],
    staffingNeeds: [
      {
        id: '1',
        position: 'Sapeur-Pompier',
        count: 3,
        priority: 'haute',
        deadline: '2024-06-30',
        status: 'ouvert',
      },
    ],
  },
  {
    id: '2',
    name: 'Caserne Nord',
    region: 'Quartier Nord',
    address: '456 Avenue du Nord',
    coordinates: { lat: 48.8606, lng: 2.3376 },
    contactPerson: 'Marie Martin',
    contactEmail: 'marie.martin@caserne.fr',
    contactPhone: '01 98 76 54 32',
    status: 'pleine',
    openPositions: [],
    staffingNeeds: [],
  },
  {
    id: '3',
    name: 'Caserne Sud',
    region: 'Quartier Sud',
    address: '789 Boulevard Sud',
    coordinates: { lat: 48.8456, lng: 2.3522 },
    contactPerson: 'Lucas Bernard',
    contactEmail: 'lucas.bernard@caserne.fr',
    contactPhone: '01 45 67 89 10',
    status: 'candidatures_limitées',
    openPositions: [
      {
        id: '2',
        title: 'Chef d\'Équipe',
        requirements: ['Expérience de commandement', 'Formation avancée'],
        experience: 5,
        certifications: ['PSE2', 'GOC'],
        shift: '24/72',
        isOpen: true,
      },
    ],
    staffingNeeds: [
      {
        id: '2',
        position: 'Chef d\'Équipe',
        count: 1,
        priority: 'moyenne',
        deadline: '2024-07-15',
        status: 'ouvert',
      },
    ],
  },
  {
    id: '4',
    name: 'Caserne Est',
    region: 'Quartier Est',
    address: '321 Avenue Est',
    coordinates: { lat: 48.8656, lng: 2.3722 },
    contactPerson: 'Sophie Dubois',
    contactEmail: 'sophie.dubois@caserne.fr',
    contactPhone: '01 34 56 78 90',
    status: 'plus_de_candidatures',
    openPositions: [],
    staffingNeeds: [],
  },
];

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    firstName: 'Pierre',
    lastName: 'Dubois',
    email: 'pierre.dubois@email.fr',
    phone: '06 12 34 56 78',
    status: 'examen_physique',
    appliedDate: '2024-03-15',
    experience: 2,
    certifications: ['PSE1', 'PSE2', 'SSIAP1'],
    notes: 'Excellent candidat, très motivé',
    nextStep: 'Examen médical prévu le 25/03/2024',
    preferredStations: ['1'],
  },
  {
    id: '2',
    firstName: 'Sophie',
    lastName: 'Laurent',
    email: 'sophie.laurent@email.fr',
    phone: '06 98 76 54 32',
    status: 'entretien_validé',
    appliedDate: '2024-03-10',
    experience: 3,
    certifications: ['PSE1', 'PSE2', 'SSIAP2'],
    notes: 'Expérience précédente comme pompier volontaire',
    nextStep: 'Test de connaissances le 20/03/2024',
    preferredStations: ['2'],
  },
  {
    id: '3',
    firstName: 'Thomas',
    lastName: 'Martin',
    email: 'thomas.martin@email.fr',
    phone: '06 23 45 67 89',
    status: 'nouveau',
    appliedDate: '2024-03-18',
    experience: 0,
    certifications: ['PSE1'],
    notes: 'Premier contact très positif',
    nextStep: 'Entretien initial à programmer',
    preferredStations: ['3'],
  },
  {
    id: '4',
    firstName: 'Julie',
    lastName: 'Petit',
    email: 'julie.petit@email.fr',
    phone: '06 34 56 78 90',
    status: 'test_connaissances',
    appliedDate: '2024-03-12',
    experience: 1,
    certifications: ['PSE1', 'PSE2'],
    notes: 'Bonne condition physique, motivation ++',
    nextStep: 'Examen physique prévu le 22/03/2024',
    preferredStations: ['1'],
  },
  {
    id: '5',
    firstName: 'Alexandre',
    lastName: 'Leroy',
    email: 'alexandre.leroy@email.fr',
    phone: '06 45 67 89 01',
    status: 'accepté',
    appliedDate: '2024-02-28',
    experience: 5,
    certifications: ['PSE1', 'PSE2', 'GOC', 'SSIAP3'],
    notes: 'Excellent profil, grande expérience',
    nextStep: 'Intégration prévue le 01/04/2024',
    preferredStations: ['3'],
  },
  {
    id: '6',
    firstName: 'Marie',
    lastName: 'Rousseau',
    email: 'marie.rousseau@email.fr',
    phone: '06 56 78 90 12',
    status: 'rejeté',
    appliedDate: '2024-03-05',
    experience: 0,
    certifications: [],
    notes: 'Ne correspond pas aux critères minimums',
    nextStep: 'Candidature clôturée',
    preferredStations: ['2'],
  },
];