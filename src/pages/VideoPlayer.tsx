
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ghibliVideos } from '../lib/videoData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import VideoRecommendations from '../components/VideoRecommendations';

const VideoPlayer = () => {
  const { id } = useParams<{ id: string }>();
  const videoId = parseInt(id || "1");
  const [video, setVideo] = useState(ghibliVideos.find(v => v.id === videoId) || ghibliVideos[0]);
  const { toast } = useToast();

  useEffect(() => {
    // Find the video based on the ID from URL parameters
    const currentVideo = ghibliVideos.find(v => v.id === videoId) || ghibliVideos[0];
    setVideo(currentVideo);
    
    // Show toast notification when video loads
    if (currentVideo) {
      toast({
        title: "Sedang Diputar",
        description: `${currentVideo.title} (${currentVideo.year})`,
      });
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [videoId, toast]);

  // Get recommended videos (same categories but not the current one)
  const recommendedVideos = ghibliVideos
    .filter(v => v.id !== video.id && v.categories.some(cat => video.categories.includes(cat)))
    .slice(0, 6);

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <Link to="/videos" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Video
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-netflix-gray/20 border-netflix-gray/30 overflow-hidden mb-6">
                <div className="aspect-video relative">
                  <iframe 
                    src={`${video.videoUrl}?autoplay=1`} 
                    title={video.title} 
                    className="absolute top-0 left-0 w-full h-full" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                  />
                </div>
              </Card>
              
              <h1 className="text-3xl font-bold text-white mb-2">{video.title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-white/70 mb-4 gap-3">
                <span className="bg-netflix-red px-1.5 py-0.5 text-white text-xs rounded">{video.rating}</span>
                <span>{video.year}</span>
                <span>{video.duration}</span>
                <span>Sutradara: {video.director}</span>
              </div>
              
              <p className="text-white/80 mb-6">{video.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {video.categories.map(category => (
                  <span 
                    key={category}
                    className="px-3 py-1 bg-netflix-gray/30 text-white/80 text-sm rounded-full"
                  >
                    {category === "fantasy" ? "Fantasi" : 
                     category === "adventure" ? "Petualangan" : 
                     category === "drama" ? "Drama" : 
                     category === "romance" ? "Romantis" : 
                     category === "family" ? "Keluarga" : 
                     category === "animation" ? "Animasi" : 
                     category === "action" ? "Aksi" : 
                     category === "comedy" ? "Komedi" : 
                     category === "sci-fi" ? "Fiksi Ilmiah" :
                     category === "biography" ? "Biografi" :
                     category === "war" ? "Perang" :
                     category === "slice of life" ? "Kehidupan Sehari-hari" :
                     category === "mystery" ? "Misteri" :
                     category === "documentary" ? "Dokumenter" : category}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Rekomendasi untuk Anda</h3>
              <VideoRecommendations videos={recommendedVideos} />
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default VideoPlayer;
