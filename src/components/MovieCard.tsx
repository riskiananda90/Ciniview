
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    posterImage: string;
    year: number;
    rating: string;
    duration: string;
    status?: string; // New field for movie status (ongoing/completed)
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { toast } = useToast();

  const handlePlayVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Memutar video",
      description: `Memulai pemutaran ${movie.title}`,
    });
    
    // Navigate to movie detail page after a short delay
    setTimeout(() => {
      window.location.href = `/movie/${movie.id}`;
    }, 500);
  };

  return (
    <div className="relative group">
      <Link to={`/movie/${movie.id}`}>
        <div className="relative">
          <img 
            src={movie.posterImage} 
            alt={movie.title} 
            className="w-full rounded-md object-cover aspect-[2/3] transition-transform duration-700 group-hover:scale-105" 
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button 
              onClick={handlePlayVideo}
              className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center hover:bg-netflix-red hover:text-white transition-all duration-300"
              aria-label="Play"
            >
              <Play className="h-6 w-6" />
            </button>
          </div>
          
          {/* Status badge (ongoing/completed) */}
          {movie.status && (
            <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium ${
              movie.status === 'ongoing' 
                ? 'bg-green-500 text-white' 
                : movie.status === 'completed' 
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-500 text-white'
            }`}>
              {movie.status.charAt(0).toUpperCase() + movie.status.slice(1)}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
