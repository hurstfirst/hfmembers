import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientInfoCard from '@/components/ClientInfoCard';
import AMCInfoCard from '@/components/AMCInfoCard';
import TouchpointsCard from '@/components/TouchpointsCard';
import { mockClientData, mockTouchpoints } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back, {mockClientData.name}
            </h1>
            <p className="text-gray-600">
              View your AMC status, upcoming touchpoints, and manage your account.
            </p>
          </div>

          <ClientInfoCard client={mockClientData} />
          
          <AMCInfoCard amc={mockClientData.amc} />
          
          <TouchpointsCard touchpoints={mockTouchpoints} />

          {!mockClientData.amc && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Interested in an AMC?
              </h3>
              <p className="text-blue-800 mb-4">
                Register your interest and we&apos;ll get in touch to discuss the best plan for you.
              </p>
              <Link
                href="/register"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Register Interest
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
