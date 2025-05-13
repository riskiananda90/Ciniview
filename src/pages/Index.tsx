
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieBanner from '../components/MovieBanner';
import MovieCarousel from '../components/MovieCarousel';
import ScheduleComponent from '../components/ScheduleComponent';
import { Link } from 'react-router-dom';
import { 
  featuredMovie, 
  trendingMovies, 
  popularMovies, 
  actionMovies, 
  comedyMovies,
  scheduleData
} from '../lib/movieData';
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      <MovieBanner movie={featuredMovie} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        className="relative z-20 mt-[-150px]"
      >
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <ScheduleComponent scheduleItems={scheduleData} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="px-4 sm:px-6 lg:px-12 mb-8"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-white text-3xl font-bold mb-3">Koleksi Ghibli</h2>
            <Link to="/videos" className="text-netflix-red hover:text-netflix-red/80 transition-colors font-medium">
              Lihat Semua Video →
            </Link>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <MovieCarousel title="Sedang Tren" movies={trendingMovies} />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <MovieCarousel title="Populer di Cineview" movies={popularMovies} />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <MovieCarousel title="Aksi & Petualangan" movies={actionMovies} />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <MovieCarousel title="Komedi" movies={comedyMovies} />
        </motion.div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
