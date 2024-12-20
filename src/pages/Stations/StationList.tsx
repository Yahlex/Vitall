import React from 'react';
import { Building2, Users } from 'lucide-react';
import { FireStation } from '../../types';
import StatusBadge from '../../components/shared/StatusBadge';

interface StationListProps {
  stations: FireStation[];
  onSelectStation: (station: FireStation) => void;
}

export default function StationList({ stations, onSelectStation }: StationListProps) {
  return (
    <div className="grid gap-4">
      {stations.map(station => (
        <div
          key={station.id}
          onClick={() => onSelectStation(station)}
          className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-gray-400" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {station.name}
                </h3>
                <p className="text-sm text-gray-600">{station.region}</p>
              </div>
            </div>
            <StatusBadge status={station.status} type="station" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{station.staffingNeeds.length} postes ouverts</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}