import React, { useState } from 'react';
import { Phone, Mail, Calendar, Award, ArrowRightLeft } from 'lucide-react';
import { Candidate, FireStation } from '../../types';
import StatusBadge from '../shared/StatusBadge';
import TransferDialog from './TransferDialog';
import { mockFireStations } from '../../utils/mockData';
import { formatDate } from '../../utils/dateUtils';

interface CandidateDetailsProps {
  candidate: Candidate;
}

export default function CandidateDetails({ candidate }: CandidateDetailsProps) {
  const [showTransferDialog, setShowTransferDialog] = useState(false);

  const handleTransfer = (newStationId: string) => {
    // Ici, vous implémenteriez la logique de transfert
    console.log(`Transfert du candidat vers la caserne ${newStationId}`);
    // Afficher une notification de succès
    alert('Transfert effectué avec succès');
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {candidate.firstName} {candidate.lastName}
            </h2>
            <div className="mt-2">
              <StatusBadge status={candidate.status} type="candidate" />
            </div>
          </div>
          <button
            onClick={() => setShowTransferDialog(true)}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
          >
            <ArrowRightLeft size={16} />
            <span>Transférer</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="text-gray-400" size={20} />
          <span className="text-gray-600">{candidate.email}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-gray-400" size={20} />
          <span className="text-gray-600">{candidate.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="text-gray-400" size={20} />
          <span className="text-gray-600">Candidature du {formatDate(candidate.appliedDate)}</span>
        </div>
        <div className="flex items-center gap-3">
          <Award className="text-gray-400" size={20} />
          <span className="text-gray-600">{candidate.experience} ans d'expérience</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-900 mb-2">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {candidate.certifications.map((cert, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-900 mb-2">Prochaine étape</h3>
        <p className="text-gray-600">{candidate.nextStep}</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
        <p className="text-gray-600 whitespace-pre-line">{candidate.notes}</p>
      </div>

      <TransferDialog
        isOpen={showTransferDialog}
        onClose={() => setShowTransferDialog(false)}
        onTransfer={handleTransfer}
        stations={mockFireStations}
        currentStationId={candidate.preferredStations?.[0]}
      />
    </div>
  );
}