import React from 'react';
import { Menu, Home, Users, FileText, Building2, Settings } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/images/vitall.png';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <Menu size={24} />
            <img src={logo} alt="Vitall" className="h-16 w-30" />
          </div>
          <nav className="space-y-2">
            <Link to="/" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
              <Home size={20} />
              <span>Tableau de bord</span>
            </Link>
            <Link to="/candidates" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
              <Users size={20} />
              <span>Candidats</span>
            </Link>
            <Link to="/stations" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
              <Building2 size={20} />
              <span>Casernes</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-2 p-2 rounded hover:bg-gray-800">
              <Settings size={20} />
              <span>Paramètres</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}