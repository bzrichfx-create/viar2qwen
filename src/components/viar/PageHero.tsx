import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image, breadcrumb }) => {
  return (
    <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden bg-[#1A1A1A]">
      <div
        className="absolute inset-0 bg-cover bg-center animate-kenburns-1"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 pt-16">
        <div className="text-xs md:text-sm flex items-center gap-2 text-white/70 mb-3 animate-fade-in">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#E31E24]">{breadcrumb || title}</span>
        </div>
        <h1 className="font-heading font-black text-4xl md:text-6xl mb-3 animate-slide-up">{title}</h1>
        {subtitle && (
          <p className="text-base md:text-xl text-white/85 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
