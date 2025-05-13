
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { X } from 'lucide-react';

// Dalam aplikasi nyata, ini akan diambil dari API atau local storage
interface Movie {
  id: number;
  title: string;
  posterImage: string;
  year: number;
  rating: string;
  duration: string;
}

const MyList = () => {
  const { toast } = useToast();
  const [myList, setMyList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi mengambil data dari local storage
    const storedList = localStorage.getItem('myList');
    
    // Simulasi loading
    setTimeout(() => {
      if (storedList) {
        setMyList(JSON.parse(storedList));
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  const removeFromList = (id: number) => {
    const updatedList = myList.filter(movie => movie.id !== id);
    setMyList(updatedList);
    localStorage.setItem('myList', JSON.stringify(updatedList));
    
    toast({
      title: "Film dihapus",
      description: "Film telah dihapus dari daftar Anda",
    });
  };

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-8">Daftar Tontonan Saya</h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-netflix-red"></div>
          </div>
        ) : myList.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-white text-xl mb-4">Daftar tontonan Anda kosong</h2>
            <p className="text-gray-400 mb-8">Tambahkan film dan acara TV ke daftar untuk menontonnya nanti.</p>
            <Link to="/">
              <Button className="bg-netflix-red hover:bg-netflix-red/80">
                Lihat Film dan Acara TV
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {myList.map((movie) => (
              <div key={movie.id} className="relative group">
                <Link to={`/movie/${movie.id}`}>
                  <img 
                    src={movie.posterImage} 
                    alt={movie.title}
                    className="rounded-md w-full object-cover aspect-[2/3] transition-transform group-hover:scale-105"
                  />
                </Link>
                
                <button
                  onClick={() => removeFromList(movie.id)}
                  className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Hapus dari daftar saya"
                >
                  <X size={16} />
                </button>
                
                <h3 className="text-white mt-2 line-clamp-1">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.year} • {movie.duration}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default MyList;
