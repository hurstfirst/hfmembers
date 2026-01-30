import { AMCInfo } from '@/types';
import { formatDate, getDaysUntilExpiry } from '@/lib/data';

interface AMCInfoCardProps {
  amc: AMCInfo | null;
}

export default function AMCInfoCard({ amc }: AMCInfoCardProps) {
  if (!amc) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">AMC Information</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <p className="text-yellow-800">
            No active AMC contract. Would you like to register interest?
          </p>
        </div>
      </div>
    );
  }

  const daysUntilExpiry = getDaysUntilExpiry(amc.endDate);
  const isExpiringSoon = daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  const isExpired = daysUntilExpiry <= 0;

  const tierColors = {
    Bronze: 'bg-orange-100 text-orange-800 border-orange-300',
    Silver: 'bg-gray-100 text-gray-800 border-gray-300',
    Gold: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Platinum: 'bg-purple-100 text-purple-800 border-purple-300',
  };

  const statusColors = {
    Active: 'bg-green-100 text-green-800',
    'Expiring Soon': 'bg-yellow-100 text-yellow-800',
    Expired: 'bg-red-100 text-red-800',
    Pending: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">AMC Information</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm text-gray-600 mb-2">Tier</p>
          <span className={`inline-block px-4 py-2 rounded-md border-2 font-semibold ${tierColors[amc.tier]}`}>
            {amc.tier}
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">Status</p>
          <span className={`inline-block px-4 py-2 rounded-md font-semibold ${statusColors[amc.status]}`}>
            {amc.status}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Start Date</p>
          <p className="text-lg font-semibold text-gray-800">{formatDate(amc.startDate)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">End Date</p>
          <p className="text-lg font-semibold text-gray-800">{formatDate(amc.endDate)}</p>
        </div>
      </div>

      {isExpired && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800 font-semibold">
            ⚠️ Your AMC has expired. Please contact us to renew.
          </p>
        </div>
      )}

      {isExpiringSoon && !isExpired && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <p className="text-yellow-800 font-semibold">
            ⚠️ Your AMC expires in {daysUntilExpiry} days. Consider renewing soon.
          </p>
        </div>
      )}

      {!isExpired && !isExpiringSoon && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <p className="text-green-800">
            ✓ Your AMC is active for {daysUntilExpiry} more days.
          </p>
        </div>
      )}
    </div>
  );
}
