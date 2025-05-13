
import { Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

interface MovieBannerProps {
  movie: {
    id: number;
    title: string;
    description: string;
    bannerImage: string;
    trailerUrl?: string; // Optional trailer URL
  };
}

const MovieBanner = ({ movie }: MovieBannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Simulate video autoplay when component mounts
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(err => {
          console.log("Autoplay prevented:", err);
          // Fallback to image if autoplay is prevented
        });
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to get video ID from YouTube URL
  const getYouTubeID = (url?: string) => {
    if (!url) return null;
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  const youtubeID = getYouTubeID(movie.trailerUrl);
  
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-netflix-black to-transparent z-10"
      ></div>
      <div 
        className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent z-10"
      ></div>
      
      {/* Background video or image */}
      {youtubeID ? (
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <iframe 
              ref={videoRef as any}
              className="absolute w-[300%] h-[300%] top-[-100%] left-[-100%]"
              src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${youtubeID}`}
              title={`${movie.title} trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${movie.bannerImage})` }}
        ></div>
      )}
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-32 z-20 px-4 sm:px-6 lg:px-12 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-3 animate-fade-in">
          {movie.title}
        </h1>
        <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mb-6 line-clamp-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {movie.description}
        </p>
        <div className="flex space-x-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link 
            to={`/movie/${movie.id}`}
            className="bg-white text-netflix-black hover:bg-white/80 transition-colors px-6 py-2 rounded flex items-center"
          >
            <Play className="h-5 w-5 mr-2" />
            <span className="font-medium">Play</span>
          </Link>
          <Link 
            to={`/movie/${movie.id}`}
            className="bg-netflix-gray/80 text-white hover:bg-netflix-gray transition-colors px-6 py-2 rounded flex items-center"
          >
            <Info className="h-5 w-5 mr-2" />
            <span className="font-medium">More Info</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
