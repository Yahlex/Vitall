import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ApplicationList from '../components/Applications/ApplicationList';
import ApplicationFilters from '../components/Applications/ApplicationFilters';
import { mockCandidates } from '../utils/mockData';
import { ApplicationStatus } from '../types';

export default function Applications() {
  const [selectedStatus, setSelectedStatus] = useState<ApplicationStatus | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredApplications = selectedStatus === 'all'
    ? mockCandidates
    : mockCandidates.filter(app => app.status === selectedStatus);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Candidatures</h1>
          <p className="text-gray-600">Suivre et gérer les candidatures</p>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          <Filter size={20} />
          <span>Filtres</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {showFilters && (
          <div className="lg:col-span-1">
            <ApplicationFilters
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
            />
          </div>
        )}
        <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
          <ApplicationList applications={filteredApplications} />
        </div>
      </div>
    </div>
  );
}