import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeSettings() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', label: 'Clair', icon: Sun },
    { value: 'dark', label: 'Sombre', icon: Moon },
    { value: 'system', label: 'Système', icon: Monitor },
  ] as const;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Thème</h2>
      <div className="grid grid-cols-3 gap-4">
        {themes.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`flex flex-col items-center p-4 rounded-lg border-2 ${
              theme === value
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <Icon className="h-6 w-6 mb-2" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}