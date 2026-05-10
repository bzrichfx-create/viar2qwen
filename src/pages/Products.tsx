import React, { useMemo, useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import SiteLayout from '@/components/viar/SiteLayout';
import PageHero from '@/components/viar/PageHero';
import ProductCard from '@/components/viar/ProductCard';
import ProductModal from '@/components/viar/ProductModal';
import Reveal from '@/components/viar/Reveal';
import { PRODUCTS, Product } from '@/data/viarData';

const CATEGORIES = ['Semua', 'Cross', 'Karya', 'Listrik'] as const;
const PRICES = [
  { label: 'Semua Harga', min: 0, max: Infinity },
  { label: '< 20 Juta', min: 0, max: 20_000_000 },
  { label: '20 - 25 Juta', min: 20_000_000, max: 25_000_000 },
  { label: '25 - 30 Juta', min: 25_000_000, max: 30_000_000 },
  { label: '> 30 Juta', min: 30_000_000, max: Infinity },
];

const ProductsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState<typeof CATEGORIES[number]>('Semua');
  const [priceIdx, setPriceIdx] = useState(0);
  const [sort, setSort] = useState<'feat' | 'low' | 'high'>('feat');
  const [selected, setSelected] = useState<Product | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let r = PRODUCTS.filter((p) => {
      if (cat !== 'Semua' && p.category !== cat) return false;
      const pr = PRICES[priceIdx];
      if (p.price < pr.min || p.price > pr.max) return false;
      if (search && !`${p.name} ${p.shortDesc}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    if (sort === 'low') r = [...r].sort((a, b) => a.price - b.price);
    if (sort === 'high') r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [search, cat, priceIdx, sort]);

  // Initial cat from URL
  React.useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const c = p.get('cat');
    if (c && (CATEGORIES as readonly string[]).includes(c)) setCat(c as any);
  }, []);

  return (
    <SiteLayout>
      <PageHero
        title="Katalog Produk"
        subtitle="Jelajahi seluruh model Viar Motor: Cross, Karya, dan Listrik."
        image="https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428428552_8c00cd42.jpg"
        breadcrumb="Produk"
      />

      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Search bar */}
          <div className="flex flex-col md:flex-row gap-3 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari motor Viar..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              className="px-4 py-3 rounded-full border border-gray-200 focus:border-[#E31E24] outline-none bg-white"
            >
              <option value="feat">Featured</option>
              <option value="low">Harga: Rendah ke Tinggi</option>
              <option value="high">Harga: Tinggi ke Rendah</option>
            </select>
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="lg:hidden px-4 py-3 rounded-full border border-gray-200 inline-flex items-center justify-center gap-2 font-semibold text-sm"
            >
              <Filter size={16} /> Filter
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
            {/* Sidebar */}
            <aside className={`${filterOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white border border-gray-100 rounded-2xl p-5 sticky top-24">
                <div className="flex items-center justify-between mb-4 lg:hidden">
                  <h3 className="font-heading font-bold">Filter</h3>
                  <button onClick={() => setFilterOpen(false)}><X size={18} /></button>
                </div>
                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-sm mb-3">Kategori</h4>
                  <div className="space-y-2">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCat(c)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${cat === c ? 'bg-[#E31E24] text-white font-semibold' : 'hover:bg-gray-100 text-gray-700'}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-sm mb-3">Rentang Harga</h4>
                  <div className="space-y-2">
                    {PRICES.map((p, i) => (
                      <button
                        key={p.label}
                        onClick={() => setPriceIdx(i)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${priceIdx === i ? 'bg-[#E31E24] text-white font-semibold' : 'hover:bg-gray-100 text-gray-700'}`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => { setCat('Semua'); setPriceIdx(0); setSearch(''); setSort('feat'); }}
                  className="w-full text-sm font-semibold text-[#E31E24] hover:underline"
                >
                  Reset Filter
                </button>
              </div>
            </aside>

            {/* Grid */}
            <div>
              <div className="text-sm text-gray-500 mb-4">Menampilkan <strong className="text-[#1A1A1A]">{filtered.length}</strong> produk</div>
              {filtered.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-2xl">
                  <p className="text-gray-500">Tidak ada produk ditemukan. Coba ubah filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((p, i) => (
                    <Reveal key={p.id} delay={i * 60}>
                      <ProductCard product={p} onDetail={setSelected} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </SiteLayout>
  );
};

export default ProductsPage;
