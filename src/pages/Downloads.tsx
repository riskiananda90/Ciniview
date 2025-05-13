
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Tv, Laptop } from 'lucide-react';

const Downloads = () => {
  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-white text-4xl font-bold mb-6">Unduh Film dan Acara TV Favorit Anda</h1>
          
          <p className="text-gray-400 text-lg mb-10">
            Tonton offline di mana saja, kapan saja. Unduh dan tonton tanpa koneksi internet.
          </p>
          
          <div className="bg-netflix-gray/20 p-6 rounded-lg mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Mobile devices"
                className="w-full md:w-1/2 rounded-lg"
              />
              
              <div>
                <h2 className="text-white text-2xl font-bold mb-4">Unduh dan Tonton Offline</h2>
                <p className="text-gray-400 mb-6">
                  Simpan favorit Anda dengan mudah dan selalu miliki sesuatu untuk ditonton. 
                  Tersedia di paket berlangganan dasar dengan iklan dan semua paket yang lebih mahal.
                </p>
                <Button className="bg-netflix-red hover:bg-netflix-red/80 flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  <span>Unduh Aplikasi</span>
                </Button>
              </div>
            </div>
          </div>
          
          <h2 className="text-white text-2xl font-bold mb-6">Tersedia di Berbagai Perangkat</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-netflix-gray/20 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Smartphone className="h-16 w-16 text-netflix-red" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Ponsel & Tablet</h3>
              <p className="text-gray-400">
                Unduh aplikasi Netflix di ponsel atau tablet iOS dan Android.
              </p>
            </div>
            
            <div className="bg-netflix-gray/20 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Laptop className="h-16 w-16 text-netflix-red" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Komputer</h3>
              <p className="text-gray-400">
                Tonton langsung di netflix.com dari browser web.
              </p>
            </div>
            
            <div className="bg-netflix-gray/20 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Tv className="h-16 w-16 text-netflix-red" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Smart TV</h3>
              <p className="text-gray-400">
                Streaming di Smart TV, PlayStation, Xbox, Chromecast, Apple TV, dan banyak lagi.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-netflix-red to-netflix-red/70 p-8 rounded-lg text-center">
            <h2 className="text-white text-2xl font-bold mb-4">Mulai Menonton Sekarang</h2>
            <p className="text-white/90 mb-6">
              Download aplikasi atau tonton langsung di browser. Tidak diperlukan komitmen berlangganan.
            </p>
            <Button className="bg-white text-netflix-red hover:bg-white/90">
              Mulai Gratis
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Downloads;
