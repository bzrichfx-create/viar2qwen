import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bike, Wrench, Cog, Phone, Award, Shield, Truck, Zap, ChevronLeft, ChevronRight, Star, ArrowRight, MessageCircle } from 'lucide-react';
import SiteLayout from './viar/SiteLayout';
import KenBurnsHero from './viar/KenBurnsHero';
import Reveal from './viar/Reveal';
import Counter from './viar/Counter';
import ProductCard from './viar/ProductCard';
import ProductModal from './viar/ProductModal';
import { PRODUCTS, TESTIMONIALS, COMPANY, Product, waLink } from '@/data/viarData';

const AppLayout: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const [tIdx, setTIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setTIdx((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const featured = PRODUCTS.slice(0, 4);
  const testi = TESTIMONIALS[tIdx];

  return (
    <>
      {/* Loader */}
      {!loaded && (
        <div className="fixed inset-0 z-[100] bg-[#1A1A1A] flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#E31E24] to-[#B71C1C] flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-white font-black text-4xl font-heading">V</span>
            </div>
            <div className="mt-4 text-white/80 font-heading font-semibold tracking-widest">VIAR MDB</div>
            <div className="mt-3 w-32 h-1 mx-auto bg-white/10 rounded overflow-hidden">
              <div className="h-full bg-[#E31E24] animate-[shimmer_1s_linear_infinite]" style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      )}

      <SiteLayout>
        <KenBurnsHero />

        {/* Quick access cards */}
        <section className="relative -mt-20 z-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              { icon: Bike, label: 'Produk', desc: 'Lihat semua model Viar', to: '/products' },
              { icon: Wrench, label: 'Modifikasi', desc: 'Inspirasi build custom', to: '/modifications' },
              { icon: Cog, label: 'Sparepart', desc: 'Suku cadang & bengkel', to: '/sparepart' },
              { icon: Phone, label: 'Kontak', desc: 'Hubungi tim kami', to: '/contact' },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <Link
                  to={c.to}
                  className="block bg-white rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E31E24] to-[#B71C1C] flex items-center justify-center text-white mb-3 group-hover:scale-110 transition">
                    <c.icon size={22} />
                  </div>
                  <div className="font-heading font-bold text-[#1A1A1A]">{c.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{c.desc}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Featured products */}
        <section className="py-20 md:py-28 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-12">
              <div className="text-xs md:text-sm text-[#E31E24] font-bold uppercase tracking-widest mb-2">Produk Terpopuler</div>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1A1A1A]">Motor Viar Pilihan</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Temukan motor Viar yang sesuai kebutuhan Anda — dari adventure, niaga, hingga listrik ramah lingkungan.</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProductCard product={p} onDetail={setSelected} />
                </Reveal>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/products" className="btn-viar text-white px-7 py-3.5 rounded-full font-semibold inline-flex items-center gap-2">
                Lihat Semua Produk <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Parallax: Mengapa Viar */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div
            className="parallax-bg absolute inset-0"
            style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428477411_c687536c.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/85 to-[#E31E24]/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-white">
            <Reveal className="text-center mb-14">
              <div className="text-xs md:text-sm text-[#FFD700] font-bold uppercase tracking-widest mb-2">Mengapa Memilih Viar?</div>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl">Tangguh untuk Karya Anda</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Award, title: 'Kualitas Teruji', desc: 'Sertifikasi ISO 9001, dirakit di Semarang dengan standar internasional.' },
                { icon: Shield, title: 'Garansi Resmi', desc: 'Garansi mesin hingga 3 tahun. Suku cadang asli & layanan after-sales nasional.' },
                { icon: Truck, title: 'Kuat & Hemat', desc: 'Konsumsi BBM efisien, daya angkut besar, perawatan mudah & murah.' },
              ].map((f, i) => (
                <Reveal key={f.title} delay={i * 100}>
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition">
                    <div className="w-14 h-14 rounded-xl bg-[#E31E24] flex items-center justify-center mb-4">
                      <f.icon size={26} />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">{f.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-center">
              {[
                { v: 15, suffix: '+', l: 'Tahun Pengalaman' },
                { v: 8500, suffix: '+', l: 'Unit Terjual' },
                { v: 12, suffix: '', l: 'Model Tersedia' },
                { v: 98, suffix: '%', l: 'Kepuasan Pelanggan' },
              ].map((s) => (
                <Reveal key={s.l}>
                  <div>
                    <div className="font-heading font-black text-3xl md:text-5xl text-[#FFD700]">
                      <Counter end={s.v} suffix={s.suffix} />
                    </div>
                    <div className="text-sm text-white/80 mt-1">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 md:py-28 bg-gray-50 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-12">
              <div className="text-xs md:text-sm text-[#E31E24] font-bold uppercase tracking-widest mb-2">Kategori Produk</div>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1A1A1A]">Solusi untuk Setiap Kebutuhan</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { cat: 'Cross', title: 'Viar Cross Series', desc: 'Adventure & dual-sport untuk medan ekstrem.', img: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428297543_e0a72822.png', icon: Bike },
                { cat: 'Karya', title: 'Viar Karya Series', desc: 'Roda tiga andalan untuk usaha & logistik.', img: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428354142_eb555b47.jpg', icon: Truck },
                { cat: 'Listrik', title: 'Viar Electric', desc: 'Motor listrik ramah lingkungan & ekonomis.', img: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428408531_315cec25.jpg', icon: Zap },
              ].map((c, i) => (
                <Reveal key={c.cat} delay={i * 100}>
                  <Link to={`/products?cat=${c.cat}`} className="group relative block aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                    <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                      <c.icon size={28} className="mb-2 text-[#E31E24]" />
                      <div className="text-xs uppercase tracking-widest text-[#FFD700] font-bold mb-1">{c.cat}</div>
                      <h3 className="font-heading font-extrabold text-2xl mb-2">{c.title}</h3>
                      <p className="text-sm text-white/85 mb-3">{c.desc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#E31E24] group-hover:gap-2 transition-all">Jelajahi <ArrowRight size={16} /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimoni Parallax */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="parallax-bg absolute inset-0 blur-sm scale-110" style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428428552_8c00cd42.jpg)' }} />
          <div className="absolute inset-0 bg-[#1A1A1A]/85" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
            <Reveal>
              <div className="text-xs md:text-sm text-[#FFD700] font-bold uppercase tracking-widest mb-2">Testimoni Pelanggan</div>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-10">Apa Kata Mereka</h2>
            </Reveal>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 md:p-12 relative">
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: testi.rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>
              <p className="text-lg md:text-2xl font-heading font-medium leading-relaxed mb-6 italic">"{testi.quote}"</p>
              <div className="font-bold">{testi.name}</div>
              <div className="text-sm text-white/70">{testi.role}</div>

              <div className="flex justify-center gap-2 mt-8">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${i === tIdx ? 'w-8 bg-[#E31E24]' : 'w-3 bg-white/30'}`}
                    aria-label={`Testimoni ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={() => setTIdx((tIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-[#E31E24] flex items-center justify-center transition" aria-label="Sebelumnya"><ChevronLeft size={18} /></button>
              <button onClick={() => setTIdx((tIdx + 1) % TESTIMONIALS.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-[#E31E24] flex items-center justify-center transition" aria-label="Berikutnya"><ChevronRight size={18} /></button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 geo-pattern" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white">
            <Reveal>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-4">Siap Memiliki Motor Viar Anda?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">Tim sales kami siap membantu Anda memilih motor Viar yang sesuai kebutuhan. Konsultasi gratis & test ride tersedia di showroom Gading Serpong.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={waLink(COMPANY.whatsapp, 'Halo MDB, saya ingin konsultasi pembelian motor Viar.')}
                  target="_blank" rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2"
                >
                  <MessageCircle size={18} /> Konsultasi Gratis
                </a>
                <Link to="/contact" className="btn-viar text-white font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2">
                  Kunjungi Showroom <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </SiteLayout>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default AppLayout;
