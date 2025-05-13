
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ForgotPassword = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi mengirim link reset password
    setTimeout(() => {
      setIsLoading(false);
      if (email) {
        setIsSubmitted(true);
        toast({
          title: "Email terkirim",
          description: "Silakan periksa email Anda untuk instruksi reset password",
        });
      } else {
        toast({
          title: "Gagal",
          description: "Silakan masukkan email yang valid",
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
        <h1 className="text-2xl font-bold text-white mb-6">Lupa Password</h1>
        
        {!isSubmitted ? (
          <>
            <p className="text-gray-400 mb-6">
              Kami akan mengirimkan email berisi instruksi untuk mereset password Anda.
            </p>
            
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
              
              <Button 
                type="submit" 
                className="w-full bg-netflix-red hover:bg-netflix-red/80 text-white py-3"
                disabled={isLoading}
              >
                {isLoading ? 'Memuat...' : 'Kirim Email Reset Password'}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Email terkirim ke {email}. Silahkan periksa inbox Anda untuk instruksi lebih lanjut.
            </p>
            <Link to="/login">
              <Button className="bg-netflix-red hover:bg-netflix-red/80 text-white">
                Kembali ke Login
              </Button>
            </Link>
          </div>
        )}
        
        <div className="mt-6 text-center">
          <Link to="/login" className="text-gray-400 hover:underline">
            Kembali ke Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
