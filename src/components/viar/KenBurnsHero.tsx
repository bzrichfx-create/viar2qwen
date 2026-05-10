import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, MessageCircle, CalendarCheck } from 'lucide-react';
import { HERO_SLIDES, COMPANY, waLink } from '@/data/viarData';
import { TEST_RIDE_BOOKING_URL } from '@/data/booking';

const KenBurnsHero: React.FC = () => {
  const [active, setActive] = useState(0);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % total), 8000);
    return () => clearInterval(t);
  }, [total]);

  const go = (i: number) => setActive((i + total) % total);

  return (
    <section className="relative h-[100vh] min-h-[600px] w-full overflow-hidden bg-black">
      {HERO_SLIDES.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            aria-hidden={!isActive}
          >
            {/* Ken Burns image */}
            <div
              key={`bg-${slide.id}-${active === i ? 'on' : 'off'}`}
              className={`absolute inset-0 bg-cover bg-center ${isActive ? (i % 2 === 0 ? 'animate-kenburns-1' : 'animate-kenburns-2') : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto text-white">
              {isActive && (
                <>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E31E24]/90 backdrop-blur w-fit mb-5 text-xs md:text-sm font-semibold tracking-wider uppercase animate-fade-in">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Viar Motor Indonesia
                  </div>
                  <h1
                    className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6 animate-slide-up"
                    style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="text-lg md:text-2xl mb-8 max-w-2xl text-white/90 animate-slide-up"
                    style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
                  >
                    {slide.subtitle}
                  </p>
                  <div
                    className="flex flex-wrap gap-3 animate-slide-up"
                    style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
                  >
                    <Link
                      to="/products"
                      className="btn-viar text-white px-7 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 shadow-xl"
                    >
                      Lihat Produk <ArrowRight size={18} />
                    </Link>
                    <a
                      href={TEST_RIDE_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FFD700] hover:bg-[#FFC700] text-[#1A1A1A] px-7 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 shadow-xl transition"
                    >
                      <CalendarCheck size={18} /> Book Test Ride
                    </a>
                    <a
                      href={waLink(COMPANY.whatsapp, `Halo MDB, saya tertarik dengan ${slide.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur border border-white/30 hover:bg-white hover:text-[#1A1A1A] text-white px-7 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition"
                    >
                      <MessageCircle size={18} /> Hubungi
                    </a>
                  </div>
                </>
              )}

            </div>
          </div>
        );
      })}

      {/* Arrows */}
      <button
        onClick={() => go(active - 1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-[#E31E24] hover:border-[#E31E24] transition flex items-center justify-center"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => go(active + 1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-[#E31E24] hover:border-[#E31E24] transition flex items-center justify-center"
        aria-label="Slide berikutnya"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all ${i === active ? 'w-10 bg-[#E31E24]' : 'w-3 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 md:right-10 z-20 hidden md:flex flex-col items-center gap-2 text-white/70 text-xs">
        <span className="rotate-90 origin-center tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-white/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#E31E24] animate-[float_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default KenBurnsHero;
