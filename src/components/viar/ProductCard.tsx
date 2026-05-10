import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Zap, CalendarCheck } from 'lucide-react';
import { Product, formatRupiah, COMPANY, waLink } from '@/data/viarData';
import { TEST_RIDE_BOOKING_URL } from '@/data/booking';

interface Props {
  product: Product;
  onDetail?: (p: Product) => void;
}

const badgeStyles: Record<string, string> = {
  'New': 'bg-[#FFD700] text-[#1A1A1A]',
  'Best Seller': 'bg-[#E31E24] text-white',
  'Promo': 'bg-[#1A1A1A] text-white',
};

const ProductCard: React.FC<Props> = ({ product, onDetail }) => {
  const [hover, setHover] = useState(false);
  const showAlt = hover && product.gallery.length > 1;
  const img = showAlt ? product.gallery[1] : product.image;

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${badgeStyles[product.badge]}`}>
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#1A1A1A] text-xs font-semibold px-2.5 py-1 rounded-full">
          {product.category === 'Listrik' ? (
            <span className="inline-flex items-center gap-1"><Zap size={12} className="text-[#E31E24]" /> EV</span>
          ) : (
            `${product.cc}cc`
          )}
        </span>
        {/* Test Ride floating CTA */}
        <a
          href={TEST_RIDE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 bg-[#FFD700] hover:bg-[#FFC700] text-[#1A1A1A] text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
          aria-label={`Book test ride ${product.name}`}
        >
          <CalendarCheck size={12} /> Test Ride
        </a>
        {/* Thumbnail strip */}
        {product.gallery.length > 1 && (
          <div className="absolute bottom-3 left-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition">
            {product.gallery.slice(0, 3).map((g, idx) => (
              <div key={idx} className="w-8 h-8 rounded border-2 border-white overflow-hidden shadow">
                <img src={g} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="text-xs text-[#E31E24] font-semibold uppercase tracking-wide mb-1">{product.category}</div>
        <h3 className="font-heading font-bold text-lg text-[#1A1A1A] mb-1 leading-tight">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.shortDesc}</p>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-heading font-extrabold text-[#E31E24]">{formatRupiah(product.price)}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onDetail?.(product)}
            className="bg-[#1A1A1A] hover:bg-black text-white text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1 transition"
          >
            Detail <ArrowRight size={12} />
          </button>
          <a
            href={TEST_RIDE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD700] hover:bg-[#FFC700] text-[#1A1A1A] text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1 transition"
            title="Book test ride"
          >
            <CalendarCheck size={12} /> Test Ride
          </a>
          <a
            href={waLink(COMPANY.whatsapp, `Halo MDB, saya tertarik dengan ${product.name} (${formatRupiah(product.price)}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1da851] text-white text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-1 transition"
          >
            <MessageCircle size={12} /> WA
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
