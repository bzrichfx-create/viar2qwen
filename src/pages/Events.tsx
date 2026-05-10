import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Send, Loader2 } from 'lucide-react';
import SiteLayout from '@/components/viar/SiteLayout';
import PageHero from '@/components/viar/PageHero';
import Reveal from '@/components/viar/Reveal';
import { EVENTS } from '@/data/viarData';
import { toast } from 'sonner';

const useCountdown = (target: string) => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now();
      if (diff <= 0) {
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTime({ d, h, m, s });
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [target]);
  return time;
};

const formatDate = (s: string) => new Date(s).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

const NextEventCountdown: React.FC<{ date: string }> = ({ date }) => {
  const t = useCountdown(date);
  const items = [
    { l: 'Hari', v: t.d },
    { l: 'Jam', v: t.h },
    { l: 'Menit', v: t.m },
    { l: 'Detik', v: t.s },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-3">
      {items.map((i) => (
        <div key={i.l} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-3 md:p-4 text-center">
          <div className="font-heading font-extrabold text-2xl md:text-4xl text-[#FFD700]">{String(i.v).padStart(2, '0')}</div>
          <div className="text-[10px] md:text-xs text-white/80 uppercase tracking-widest">{i.l}</div>
        </div>
      ))}
    </div>
  );
};

const EventsPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const upcoming = EVENTS.filter((e) => e.upcoming).sort((a, b) => a.date.localeCompare(b.date));
  const past = EVENTS.filter((e) => !e.upcoming);
  const next = upcoming[0];

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/.+@.+\..+/)) { toast.error('Email tidak valid'); return; }
    setLoading(true);
    try {
      await fetch('https://famous.ai/api/crm/6a00a8e071c3194ba26682b8/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'events-newsletter', tags: ['events', 'viar-mdb'] }),
      });
      toast.success('Berhasil! Anda akan dapat info event terbaru.');
      setEmail('');
    } catch { toast.error('Gagal, coba lagi.'); }
    finally { setLoading(false); }
  };

  return (
    <SiteLayout>
      <PageHero
        title="Event & Promo"
        subtitle="Ikuti event, promo, dan gathering komunitas Viar bersama MDB."
        image="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428499537_6b504273.jpg"
        breadcrumb="Event"
      />

      {/* Next event countdown */}
      {next && (
        <section className="relative py-16 md:py-20 overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${next.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#E31E24]/40" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-white text-center">
            <Reveal>
              <div className="text-xs text-[#FFD700] font-bold uppercase tracking-widest mb-2">Event Mendatang</div>
              <h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-3">{next.title}</h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80 mb-8">
                <span className="inline-flex items-center gap-1"><Calendar size={16} /> {formatDate(next.date)}</span>
                <span className="inline-flex items-center gap-1"><MapPin size={16} /> {next.location}</span>
              </div>
              <NextEventCountdown date={next.date} />
            </Reveal>
          </div>
        </section>
      )}

      {/* Upcoming list */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">Akan Datang</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1A1A1A]">Event & Promo Terbaru</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {upcoming.map((ev, i) => (
              <Reveal key={ev.id} delay={i * 80}>
                <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="inline-block bg-[#E31E24]/10 text-[#E31E24] text-xs font-bold uppercase px-2 py-1 rounded mb-3">{formatDate(ev.date)}</span>
                    <h3 className="font-heading font-bold text-xl text-[#1A1A1A] mb-2">{ev.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{ev.desc}</p>
                    <div className="text-xs text-gray-500 inline-flex items-center gap-1"><MapPin size={14} /> {ev.location}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past gallery */}
      <section className="py-16 md:py-20 bg-gray-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="text-xs text-[#E31E24] font-bold uppercase tracking-widest mb-2">Galeri Event</div>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1A1A1A]">Event Sebelumnya</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...past, ...past].map((ev, i) => (
              <Reveal key={`${ev.id}-${i}`} delay={i * 50}>
                <div className="group relative aspect-square overflow-hidden rounded-xl shadow-sm">
                  <img src={ev.image} loading="lazy" alt={ev.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition">
                    <div className="font-heading font-bold text-sm">{ev.title}</div>
                    <div className="text-xs text-white/80">{formatDate(ev.date)}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-[#E31E24] to-[#B71C1C] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-heading font-extrabold text-2xl md:text-4xl mb-3">Jangan Lewatkan Promo Berikutnya</h2>
            <p className="text-white/90 mb-6">Subscribe newsletter MDB untuk update event & promo eksklusif Viar.</p>
            <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="email@anda.com" required
                className="flex-1 px-5 py-3 rounded-full text-[#1A1A1A] outline-none focus:ring-4 focus:ring-white/30"
              />
              <button type="submit" disabled={loading} className="bg-[#1A1A1A] hover:bg-black text-white font-semibold px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition">
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {loading ? 'Mengirim...' : 'Subscribe'}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default EventsPage;
