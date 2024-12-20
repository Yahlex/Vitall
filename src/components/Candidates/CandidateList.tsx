import React from 'react';
import { Candidate } from '../../types';
import StatusBadge from '../shared/StatusBadge';

interface CandidateListProps {
  candidates: Candidate[];
  onSelect: (candidate: Candidate) => void;
}

export default function CandidateList({ candidates, onSelect }: CandidateListProps) {
  return (
    <div className="bg-white shadow rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nom
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Statut
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date de candidature
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expérience
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {candidates.map((candidate) => (
            <tr
              key={candidate.id}
              onClick={() => onSelect(candidate)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {candidate.firstName} {candidate.lastName}
                </div>
                <div className="text-sm text-gray-500">{candidate.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={candidate.status} type="candidate" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(candidate.appliedDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {candidate.experience} ans
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}