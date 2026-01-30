import { Touchpoint } from '@/types';
import { formatDate } from '@/lib/data';

interface TouchpointsCardProps {
  touchpoints: Touchpoint[];
}

export default function TouchpointsCard({ touchpoints }: TouchpointsCardProps) {
  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800 border-blue-300',
    completed: 'bg-green-100 text-green-800 border-green-300',
    overdue: 'bg-red-100 text-red-800 border-red-300',
  };

  const typeLabels = {
    quarterly_call: '📞 Quarterly Call',
    six_month_visit: '🏢 6-Month Visit',
    annual_renewal: '📋 Annual Renewal',
  };

  // Sort touchpoints by date
  const sortedTouchpoints = [...touchpoints].sort((a, b) => 
    new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime()
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Touchpoints</h2>
      <p className="text-gray-600 mb-4">
        Your scheduled calls, visits, and renewal milestones
      </p>

      <div className="space-y-4">
        {sortedTouchpoints.map((touchpoint) => (
          <div
            key={touchpoint.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div className="mb-2 md:mb-0">
                <h3 className="text-lg font-semibold text-gray-800">
                  {typeLabels[touchpoint.type]}
                </h3>
                <p className="text-sm text-gray-600">{touchpoint.title}</p>
              </div>
              <span
                className={`inline-block px-3 py-1 rounded-md border text-sm font-semibold ${
                  statusColors[touchpoint.status]
                }`}
              >
                {touchpoint.status.charAt(0).toUpperCase() + touchpoint.status.slice(1)}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-2">{touchpoint.description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Scheduled:</span> {formatDate(touchpoint.scheduledDate)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
