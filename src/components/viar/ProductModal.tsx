import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Product, formatRupiah, COMPANY, waLink } from '@/data/viarData';

interface Props {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slide-up grid md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-gray-100 to-gray-200">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <button onClick={onClose} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow">
            <X size={18} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="text-xs text-[#E31E24] font-semibold uppercase tracking-wide mb-1">{product.category}</div>
          <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A] mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{product.shortDesc}</p>
          <div className="text-3xl font-heading font-extrabold text-[#E31E24] mb-5">{formatRupiah(product.price)}</div>
          <div className="space-y-2 mb-6">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between border-b border-gray-100 py-2 text-sm">
                <span className="text-gray-500">{s.label}</span>
                <span className="font-semibold text-[#1A1A1A]">{s.value}</span>
              </div>
            ))}
          </div>
          <a
            href={waLink(COMPANY.whatsapp, `Halo MDB, saya ingin info lengkap & test ride ${product.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> Tanya via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
