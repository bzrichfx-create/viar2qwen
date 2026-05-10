import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Bike } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] px-6 relative overflow-hidden">
      <div className="absolute inset-0 geo-pattern" />
      <div className="relative z-10 text-center text-white">
        <div className="inline-block mb-6 animate-float">
          <Bike size={80} className="text-[#E31E24]" />
        </div>
        <h1 className="font-heading font-black text-7xl md:text-9xl bg-gradient-to-br from-[#E31E24] to-[#FFD700] bg-clip-text text-transparent mb-3">404</h1>
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl mb-3">Halaman Tidak Ditemukan</h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">Sepertinya Anda tersesat di jalanan off-road. Mari kita kembali ke rute utama.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-viar text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">
            <Home size={18} /> Kembali ke Beranda
          </Link>
          <button onClick={() => window.history.back()} className="bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition">
            <ArrowLeft size={18} /> Halaman Sebelumnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
