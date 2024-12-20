import React from 'react';
import { Shield } from 'lucide-react';
import { UserRole } from '../../types';

const roles: { role: UserRole; description: string }[] = [
  {
    role: 'admin',
    description: 'Accès complet à toutes les fonctionnalités et paramètres',
  },
  {
    role: 'recruiter',
    description: 'Peut gérer les candidats et les candidatures',
  },
  {
    role: 'station_manager',
    description: 'Peut gérer sa caserne et voir les candidatures',
  },
  {
    role: 'viewer',
    description: 'Peut uniquement consulter les informations, sans droits de modification',
  },
];

export default function UserManagement() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Rôles Utilisateurs</h2>
      </div>

      <div className="space-y-4">
        {roles.map(({ role, description }) => (
          <div
            key={role}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="font-medium text-gray-900 dark:text-white capitalize mb-1">
              {role === 'admin' && 'Administrateur'}
              {role === 'recruiter' && 'Recruteur'}
              {role === 'station_manager' && 'Chef de Caserne'}
              {role === 'viewer' && 'Observateur'}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}