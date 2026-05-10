import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/data/viarData';
import { toast } from 'sonner';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/.+@.+\..+/)) {
      toast.error('Masukkan email valid');
      return;
    }
    setLoading(true);
    try {
      await fetch('https://famous.ai/api/crm/6a00a8e071c3194ba26682b8/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'footer-signup',
          tags: ['newsletter', 'viar-mdb'],
        }),
      });
      toast.success('Terima kasih! Anda akan menerima update promo Viar MDB.');
      setEmail('');
    } catch (err) {
      toast.error('Gagal berlangganan, coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E31E24] to-[#B71C1C] flex items-center justify-center">
                <span className="text-white font-black text-2xl font-heading">V</span>
              </div>
              <div>
                <div className="font-heading font-extrabold text-white">Viar MDB</div>
                <div className="text-xs text-gray-400">{COMPANY.tagline}</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {COMPANY.name} — Dealer resmi Viar Motor untuk wilayah Tangerang & Jabodetabek.
              Tangguh untuk Karya Anda.
            </p>
            <div className="flex gap-3 mt-5">
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E31E24] flex items-center justify-center transition">
                <Instagram size={16} />
              </a>
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E31E24] flex items-center justify-center transition">
                <Facebook size={16} />
              </a>
              <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E31E24] flex items-center justify-center transition">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-[#E31E24] transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#E31E24] flex-shrink-0 mt-0.5" />
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-[#E31E24] flex-shrink-0 mt-0.5" />
                <span>Office: {COMPANY.phoneOffice}<br/>Bengkel: {COMPANY.phoneBengkel}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-[#E31E24] flex-shrink-0 mt-0.5" />
                <span>{COMPANY.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Berlangganan untuk dapatkan info promo & event Viar MDB terbaru.
            </p>
            <form onSubmit={subscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda"
                className="w-full px-4 py-2.5 rounded-md bg-white/10 border border-white/10 focus:border-[#E31E24] focus:outline-none text-sm text-white placeholder-gray-500"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-viar text-white py-2.5 rounded-md font-semibold text-sm flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={14} />}
                {loading ? 'Mengirim...' : 'Berlangganan'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
