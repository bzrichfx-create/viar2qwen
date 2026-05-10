import React, { useState } from 'react';
import { X, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import SiteLayout from '@/components/viar/SiteLayout';
import PageHero from '@/components/viar/PageHero';
import Reveal from '@/components/viar/Reveal';
import { MODIFICATIONS, COMPANY, waLink } from '@/data/viarData';

const TYPES = ['Semua', 'Performance', 'Aesthetic', 'Utility'];

const ModificationsPage: React.FC = () => {
  const [type, setType] = useState('Semua');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [beforeAfter, setBeforeAfter] = useState(50);

  const filtered = MODIFICATIONS.filter((m) => type === 'Semua' || m.type === type);

  const open = (idx: number) => setLightbox(idx);
  const close = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <SiteLayout>
      <PageHero
        title="Galeri Modifikasi"
        subtitle="Inspirasi modifikasi motor Viar dari komunitas & bengkel kami."
        image="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428449215_946a9799.jpg"
        breadcrumb="Modifikasi"
      />

      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter chips */}
          <Reveal className="flex flex-wrap justify-center gap-2 mb-10">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${type === t ? 'btn-viar text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {t}
              </button>
            ))}
          </Reveal>

          {/* Masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {filtered.map((m, i) => (
              <Reveal key={m.id} delay={i * 50}>
                <button
                  onClick={() => open(i)}
                  className="group block w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition">
                      <span className="inline-block bg-[#E31E24] text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2">{m.type}</span>
                      <div className="font-heading font-bold text-lg">{m.title}</div>
                      <div className="text-xs text-white/80">by {m.owner}</div>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Before / After slider */}
          <Reveal className="mt-20">
            <div className="text-center mb-8">
              <div className="text-xs md:text-sm text-[#E31E24] font-bold uppercase tracking-widest mb-2">Before & After</div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A1A1A]">Transformasi Build</h2>
              <p className="text-gray-600 mt-2">Geser slider untuk melihat hasil modifikasi.</p>
            </div>
            <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl select-none">
              <img src={MODIFICATIONS[0].image} alt="After" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${beforeAfter}%` }}>
                <img src={MODIFICATIONS[2].image} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (beforeAfter / 100)}%` }} />
                <span className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded">BEFORE</span>
              </div>
              <span className="absolute top-4 right-4 bg-[#E31E24] text-white text-xs font-bold px-3 py-1 rounded">AFTER</span>
              <div className="absolute inset-y-0" style={{ left: `${beforeAfter}%` }}>
                <div className="h-full w-1 bg-white shadow-2xl" />
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center">
                  <ChevronLeft size={14} /><ChevronRight size={14} />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={beforeAfter}
                onChange={(e) => setBeforeAfter(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                aria-label="Before after slider"
              />
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="mt-16 bg-gradient-to-r from-[#E31E24] to-[#B71C1C] rounded-3xl p-10 md:p-14 text-center text-white">
            <h3 className="font-heading font-extrabold text-2xl md:text-4xl mb-3">Ingin Modifikasi Motor Viar Anda?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">Konsultasikan ide modifikasi dengan tim bengkel ahli MDB. Konsultasi awal gratis!</p>
            <a
              href={waLink(COMPANY.whatsapp, 'Halo MDB, saya ingin konsultasi modifikasi motor Viar.')}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#E31E24] font-bold px-7 py-3.5 rounded-full hover:scale-105 transition"
            >
              <MessageCircle size={18} /> Konsultasi Modifikasi Gratis
            </a>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-fade-in" onClick={close}>
          <button onClick={close} className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="Close"><X /></button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E31E24] text-white flex items-center justify-center" aria-label="Previous"><ChevronLeft /></button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E31E24] text-white flex items-center justify-center" aria-label="Next"><ChevronRight /></button>
          <div className="max-w-5xl max-h-[85vh] text-center" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightbox].image} alt={filtered[lightbox].title} className="max-h-[80vh] mx-auto rounded-lg shadow-2xl" />
            <div className="text-white mt-4">
              <div className="font-heading font-bold text-lg">{filtered[lightbox].title}</div>
              <div className="text-sm text-white/70">{filtered[lightbox].type} • by {filtered[lightbox].owner}</div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
};

export default ModificationsPage;
