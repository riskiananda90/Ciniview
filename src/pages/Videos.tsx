
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoGrid from '../components/VideoGrid';
import { ghibliVideos } from '../lib/videoData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Videos = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Filter videos based on category
  const getFilteredVideos = () => {
    if (activeFilter === "all") {
      return ghibliVideos;
    }
    return ghibliVideos.filter(video => video.categories.includes(activeFilter));
  };

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Koleksi Film Ghibli</h1>
          <p className="text-white/70 mb-8">Jelajahi dunia ajaib Studio Ghibli dengan koleksi 30 film kami yang menakjubkan</p>

          <Tabs defaultValue="all" className="mb-10">
            <TabsList className="bg-netflix-black/80 border border-netflix-gray/20 p-1 mb-6">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-netflix-red data-[state=active]:text-white px-6 py-2"
                onClick={() => setActiveFilter("all")}
              >
                Semua Video
              </TabsTrigger>
              <TabsTrigger 
                value="fantasy"
                className="data-[state=active]:bg-netflix-red data-[state=active]:text-white px-6 py-2"
                onClick={() => setActiveFilter("fantasy")}
              >
                Fantasi
              </TabsTrigger>
              <TabsTrigger 
                value="adventure"
                className="data-[state=active]:bg-netflix-red data-[state=active]:text-white px-6 py-2"
                onClick={() => setActiveFilter("adventure")}
              >
                Petualangan
              </TabsTrigger>
              <TabsTrigger 
                value="drama"
                className="data-[state=active]:bg-netflix-red data-[state=active]:text-white px-6 py-2"
                onClick={() => setActiveFilter("drama")}
              >
                Drama
              </TabsTrigger>
              <TabsTrigger 
                value="romance"
                className="data-[state=active]:bg-netflix-red data-[state=active]:text-white px-6 py-2"
                onClick={() => setActiveFilter("romance")}
              >
                Romantis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <VideoGrid videos={getFilteredVideos()} />
            </TabsContent>
            <TabsContent value="fantasy" className="mt-0">
              <VideoGrid videos={getFilteredVideos()} />
            </TabsContent>
            <TabsContent value="adventure" className="mt-0">
              <VideoGrid videos={getFilteredVideos()} />
            </TabsContent>
            <TabsContent value="drama" className="mt-0">
              <VideoGrid videos={getFilteredVideos()} />
            </TabsContent>
            <TabsContent value="romance" className="mt-0">
              <VideoGrid videos={getFilteredVideos()} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Videos;
