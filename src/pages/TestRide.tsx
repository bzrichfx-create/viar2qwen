import React from 'react';
import { CalendarCheck, MapPin, Clock, Shield, FileCheck, UserCheck, ArrowRight } from 'lucide-react';
import SiteLayout from '@/components/viar/SiteLayout';
import PageHero from '@/components/viar/PageHero';
import Reveal from '@/components/viar/Reveal';
import { TEST_RIDE_BOOKING_URL } from '@/data/booking';
import { COMPANY } from '@/data/viarData';

const STEPS = [
  { icon: CalendarCheck, title: '1. Pilih Jadwal', desc: 'Booking slot test ride yang sesuai jadwal Anda lewat halaman booking online kami.' },
  { icon: FileCheck, title: '2. Siapkan Dokumen', desc: 'Bawa SIM C aktif & KTP. Cukup itu, kami yang siapkan motornya.' },
  { icon: UserCheck, title: '3. Briefing Singkat', desc: 'Tim sales menjelaskan fitur motor & rute test ride aman di sekitar showroom.' },
  { icon: ArrowRight, title: '4. Test Ride!', desc: 'Rasakan langsung performa Viar Cross, Karya, atau Listrik. Durasi 15–30 menit.' },
];

const TERMS = [
  'Pengendara minimal berusia 17 tahun dan memiliki SIM C yang masih berlaku.',
  'Wajib menggunakan helm & jaket (kami sediakan jika perlu).',
  'Test ride dilakukan di rute yang telah ditentukan di sekitar showroom MDB Gading Serpong.',
  'Setiap pengendara hanya boleh test ride 1 unit per sesi (maks. 30 menit).',
  'Kerusakan akibat kelalaian pengendara menjadi tanggung jawab pengendara.',
  'Booking wajib dikonfirmasi minimal H-1 untuk memastikan ketersediaan unit.',
];

const TestRidePage: React.FC = () => {
  return (
    <SiteLayout>
      <PageHero
        title="Booking Test Ride"
        subtitle="Rasakan langsung tangguhnya motor Viar — gratis, tanpa kewajiban beli."
        image="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428270556_9bf1949b.jpg"
        breadcrumb="Test Ride"
      />

      {/* Intro + CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">Test Ride Gratis</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1A1A1A] mb-5 leading-tight">
              Coba Sebelum Beli — <span className="text-[#E31E24]">100% Gratis</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Tidak yakin model Viar mana yang paling cocok untuk Anda? Booking test ride gratis di showroom MDB Gading Serpong dan rasakan langsung performa motor Viar pilihan Anda.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tersedia untuk seluruh line-up: <strong>Viar Cross</strong> (adventure), <strong>Viar Karya</strong> (niaga roda tiga), dan <strong>Viar Electric</strong> (motor listrik).
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={TEST_RIDE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-viar text-white font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-xl"
              >
                <CalendarCheck size={18} /> Booking Test Ride Sekarang
              </a>
              <a
                href={`tel:${COMPANY.phoneOffice}`}
                className="bg-white border border-gray-200 hover:border-[#E31E24] text-[#1A1A1A] font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition"
              >
                Tanya Showroom
              </a>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Clock className="mx-auto text-[#E31E24] mb-2" size={22} />
                <div className="text-xs text-gray-500">Durasi</div>
                <div className="font-heading font-bold text-sm text-[#1A1A1A]">15–30 mnt</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Shield className="mx-auto text-[#E31E24] mb-2" size={22} />
                <div className="text-xs text-gray-500">Asuransi</div>
                <div className="font-heading font-bold text-sm text-[#1A1A1A]">Tercover</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <MapPin className="mx-auto text-[#E31E24] mb-2" size={22} />
                <div className="text-xs text-gray-500">Lokasi</div>
                <div className="font-heading font-bold text-sm text-[#1A1A1A]">Showroom</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428270989_0378a1ef.jpg" alt="Test ride Viar Cross" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg" />
              <div className="flex flex-col gap-4">
                <img src="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428301484_f13052bc.png" alt="Viar New Cross" className="w-full aspect-square object-cover rounded-2xl shadow-lg" />
                <img src="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428408531_315cec25.jpg" alt="Viar Electric" className="w-full aspect-square object-cover rounded-2xl shadow-lg" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20 bg-gray-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">Cara Booking</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1A1A1A]">4 Langkah Mudah</h2>
            <p className="text-gray-600 mt-3">Dari klik booking sampai naik motor — total cuma butuh waktu kurang dari 24 jam.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E31E24] to-[#B71C1C] text-white flex items-center justify-center mb-4">
                    <s.icon size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">Syarat & Ketentuan</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A1A1A]">Hal yang Perlu Anda Tahu</h2>
          </Reveal>
          <Reveal>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
              <ul className="space-y-3">
                {TERMS.map((t, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    <span className="text-sm md:text-base leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 geo-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center text-white">
          <Reveal>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-4">Siap Coba Tangguhnya Viar?</h2>
            <p className="text-white/80 mb-8">Pilih slot waktu yang Anda mau — kami siapkan motornya.</p>
            <a
              href={TEST_RIDE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-viar text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-2xl text-lg"
            >
              <CalendarCheck size={20} /> Booking Test Ride
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default TestRidePage;
