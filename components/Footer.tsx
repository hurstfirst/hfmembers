export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Hurst First. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-blue-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
