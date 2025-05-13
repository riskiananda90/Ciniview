
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieBanner from '../components/MovieBanner';
import MovieCarousel from '../components/MovieCarousel';
import { actionMovies, comedyMovies, popularMovies } from '../lib/movieData';
import { motion } from "framer-motion";
import { FilterX, Filter } from 'lucide-react';

// Data untuk halaman Films
const filmsData = {
  featured: {
    id: 10,
    title: "Dune",
    description: "Film epik fiksi ilmiah yang mengikuti perjalanan Paul Atreides, seorang pemuda brilian dan berbakat yang harus melakukan perjalanan ke planet paling berbahaya di alam semesta untuk memastikan masa depan keluarga dan rakyatnya.",
    bannerImage: "https://images.unsplash.com/photo-1635848593054-612951b3327b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  newReleases: actionMovies.slice(0, 8),
  award: popularMovies.slice(3, 11),
  action: actionMovies,
  comedy: comedyMovies
}

const genres = [
  "Semua", "Aksi", "Petualangan", "Komedi", "Drama", 
  "Fantasi", "Horor", "Romantis", "Sci-Fi", "Thriller"
];

const Films = () => {
  const [activeGenre, setActiveGenre] = useState("Semua");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      <MovieBanner movie={filmsData.featured} />
      
      {/* Filter area */}
      <div className="relative z-30 px-4 sm:px-6 lg:px-12 mt-[-100px] mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl sm:text-3xl font-bold">Film</h1>
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
        <MovieCarousel title="Film Terbaru" movies={filmsData.newReleases} />
        <MovieCarousel title="Pemenang Penghargaan" movies={filmsData.award} />
        <MovieCarousel title="Film Aksi & Petualangan" movies={filmsData.action} />
        <MovieCarousel title="Film Komedi" movies={filmsData.comedy} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Films;
