import React, { useState } from 'react';
import { Search, Cog, Wrench, Zap, Package, Clock, MessageCircle, Loader2, ChevronDown } from 'lucide-react';
import SiteLayout from '@/components/viar/SiteLayout';
import PageHero from '@/components/viar/PageHero';
import Reveal from '@/components/viar/Reveal';
import { COMPANY, waLink } from '@/data/viarData';
import { toast } from 'sonner';

const CATEGORIES = [
  { icon: Cog, label: 'Mesin', desc: 'Piston, kopling, klep, knalpot' },
  { icon: Package, label: 'Body', desc: 'Fairing, jok, fender, cover' },
  { icon: Zap, label: 'Elektrikal', desc: 'CDI, lampu, aki, kabel' },
  { icon: Wrench, label: 'Aksesoris', desc: 'Box, handgrip, footstep, mirror' },
];

const FAQS = [
  { q: 'Apakah sparepart yang dijual original Viar?', a: 'Ya, seluruh sparepart yang kami sediakan adalah suku cadang asli (Original Equipment Manufacturer) dari Viar Motor Indonesia.' },
  { q: 'Berapa lama waktu servis berkala?', a: 'Servis berkala umumnya memerlukan waktu 1-2 jam. Untuk pekerjaan besar (turun mesin), waktu pengerjaan 1-3 hari tergantung tingkat kompleksitas.' },
  { q: 'Apakah bisa booking servis online?', a: 'Bisa. Hubungi WhatsApp bengkel kami di 0812-9948-1006 untuk booking jadwal servis.' },
  { q: 'Berapa biaya servis berkala?', a: 'Servis berkala mulai dari Rp 75.000 (servis ringan) hingga Rp 300.000 (servis besar) belum termasuk sparepart.' },
  { q: 'Apakah ada garansi sparepart?', a: 'Sparepart asli memiliki garansi 3-6 bulan tergantung jenis komponen. Pemasangan oleh teknisi resmi MDB juga termasuk garansi pengerjaan.' },
];

const SparepartPage: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ name: '', wa: '', model: '', part: '' });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.wa || !form.part) {
      toast.error('Lengkapi nama, WhatsApp, dan part yang dicari.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const msg = `Halo MDB Sparepart, saya ${form.name}.\nNo WA: ${form.wa}\nModel motor: ${form.model || '-'}\nPart yang dicari: ${form.part}`;
      window.open(waLink(COMPANY.whatsappSparepart, msg), '_blank');
      toast.success('Permintaan Anda dikirim ke WhatsApp Sparepart MDB.');
      setForm({ name: '', wa: '', model: '', part: '' });
      setLoading(false);
    }, 600);
  };

  return (
    <SiteLayout>
      <PageHero
        title="Sparepart & Bengkel"
        subtitle="Suku cadang asli Viar dan layanan bengkel resmi terpercaya."
        image="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428480551_658130e9.png"
        breadcrumb="Sparepart"
      />

      {/* Categories */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">Kategori Sparepart</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1A1A1A]">Suku Cadang Asli Viar</h2>
          </Reveal>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-10 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari part berdasarkan nama atau model motor..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {CATEGORIES.filter((c) => !search || c.label.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase())).map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <button className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all w-full text-left">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E31E24] to-[#B71C1C] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <c.icon size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-1">{c.label}</h3>
                  <p className="text-sm text-gray-500">{c.desc}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service info + Form */}
      <section className="py-16 md:py-20 bg-gray-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">Layanan Bengkel</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A1A1A] mb-6">Bengkel Resmi MDB</h2>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <Clock className="text-[#E31E24] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Jam Operasional</div>
                  <p className="text-sm text-gray-600">Senin–Sabtu: 08.00–17.00 WIB<br/>Minggu: 09.00–15.00 WIB</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Wrench className="text-[#E31E24] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Layanan Servis</div>
                  <p className="text-sm text-gray-600">Servis ringan, servis besar, ganti oli, tune-up, modifikasi.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 text-sm">
                <div className="bg-[#1A1A1A] text-white p-3 font-semibold">Jenis Layanan</div>
                <div className="bg-[#1A1A1A] text-white p-3 font-semibold text-right">Harga (mulai)</div>
                {[
                  ['Servis Ringan', 'Rp 75.000'],
                  ['Servis Berkala', 'Rp 150.000'],
                  ['Ganti Oli', 'Rp 50.000'],
                  ['Tune Up Mesin', 'Rp 200.000'],
                  ['Servis Besar', 'Rp 300.000'],
                ].map((row, i) => (
                  <React.Fragment key={i}>
                    <div className={`p-3 ${i % 2 ? 'bg-gray-50' : ''}`}>{row[0]}</div>
                    <div className={`p-3 text-right font-semibold ${i % 2 ? 'bg-gray-50' : ''}`}>{row[1]}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={submit} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A] mb-2">Request Sparepart</h3>
              <p className="text-sm text-gray-500 mb-6">Isi form berikut, tim sparepart akan menghubungi via WhatsApp.</p>
              <div className="space-y-4">
                <input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E31E24] outline-none" placeholder="Nama Lengkap *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E31E24] outline-none" placeholder="No. WhatsApp *" value={form.wa} onChange={(e) => setForm({ ...form, wa: e.target.value })} required />
                <input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E31E24] outline-none" placeholder="Model motor (misal: Cross X-250)" value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} />
                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E31E24] outline-none" placeholder="Part yang dicari *" rows={4} value={form.part} onChange={(e) => setForm({ ...form, part: e.target.value })} required />
                <button type="submit" disabled={loading} className="w-full btn-viar text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <MessageCircle size={18} />}
                  {loading ? 'Mengirim...' : 'Kirim via WhatsApp'}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-10">
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">FAQ</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A1A1A]">Pertanyaan Umum</h2>
          </Reveal>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition">
                    <span className="font-heading font-semibold text-[#1A1A1A]">{f.q}</span>
                    <ChevronDown size={20} className={`flex-shrink-0 transition-transform ${open === i ? 'rotate-180 text-[#E31E24]' : 'text-gray-400'}`} />
                  </button>
                  {open === i && (
                    <div className="px-5 pb-5 text-sm text-gray-600 animate-fade-in">{f.a}</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default SparepartPage;
