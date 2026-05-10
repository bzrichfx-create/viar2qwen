import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Loader2, Instagram, Facebook, Youtube, Clock, Wrench } from 'lucide-react';
import SiteLayout from '@/components/viar/SiteLayout';
import PageHero from '@/components/viar/PageHero';
import Reveal from '@/components/viar/Reveal';
import { COMPANY, waLink } from '@/data/viarData';
import { toast } from 'sonner';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', wa: '', need: 'Pembelian Motor', message: '' });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Lengkapi nama, email & pesan');
      return;
    }
    setLoading(true);
    try {
      await fetch('https://famous.ai/api/crm/6a00a8e071c3194ba26682b8/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          source: 'contact-form',
          tags: ['contact', 'viar-mdb', form.need.toLowerCase().replace(/\s+/g, '-')],
        }),
      });
      toast.success('Pesan Anda terkirim! Tim kami akan menghubungi segera.');
      setForm({ name: '', email: '', wa: '', need: 'Pembelian Motor', message: '' });
    } catch {
      toast.error('Gagal mengirim, coba lagi.');
    } finally { setLoading(false); }
  };

  return (
    <SiteLayout>
      <PageHero
        title="Hubungi Kami"
        subtitle="Tim MDB siap membantu Anda. Kunjungi showroom atau hubungi via channel pilihan."
        image="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428432890_9233c87d.png"
        breadcrumb="Kontak"
      />

      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Info cards */}
          <Reveal>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
              <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center mb-4">
                <MapPin size={22} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-2">Alamat Showroom</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">{COMPANY.address}</p>
              <p className="text-xs text-gray-500 italic">{COMPANY.addressNote}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
              <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center mb-4">
                <Phone size={22} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-2">Telepon</h3>
              <a href={`tel:${COMPANY.phoneOffice}`} className="block text-sm text-gray-600 hover:text-[#E31E24]">
                <strong>Office:</strong> {COMPANY.phoneOffice}
              </a>
              <a href={`tel:${COMPANY.phoneBengkel}`} className="block text-sm text-gray-600 hover:text-[#E31E24] mt-1">
                <strong>Bengkel:</strong> {COMPANY.phoneBengkel}
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                <MessageCircle size={22} />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-2">WhatsApp</h3>
              <a href={waLink(COMPANY.whatsapp, 'Halo MDB')} target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#E31E24]">
                <strong>Sales:</strong> {COMPANY.whatsappDisplay}
              </a>
              <a href={waLink(COMPANY.whatsappSparepart, 'Halo MDB Sparepart')} target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#E31E24] mt-1">
                <strong>Sparepart:</strong> {COMPANY.whatsappSparepartDisplay}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form + Map */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mt-10">
          <Reveal>
            <form onSubmit={submit} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="font-heading font-extrabold text-2xl text-[#1A1A1A] mb-2">Kirim Pesan</h2>
              <p className="text-sm text-gray-500 mb-6">Tim kami akan merespon dalam 1×24 jam pada hari kerja.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input className="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E31E24] outline-none" placeholder="Nama Lengkap *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <input type="email" className="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E31E24] outline-none" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input className="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E31E24] outline-none" placeholder="No. WhatsApp" value={form.wa} onChange={(e) => setForm({ ...form, wa: e.target.value })} />
                <select className="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E31E24] outline-none bg-white" value={form.need} onChange={(e) => setForm({ ...form, need: e.target.value })}>
                  <option>Pembelian Motor</option>
                  <option>Servis & Bengkel</option>
                  <option>Sparepart</option>
                  <option>Modifikasi</option>
                  <option>Test Ride</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E31E24] outline-none mb-4" rows={5} placeholder="Pesan *" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              <button type="submit" disabled={loading} className="w-full btn-viar text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
                {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {loading ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col">
              <div className="aspect-[4/3] bg-gray-100">
                <iframe
                  title="Peta Lokasi MDB"
                  src="https://www.google.com/maps?q=Paramount%20Sparks%20Gading%20Serpong&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-3">Jam Operasional</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><Clock size={16} className="text-[#E31E24]" /> Senin–Sabtu: 09.00–18.00 WIB</li>
                  <li className="flex items-center gap-2"><Clock size={16} className="text-[#E31E24]" /> Minggu: 10.00–16.00 WIB</li>
                  <li className="flex items-center gap-2"><Wrench size={16} className="text-[#E31E24]" /> Bengkel: Senin–Sabtu 08.00–17.00</li>
                  <li className="flex items-center gap-2"><Mail size={16} className="text-[#E31E24]" /> {COMPANY.email}</li>
                </ul>
                <div className="mt-5 flex gap-2">
                  <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#E31E24] hover:text-white flex items-center justify-center transition"><Instagram size={16} /></a>
                  <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#E31E24] hover:text-white flex items-center justify-center transition"><Facebook size={16} /></a>
                  <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#E31E24] hover:text-white flex items-center justify-center transition"><Youtube size={16} /></a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
