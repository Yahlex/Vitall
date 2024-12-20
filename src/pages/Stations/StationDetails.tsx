import React from 'react';
import { Phone, Mail, MapPin, Users, AlertTriangle } from 'lucide-react';
import { FireStation } from '../../types';
import { Badge } from '../../components/ui/Badge';

interface StationDetailsProps {
  station: FireStation;
}

export default function StationDetails({ station }: StationDetailsProps) {
  const getStatusColor = (status: FireStation['status']) => {
    const colors = {
      recruiting: 'bg-green-100 text-green-800',
      limited: 'bg-yellow-100 text-yellow-800',
      full: 'bg-red-100 text-red-800',
    };
    return colors[status];
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">{station.name}</h2>
        <Badge className={`mt-2 ${getStatusColor(station.status)}`}>
          {station.status.charAt(0).toUpperCase() + station.status.slice(1)}
        </Badge>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin className="text-gray-400" size={20} />
          <span className="text-gray-600">{station.address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="text-gray-400" size={20} />
          <span className="text-gray-600">{station.contactEmail}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-gray-400" size={20} />
          <span className="text-gray-600">{station.contactPhone}</span>
        </div>
      </div>

      {station.openPositions.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 mb-4">Open Positions</h3>
          <div className="space-y-3">
            {station.openPositions.map(position => (
              <div
                key={position.id}
                className="p-4 rounded-lg border border-gray-200"
              >
                <h4 className="font-medium text-gray-900 mb-2">{position.title}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Experience: {position.experience} years</div>
                  <div>Shift: {position.shift}</div>
                  <div>
                    Required Certifications:
                    <div className="flex flex-wrap gap-1 mt-1">
                      {position.certifications.map((cert, index) => (
                        <Badge
                          key={index}
                          className="bg-blue-100 text-blue-800"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {station.staffingNeeds.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 mb-4">Staffing Needs</h3>
          <div className="space-y-3">
            {station.staffingNeeds.map(need => (
              <div
                key={need.id}
                className="p-4 rounded-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{need.position}</h4>
                  <Badge
                    className={`
                      ${need.priority === 'high' ? 'bg-red-100 text-red-800' : ''}
                      ${need.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${need.priority === 'low' ? 'bg-green-100 text-green-800' : ''}
                    `}
                  >
                    {need.priority} priority
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{need.count} positions</span>
                  {need.deadline && (
                    <>
                      <AlertTriangle className="h-4 w-4 ml-2" />
                      <span>Due by {new Date(need.deadline).toLocaleDateString()}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}