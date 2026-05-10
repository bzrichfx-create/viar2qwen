import React from 'react';
import { Award, Target, Eye, Users, CheckCircle2 } from 'lucide-react';
import SiteLayout from '@/components/viar/SiteLayout';
import PageHero from '@/components/viar/PageHero';
import Reveal from '@/components/viar/Reveal';
import Counter from '@/components/viar/Counter';

const TIMELINE = [
  { year: '2010', title: 'Pendirian PT. Multi Dimensi Baru', desc: 'Memulai bisnis sebagai dealer motor dengan komitmen layanan terbaik.' },
  { year: '2013', title: 'Kerjasama Resmi dengan Viar Motor', desc: 'Diangkat menjadi dealer eksklusif Viar Motor untuk wilayah Tangerang.' },
  { year: '2017', title: 'Pembukaan Showroom Gading Serpong', desc: 'Showroom premium di Ruko Paramount Sparks dengan fasilitas lengkap.' },
  { year: '2020', title: 'Ekspansi Layanan Bengkel & Sparepart', desc: 'Bengkel resmi dengan teknisi tersertifikasi & stok suku cadang lengkap.' },
  { year: '2024', title: 'Penjualan 8.500+ Unit', desc: 'Mencapai milestone penjualan unit Viar dan kepuasan pelanggan 98%.' },
];

const AboutPage: React.FC = () => {
  return (
    <SiteLayout>
      <PageHero
        title="Tentang Kami"
        subtitle="Mengenal lebih dekat PT. Multi Dimensi Baru — dealer eksklusif Viar Motor."
        image="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428432890_9233c87d.png"
        breadcrumb="Tentang"
      />

      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">Profil Perusahaan</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1A1A1A] mb-5">Membawa Viar Lebih Dekat ke Tangerang</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>PT. Multi Dimensi Baru</strong> adalah dealer resmi & eksklusif Viar Motor untuk wilayah Tangerang dan Jabodetabek. Sejak 2013, kami berkomitmen menyediakan motor Viar berkualitas dengan layanan after-sales terbaik.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Berlokasi strategis di Ruko Paramount Sparks Gading Serpong, showroom kami menyediakan seluruh line-up Viar — dari Cross adventure series, Karya niaga, hingga line-up motor listrik Viar EV.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { v: 15, suf: '+', l: 'Tahun' },
                { v: 8500, suf: '+', l: 'Unit' },
                { v: 98, suf: '%', l: 'Puas' },
              ].map((s) => (
                <div key={s.l} className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm">
                  <div className="font-heading font-extrabold text-2xl md:text-3xl text-[#E31E24]"><Counter end={s.v} suffix={s.suf} /></div>
                  <div className="text-xs text-gray-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428428552_8c00cd42.jpg" alt="Showroom" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg" />
              <div className="flex flex-col gap-4">
                <img src="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428432890_9233c87d.png" alt="Showroom interior" className="w-full aspect-square object-cover rounded-2xl shadow-lg" />
                <img src="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428297543_e0a72822.png" alt="Display" className="w-full aspect-square object-cover rounded-2xl shadow-lg" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 h-full">
              <div className="w-14 h-14 rounded-xl bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center mb-5">
                <Eye size={26} />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A] mb-3">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi dealer motor Viar terdepan di Indonesia yang dipercaya pelanggan dengan layanan profesional, produk berkualitas, dan komitmen jangka panjang.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 h-full">
              <div className="w-14 h-14 rounded-xl bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center mb-5">
                <Target size={26} />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A] mb-3">Misi Kami</h3>
              <ul className="space-y-2 text-gray-600">
                {['Menyediakan produk Viar berkualitas dengan harga kompetitif', 'Memberikan layanan purna jual yang cepat & ramah', 'Mengembangkan komunitas Viar di Indonesia', 'Berkontribusi pada mobilitas berkelanjutan via line-up listrik'].map((m) => (
                  <li key={m} className="flex gap-2"><CheckCircle2 size={18} className="text-[#E31E24] flex-shrink-0 mt-0.5" /><span>{m}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">Perjalanan Kami</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1A1A1A]">Sejarah Singkat MDB</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E31E24] via-[#E31E24]/50 to-transparent md:-translate-x-1/2" />
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 mb-10 ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}>
                  <div className={`${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
                      <div className="text-[#E31E24] font-heading font-extrabold text-2xl mb-1">{t.year}</div>
                      <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-2">{t.title}</h3>
                      <p className="text-sm text-gray-600">{t.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E31E24] ring-4 ring-white shadow" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 md:py-20 bg-[#1A1A1A] text-white px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="text-xs text-[#FFD700] font-bold uppercase tracking-widest mb-2">Sertifikasi & Kemitraan</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-10">Dipercaya & Terverifikasi</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Award, label: 'Dealer Resmi Viar' },
                { icon: CheckCircle2, label: 'ISO 9001:2015' },
                { icon: Users, label: 'Komunitas Viar' },
                { icon: Award, label: 'Best Dealer 2023' },
              ].map((b) => (
                <div key={b.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                  <b.icon size={32} className="mx-auto text-[#E31E24] mb-3" />
                  <div className="font-heading font-semibold text-sm">{b.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default AboutPage;
