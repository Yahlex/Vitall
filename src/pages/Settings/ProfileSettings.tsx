import React from 'react';
import { User } from 'lucide-react';

export default function ProfileSettings() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <User className="h-5 w-5 text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profil</h2>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nom
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            defaultValue="Jean Dupont"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            defaultValue="jean.dupont@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Poste
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            defaultValue="Chef de Caserne"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sauvegarder les modifications
        </button>
      </form>
    </div>
  );
}