
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi registrasi
    setTimeout(() => {
      setIsLoading(false);
      if (email && password && password.length >= 6) {
        toast({
          title: "Pendaftaran berhasil",
          description: "Akun anda berhasil dibuat!",
        });
        navigate('/login');
      } else {
        toast({
          title: "Pendaftaran gagal",
          description: "Password harus minimal 6 karakter",
          variant: "destructive"
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" 
         style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/560e8e5e-2033-4049-8102-89286e8f386c/ID-id-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 w-full max-w-md p-8 bg-black/75 rounded">
        <h1 className="text-3xl font-bold text-white mb-6">Buat Akun</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-neutral-700 text-white border-none placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-neutral-700 text-white border-none placeholder:text-gray-400"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-netflix-red hover:bg-netflix-red/80 text-white py-3"
            disabled={isLoading}
          >
            {isLoading ? 'Memuat...' : 'Daftar'}
          </Button>
        </form>
        
        <div className="mt-12">
          <p className="text-gray-400">
            Sudah punya akun? <Link to="/login" className="text-white hover:underline">Masuk</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
