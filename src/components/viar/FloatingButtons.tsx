import React, { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, X } from 'lucide-react';
import { COMPANY, waLink } from '@/data/viarData';

const FloatingButtons: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    setCookieAccepted(localStorage.getItem('viar-cookie') === '1');
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const acceptCookie = () => {
    localStorage.setItem('viar-cookie', '1');
    setCookieAccepted(true);
  };

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={waLink(COMPANY.whatsapp, 'Halo MDB, saya tertarik dengan motor Viar.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Chat WhatsApp"
      >
        <span className="relative inline-flex">
          <span className="wa-pulse relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition">
            <MessageCircle size={26} fill="currentColor" />
          </span>
        </span>
        <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white text-xs font-medium px-3 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
          Chat di WhatsApp
        </span>
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-[#1A1A1A] text-white shadow-xl hover:bg-[#E31E24] transition flex items-center justify-center animate-fade-in"
          aria-label="Kembali ke atas"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Cookie consent */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#1A1A1A]/95 backdrop-blur text-white px-4 py-4 md:px-6 animate-slide-up">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-3">
            <p className="text-sm flex-1">
              Kami menggunakan cookie untuk meningkatkan pengalaman Anda di situs Viar MDB. Dengan melanjutkan, Anda menyetujui kebijakan privasi kami.
            </p>
            <div className="flex gap-2">
              <button onClick={acceptCookie} className="btn-viar text-white text-sm font-semibold px-5 py-2 rounded-full">
                Terima
              </button>
              <button onClick={acceptCookie} className="text-sm text-gray-300 hover:text-white p-2" aria-label="Tutup">
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
