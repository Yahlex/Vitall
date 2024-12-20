import React, { useState } from 'react';
import { X } from 'lucide-react';
import { FireStation } from '../../types';

interface TransferDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onTransfer: (stationId: string) => void;
  stations: FireStation[];
  currentStationId?: string;
}

export default function TransferDialog({
  isOpen,
  onClose,
  onTransfer,
  stations,
  currentStationId
}: TransferDialogProps) {
  const [selectedStation, setSelectedStation] = useState('');

  if (!isOpen) return null;

  const availableStations = stations.filter(
    station => station.id !== currentStationId && station.status !== 'pleine'
  );

  const handleTransfer = () => {
    if (selectedStation) {
      onTransfer(selectedStation);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Transférer la candidature</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sélectionner une caserne
            </label>
            <select
              value={selectedStation}
              onChange={(e) => setSelectedStation(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Choisir une caserne</option>
              {availableStations.map((station) => (
                <option key={station.id} value={station.id}>
                  {station.name} ({station.status === 'recrutement_ouvert' ? 'Ouvert' : 'Limité'})
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Annuler
            </button>
            <button
              onClick={handleTransfer}
              disabled={!selectedStation}
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Transférer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}