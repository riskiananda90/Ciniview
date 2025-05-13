
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, ChevronDown, LogOut } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Pencarian",
        description: `Mencari: ${searchQuery}`,
      });
      // Dalam aplikasi nyata, ini akan mengarah ke halaman hasil pencarian
      setSearchQuery('');
      setIsSearchActive(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    toast({
      title: "Logout berhasil",
      description: "Anda telah keluar dari akun",
    });
    navigate('/login');
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between ${
        isScrolled ? 'bg-netflix-black shadow-md' : 'bg-gradient-to-b from-netflix-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center">
        <Link to="/" className="mr-8">
          <h1 className="text-netflix-red font-bold text-2xl sm:text-3xl">CINEVIEW</h1>
        </Link>
        {isLoggedIn && (
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 transition">Home</Link>
            <Link to="/series" className="text-white/70 hover:text-white transition">Series</Link>
            <Link to="/films" className="text-white/70 hover:text-white transition">Films</Link>
            <Link to="/my-list" className="text-white/70 hover:text-white transition">My List</Link>
            <Link to="/downloads" className="text-white/70 hover:text-white transition">Downloads</Link>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <div className="relative">
              {isSearchActive ? (
                <form onSubmit={handleSearch} className="flex items-center bg-netflix-black/80 border border-white/30 rounded px-2">
                  <Search className="h-4 w-4 text-white/70" />
                  <input 
                    type="text" 
                    placeholder="Titles, people, genres" 
                    className="bg-transparent border-none focus:outline-none text-white px-2 py-1 w-36 sm:w-auto"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery) {
                        setIsSearchActive(false);
                      }
                    }}
                  />
                </form>
              ) : (
                <button onClick={() => setIsSearchActive(true)}>
                  <Search className="h-5 w-5 text-white" />
                </button>
              )}
            </div>
            
            <Link to="/downloads">
              <button className="hidden sm:block text-white/70 hover:text-white transition">
                <Bell className="h-5 w-5" />
              </button>
            </Link>
            
            <div className="relative">
              <button 
                className="flex items-center space-x-1"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=36&h=36&fit=crop" 
                  className="h-7 w-7 rounded" 
                  alt="Profile"
                />
                <ChevronDown className={`h-4 w-4 text-white transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-netflix-black/95 border border-gray-800 rounded shadow-lg py-2">
                  <Link to="/my-list" className="block px-4 py-2 text-white hover:bg-gray-800 text-sm">
                    Daftar Saya
                  </Link>
                  <Link to="/account" className="block px-4 py-2 text-white hover:bg-gray-800 text-sm">
                    Akun
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 text-sm flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" /> Keluar
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="bg-netflix-red hover:bg-netflix-red/80 text-white px-4 py-1 rounded">
              Masuk
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
