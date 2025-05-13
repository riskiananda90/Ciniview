
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Play } from 'lucide-react';
import { motion } from "framer-motion";
import { GhibliVideo } from '../lib/videoData';

interface VideoGridProps {
  videos: GhibliVideo[];
}

const VideoGrid = ({ videos }: VideoGridProps) => {
  const translateCategory = (category: string) => {
    switch (category) {
      case "fantasy": return "Fantasi";
      case "adventure": return "Petualangan";
      case "drama": return "Drama";
      case "romance": return "Romantis";
      case "family": return "Keluarga";
      case "animation": return "Animasi";
      case "action": return "Aksi";
      case "comedy": return "Komedi";
      case "sci-fi": return "Fiksi Ilmiah";
      case "biography": return "Biografi";
      case "war": return "Perang";
      case "slice of life": return "Kehidupan Sehari-hari";
      case "mystery": return "Misteri";
      case "documentary": return "Dokumenter";
      default: return category;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <Link to={`/video/${video.id}`}>
            <Card className="overflow-hidden bg-netflix-gray/20 border-netflix-gray/30 hover:border-netflix-red/50 transition-all duration-300 h-full">
              <div className="relative aspect-video overflow-hidden group">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-netflix-red/90 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
                {video.duration && (
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="text-white font-medium line-clamp-1">{video.title}</h3>
                <p className="text-white/60 text-sm mt-1">{video.year}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {video.categories.slice(0, 2).map((category) => (
                    <span 
                      key={category} 
                      className="text-[10px] px-2 py-1 bg-netflix-gray/30 text-white/70 rounded"
                    >
                      {translateCategory(category)}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoGrid;
