
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-netflix-black text-white/60 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex space-x-6 mb-6">
          <a href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-white transition-colors" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-white transition-colors" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-white transition-colors" />
          </a>
          <a href="#" aria-label="YouTube">
            <Youtube className="h-5 w-5 hover:text-white transition-colors" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <div>
            <Link to="/" className="hover:text-white hover:underline">Audio Description</Link>
          </div>
          <div>
            <Link to="/" className="hover:text-white hover:underline">Help Center</Link>
          </div>
          <div>
            <Link to="/" className="hover:text-white hover:underline">Gift Cards</Link>
          </div>
          <div>
            <Link to="/" className="hover:text-white hover:underline">Media Center</Link>
          </div>
          <div>
            <Link to="/" className="hover:text-white hover:underline">Investor Relations</Link>
          </div>
          <div>
            <Link to="/" className="hover:text-white hover:underline">Jobs</Link>
          </div>
          <div>
            <Link to="/" className="hover:text-white hover:underline">Terms of Use</Link>
          </div>
          <div>
            <Link to="/" className="hover:text-white hover:underline">Privacy</Link>
          </div>
        </div>

        <div className="mt-8 text-xs">
          <button className="border border-white/40 px-2 py-1 hover:text-white transition-colors">
            Service Code
          </button>
          <p className="mt-4">© 2023-2025 Cineview, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
