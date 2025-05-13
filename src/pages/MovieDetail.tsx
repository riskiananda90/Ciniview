
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Play, Plus, ThumbsUp, Check, Share2, Download } from 'lucide-react';
import { movieDetails } from '../lib/movieData';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [movie, setMovie] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInMyList, setIsInMyList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading data
    setIsLoading(true);
    
    setTimeout(() => {
      // Dalam aplikasi nyata, ini akan mengambil data dari API
      if (id && movieDetails[Number(id)]) {
        setMovie(movieDetails[Number(id)]);
      } else {
        // Fallback ke film pertama jika ID tidak ditemukan
        setMovie(movieDetails[1]);
      }
      
      setIsLoading(false);
      
      // Cek apakah film ada di daftar saya
      const myList = localStorage.getItem('myList');
      if (myList) {
        const parsedList = JSON.parse(myList);
        setIsInMyList(parsedList.some((item: any) => item.id === Number(id)));
      }
    }, 800);
    
    // Reset status putar video saat komponen dirender
    setIsPlaying(false);
  }, [id]);

  const toggleMyList = () => {
    const myList = localStorage.getItem('myList');
    let updatedList = [];
    
    if (myList) {
      updatedList = JSON.parse(myList);
    }
    
    if (isInMyList) {
      updatedList = updatedList.filter((item: any) => item.id !== movie.id);
      toast({
        title: "Dihapus dari daftar",
        description: `${movie.title} dihapus dari Daftar Saya`,
      });
    } else {
      updatedList.push(movie);
      toast({
        title: "Ditambahkan ke daftar",
        description: `${movie.title} ditambahkan ke Daftar Saya`,
      });
    }
    
    localStorage.setItem('myList', JSON.stringify(updatedList));
    setIsInMyList(!isInMyList);
  };

  const handlePlayMovie = () => {
    setIsPlaying(true);
    // Scroll ke trailer untuk menunjukkan video bermain
    document.getElementById('trailer')?.scrollIntoView({ behavior: 'smooth' });
    
    toast({
      title: "Memutar",
      description: `Memutar ${movie?.title}`,
    });
  };

  const handleShare = () => {
    // Simulasi share functionality
    toast({
      title: "Berbagi",
      description: `Link untuk ${movie?.title} telah disalin`,
    });
  };

  const handleDownload = () => {
    // Simulasi download functionality
    toast({
      title: "Mengunduh",
      description: `${movie?.title} sedang diunduh`,
    });
  };

  const handleLike = () => {
    toast({
      title: "Disukai",
      description: `Anda menyukai ${movie?.title}`,
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-netflix-black text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-netflix-red"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen bg-netflix-black text-white flex-col">
        <h1 className="text-2xl mb-4">Film tidak ditemukan</h1>
        <Button onClick={() => navigate('/')} className="bg-netflix-red hover:bg-netflix-red/80">
          Kembali ke Beranda
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <div className="relative pt-16">
        {/* Hero backdrop */}
        <div className="w-full h-[70vh] relative">
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent z-10"></div>
          
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${movie.backdropImage})` }}
          ></div>
          
          {/* Movie info overlay */}
          <div className="absolute inset-0 flex flex-col justify-center z-20 px-4 sm:px-6 lg:px-12 max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-white/70 mb-4">
              <span className="text-green-500 mr-4">{movie.rating}% Match</span>
              <span className="mr-4">{movie.year}</span>
              <span className="border border-white/40 px-1 mr-4">{movie.maturityRating}</span>
              <span className="mr-4">{movie.duration}</span>
              <span className="mr-4">HD</span>
            </div>
            
            <div className="flex flex-wrap space-x-3 mb-8">
              <Button 
                onClick={handlePlayMovie}
                className="bg-white text-netflix-black hover:bg-white/80 transition-colors px-6 py-2 rounded flex items-center"
              >
                <Play className="h-5 w-5 mr-2" />
                <span className="font-medium">Play</span>
              </Button>
              
              <Button
                onClick={toggleMyList}
                className="bg-netflix-gray/80 text-white hover:bg-netflix-gray transition-colors px-4 py-2 rounded flex items-center"
              >
                {isInMyList ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    <span>My List</span>
                  </>
                ) : (
                  <>
                    <Plus className="h-5 w-5 mr-2" />
                    <span>My List</span>
                  </>
                )}
              </Button>
              
              <Button 
                onClick={handleLike}
                className="bg-netflix-gray/80 text-white hover:bg-netflix-gray transition-colors px-2 py-2 rounded flex items-center"
              >
                <ThumbsUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Movie details content */}
        <div className="px-4 sm:px-6 lg:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-white text-base mb-6">{movie.description}</p>
            
            <div className="text-white/70 mb-8">
              <p><span className="text-white/50">Director: </span>{movie.director}</p>
              <p><span className="text-white/50">Cast: </span>{movie.cast.join(', ')}</p>
              <p><span className="text-white/50">Genres: </span>{movie.genre.join(', ')}</p>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <Button 
                onClick={handleShare}
                className="bg-netflix-gray/40 text-white hover:bg-netflix-gray/60 flex items-center space-x-2"
              >
                <Share2 className="h-4 w-4" /> <span>Share</span>
              </Button>
              
              <Button 
                onClick={handleDownload}
                className="bg-netflix-gray/40 text-white hover:bg-netflix-gray/60 flex items-center space-x-2"
              >
                <Download className="h-4 w-4" /> <span>Download</span>
              </Button>
            </div>
          </div>
          
          <div>
            {/* Trailer */}
            <p className="text-white text-lg mb-4" id="trailer">
              {isPlaying ? 'Now Playing' : 'Trailer'}
            </p>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={`${movie.trailerUrl}${isPlaying ? '?autoplay=1' : ''}`}
                title={`${movie.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MovieDetail;
