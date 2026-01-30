import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AMCRegistrationForm from '@/components/AMCRegistrationForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Register Interest for AMC
            </h1>
            <p className="text-gray-600">
              Complete the form below to express your interest in our Annual Maintenance Contract services.
            </p>
          </div>

          <AMCRegistrationForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
