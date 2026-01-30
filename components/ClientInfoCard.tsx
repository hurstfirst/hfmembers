import { ClientInfo } from '@/types';
import { formatDate } from '@/lib/data';

interface ClientInfoCardProps {
  client: ClientInfo;
}

export default function ClientInfoCard({ client }: ClientInfoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Information</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Name</p>
          <p className="text-lg font-semibold text-gray-800">{client.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Email</p>
          <p className="text-lg font-semibold text-gray-800">{client.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Install Date</p>
          <p className="text-lg font-semibold text-gray-800">
            {formatDate(client.installDate)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Client ID</p>
          <p className="text-lg font-semibold text-gray-800">{client.id}</p>
        </div>
      </div>
    </div>
  );
}
