
import { useRef } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MovieCarouselProps {
  title: string;
  movies: Array<{
    id: number;
    title: string;
    posterImage: string;
    year: number;
    rating: string;
    duration: string;
    status?: string;
  }>;
}

const MovieCarousel = ({
  title,
  movies
}: MovieCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const {
      current
    } = carouselRef;
    const scrollAmount = current.clientWidth * 0.75;
    if (direction === 'left') {
      current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="relative px-4 sm:px-6 lg:px-12 mb-8">
      <h2 className="text-white text-xl font-medium mb-4 my-[46px] py-[2px]">{title}</h2>
      
      {/* Carousel Navigation */}
      <button 
        onClick={() => scroll('left')} 
        className="absolute left-0 sm:left-2 top-1/2 z-10 bg-netflix-black/80 rounded-full p-1 text-white/70 hover:text-white transition-colors transform -translate-y-6" 
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={() => scroll('right')} 
        className="absolute right-0 sm:right-2 top-1/2 z-10 bg-netflix-black/80 rounded-full p-1 text-white/70 hover:text-white transition-colors transform -translate-y-6" 
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Carousel Content */}
      <div 
        ref={carouselRef} 
        className="flex space-x-4 overflow-x-scroll carousel-container pb-4 hide-scrollbar"
      >
        {movies.map(movie => (
          <div key={movie.id} className="flex-shrink-0 w-[160px] md:w-[200px]">
            <div className="flex flex-col">
              <div className="relative overflow-hidden rounded-md border border-netflix-gray/20 group-hover:border-netflix-red/30 transition-all duration-300">
                <MovieCard movie={movie} />
              </div>
              <div className="mt-2 px-1">
                <h3 className="text-white text-sm font-medium truncate">{movie.title}</h3>
                <div className="flex items-center text-[10px] text-white/60 mt-1">
                  <span>{movie.year}</span>
                  <span className="mx-1">•</span>
                  <span>{movie.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
