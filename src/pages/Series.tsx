
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieBanner from '../components/MovieBanner';
import MovieCarousel from '../components/MovieCarousel';
import { trendingMovies, popularMovies } from '../lib/movieData';
import { motion } from "framer-motion";
import { FilterX, Filter } from 'lucide-react';

// Filter data untuk series saja (dalam contoh ini kita pretend beberapa adalah series)
const seriesData = {
  featured: {
    id: 7,
    title: "Stranger Things",
    description: "Ketika seorang anak laki-laki menghilang, sebuah kota kecil mengungkap misteri yang melibatkan eksperimen rahasia, kekuatan supernatural yang menakutkan, dan seorang gadis kecil yang aneh.",
    bannerImage: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxzdHJhbmdlciUyMHRoaW5nc3xlbnwwfHx8fDE2NDQyODI4ODE&ixlib=rb-1.2.1&q=80&w=2000"
  },
  series: trendingMovies.slice(0, 8), // Pretend ini adalah series
  popular: popularMovies.slice(2, 10), // Pretend ini adalah series
  drama: trendingMovies.slice(4, 12), // Pretend ini adalah series drama
  action: popularMovies.slice(0, 8), // Pretend ini adalah series aksi
}

const genres = [
  "Semua", "Aksi", "Petualangan", "Komedi", "Drama", 
  "Fantasi", "Horor", "Romantis", "Sci-Fi", "Thriller"
];

const Series = () => {
  const [activeGenre, setActiveGenre] = useState("Semua");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      <MovieBanner movie={seriesData.featured} />
      
      {/* Filter area */}
      <div className="relative z-30 px-4 sm:px-6 lg:px-12 mt-[-100px] mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl sm:text-3xl font-bold">Serial TV</h1>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-netflix-gray/50 hover:bg-netflix-gray/80 text-white py-2 px-3 rounded-md text-sm border border-white/10 transition-all duration-300"
          >
            {showFilters ? (
              <>
                <FilterX size={16} />
                <span>Tutup Filter</span>
              </>
            ) : (
              <>
                <Filter size={16} />
                <span>Filter</span>
              </>
            )}
          </button>
        </div>
        
        {/* Genre filter */}
        {showFilters && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 mb-4 bg-netflix-gray/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 overflow-hidden"
          >
            <h3 className="text-white/80 text-sm mb-3">Genre</h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(genre)}
                  className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
                    activeGenre === genre
                      ? "bg-netflix-red text-white"
                      : "bg-netflix-gray/40 text-white/70 hover:bg-netflix-gray/60"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      
      <div className="relative z-20 mt-[-50px]">
        <MovieCarousel title="Serial Populer" movies={seriesData.popular} />
        <MovieCarousel title="Serial Trending" movies={seriesData.series} />
        <MovieCarousel title="Serial Drama" movies={seriesData.drama} />
        <MovieCarousel title="Serial Aksi" movies={seriesData.action} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Series;
