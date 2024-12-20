import React from 'react';
import { Application } from '../../types';
import { Badge } from '../ui/Badge';
import { formatDate } from '../../utils/dateUtils';

interface ApplicationListProps {
  applications: Application[];
}

export default function ApplicationList({ applications }: ApplicationListProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Candidate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applied Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Step
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.map((application) => (
              <tr key={application.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {application.candidateName}
                  </div>
                  <div className="text-sm text-gray-500">{application.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {application.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className={getStatusColor(application.status)}>
                    {application.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(application.appliedDate)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {application.nextStep}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getStatusColor(status: Application['status']) {
  const colors = {
    new: 'bg-blue-100 text-blue-800',
    reviewing: 'bg-yellow-100 text-yellow-800',
    interview: 'bg-purple-100 text-purple-800',
    testing: 'bg-orange-100 text-orange-800',
    background: 'bg-indigo-100 text-indigo-800',
    medical: 'bg-pink-100 text-pink-800',
    accepted: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };
  return colors[status];
}