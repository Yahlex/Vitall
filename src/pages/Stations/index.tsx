import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import StationList from './StationList';
import StationDetails from './StationDetails';
import StationFilters from '../../components/Stations/StationFilters';
import SearchBar from '../../components/ui/SearchBar';
import { mockFireStations } from '../../utils/mockData';
import { FireStation, StationStatus } from '../../types';

export default function Stations() {
  const [selectedStation, setSelectedStation] = useState<FireStation | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<StationStatus | 'tous'>('tous');

  const filteredStations = mockFireStations.filter(station => {
    const matchesSearch = 
      station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.region.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'tous' || station.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Casernes</h1>
        <p className="text-gray-600">Consultez et gérez les casernes de votre région</p>
      </div>

      <div className="mb-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Rechercher par nom ou région..."
          icon={Search}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <StationFilters
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
          />
        </div>
        <div className="lg:col-span-2">
          <StationList
            stations={filteredStations}
            onSelectStation={setSelectedStation}
          />
        </div>
        <div className="bg-white rounded-lg shadow">
          {selectedStation ? (
            <StationDetails station={selectedStation} />
          ) : (
            <div className="p-6 text-center text-gray-500">
              Sélectionnez une caserne pour voir les détails
            </div>
          )}
        </div>
      </div>
    </div>
  );
}