import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition">
              Hurst First
            </Link>
            <span className="text-blue-200">|</span>
            <span className="text-lg">Members Portal</span>
          </div>
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition">
              Dashboard
            </Link>
            <Link href="/register" className="hover:text-blue-200 transition">
              Register AMC
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
