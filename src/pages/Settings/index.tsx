import React from 'react';
import ThemeSettings from './ThemeSettings';
import UserManagement from './UserManagement';
import NotificationSettings from './NotificationSettings';
import ProfileSettings from './ProfileSettings';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Paramètres</h1>
        <p className="text-gray-600 dark:text-gray-400">Gérez vos préférences et paramètres du compte</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileSettings />
        <NotificationSettings />
        <ThemeSettings />
        <UserManagement />
      </div>
    </div>
  );
}