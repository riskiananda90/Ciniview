
import React from 'react';
import { Link } from 'react-router-dom';
import { GhibliVideo } from '../lib/videoData';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface VideoRecommendationsProps {
  videos: GhibliVideo[];
}

const VideoRecommendations = ({ videos }: VideoRecommendationsProps) => {
  return (
    <div className="space-y-4">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link to={`/video/${video.id}`}>
            <Card className="flex overflow-hidden bg-netflix-gray/10 hover:bg-netflix-gray/20 border-netflix-gray/20 hover:border-netflix-red/30 transition-all duration-300">
              <div className="w-1/3">
                <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover" />
              </div>
              <div className="w-2/3 p-3">
                <h4 className="text-white font-medium line-clamp-1 text-sm">{video.title}</h4>
                <div className="flex items-center text-xs text-white/60 mt-1">
                  <span>{video.year}</span>
                  <span className="mx-1">•</span>
                  <span>{video.duration}</span>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] px-1.5 py-0.5 bg-netflix-gray/30 text-white/70 rounded">
                    {video.categories[0]}
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default VideoRecommendations;
