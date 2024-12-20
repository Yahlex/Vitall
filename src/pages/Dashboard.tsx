import React from 'react';
import { Users, UserCheck, UserX, Clock, Building2, Calendar, TrendingUp } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';
import { mockCandidates, mockFireStations } from '../utils/mockData';

const getStats = () => {
  const candidates = mockCandidates;
  const stations = mockFireStations;

  return {
    total: candidates.length,
    new: candidates.filter(c => c.status === 'nouveau').length,
    inProgress: candidates.filter(c => ['test_connaissances', 'examen_physique', 'examen_medical'].includes(c.status)).length,
    accepted: candidates.filter(c => c.status === 'accepté').length,
    rejected: candidates.filter(c => c.status === 'rejeté').length,
    openStations: stations.filter(s => s.status === 'recrutement_ouvert').length,
    fullStations: stations.filter(s => s.status === 'pleine').length,
  };
};

export default function Dashboard() {
  const stats = getStats();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord du Recrutement</h1>
        <p className="text-gray-600">Suivez et gérez les candidatures des pompiers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total des Candidatures"
          value={stats.total}
          icon={Users}
          trend={12}
          color="bg-blue-500"
        />
        <StatsCard
          title="Nouvelles Candidatures"
          value={stats.new}
          icon={Clock}
          trend={8}
          color="bg-yellow-500"
        />
        <StatsCard
          title="En Cours de Recrutement"
          value={stats.inProgress}
          icon={Calendar}
          trend={-5}
          color="bg-purple-500"
        />
        <StatsCard
          title="Candidats Acceptés"
          value={stats.accepted}
          icon={UserCheck}
          trend={15}
          color="bg-green-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">État des Casernes</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Casernes en recrutement</span>
              <span className="font-semibold text-green-600">{stats.openStations}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Casernes pleines</span>
              <span className="font-semibold text-red-600">{stats.fullStations}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Taux de Conversion</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Taux d'acceptation</span>
              <span className="font-semibold text-green-600">
                {((stats.accepted / stats.total) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Taux de rejet</span>
              <span className="font-semibold text-red-600">
                {((stats.rejected / stats.total) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Prochains Événements</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} className="text-blue-500" />
              <span>Tests physiques - 15 Mars</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} className="text-blue-500" />
              <span>Examens médicaux - 20 Mars</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} className="text-blue-500" />
              <span>Entretiens - 25 Mars</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}