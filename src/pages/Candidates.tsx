import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import CandidateList from '../components/Candidates/CandidateList';
import CandidateDetails from '../components/Candidates/CandidateDetails';
import CandidateFilters from '../components/Candidates/CandidateFilters';
import SearchBar from '../components/ui/SearchBar';
import FilterDrawer from '../components/shared/FilterDrawer';
import { mockCandidates } from '../utils/mockData';
import { Candidate, CandidateStatus } from '../types';

export default function Candidates() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<CandidateStatus | 'tous'>('tous');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCandidates = mockCandidates.filter(candidate => {
    const matchesSearch = 
      `${candidate.firstName} ${candidate.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'tous' || candidate.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Candidats</h1>
          <p className="text-gray-600">Gérez et suivez les candidatures</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            <Filter size={20} />
            <span>Filtres</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            <span>Ajouter un Candidat</span>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Rechercher des candidats..."
          icon={Search}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CandidateList
            candidates={filteredCandidates}
            onSelect={setSelectedCandidate}
          />
        </div>
        <div className="bg-white rounded-lg shadow">
          {selectedCandidate ? (
            <CandidateDetails candidate={selectedCandidate} />
          ) : (
            <div className="p-6 text-center text-gray-500">
              Sélectionnez un candidat pour voir les détails
            </div>
          )}
        </div>
      </div>

      <FilterDrawer isOpen={showFilters} onClose={() => setShowFilters(false)}>
        <CandidateFilters
          selectedStatus={selectedStatus}
          onStatusChange={(status) => {
            setSelectedStatus(status);
            setShowFilters(false);
          }}
        />
      </FilterDrawer>
    </div>
  );
}