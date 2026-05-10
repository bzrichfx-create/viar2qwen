// Viar Motor product & content data

export const COMPANY = {
  name: 'PT. Multi Dimensi Baru',
  tagline: 'Dealer Exclusive Viar Motor',
  slogan: 'Tangguh untuk Karya Anda',
  address: 'Ruko Paramount Sparks, Blok B No. 01, Jl. Boulevard Raya Gading Serpong No.1, Kelapa Dua, Tangerang, Banten 15810',
  addressNote: 'Setelah Summarecon Mall Serpong & Masjid Asmaul Husna',
  phoneOffice: '(021) 2901-5232',
  phoneBengkel: '(021) 2901-5233',
  whatsapp: '6281299481006',
  whatsappDisplay: '0812-9948-1006',
  whatsappSparepart: '6287860689533',
  whatsappSparepartDisplay: '0878-6068-9533',
  website: 'www.viarptmultidimensibaru.com',
  email: 'info@viarptmultidimensibaru.com',
  social: {
    instagram: 'https://instagram.com/viarmdb',
    facebook: 'https://facebook.com/viarmdb',
    youtube: 'https://youtube.com/@viarmdb',
  },
};

export const HERO_SLIDES = [
  { id: 1, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428270556_9bf1949b.jpg', title: 'Viar Cross X-250', subtitle: 'Tangguh Menaklukkan Segala Medan', cta: 'Lihat Spesifikasi' },
  { id: 2, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428270989_0378a1ef.jpg', title: 'New Cross X150', subtitle: 'Dual Sport Ringan & Bertenaga', cta: 'Coba Test Ride' },
  { id: 3, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428276960_4cf3387c.png', title: 'Viar Karya Series', subtitle: 'Solusi Produktivitas Usaha Anda', cta: 'Konsultasi Gratis' },
  { id: 4, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428270781_4b81e99a.jpg', title: 'Viar Listrik', subtitle: 'Ramah Lingkungan, Hemat Energi', cta: 'Pelajari Lebih Lanjut' },
];

export type Product = {
  id: number;
  name: string;
  category: 'Cross' | 'Karya' | 'Listrik';
  price: number;
  cc: number;
  badge?: 'New' | 'Best Seller' | 'Promo';
  image: string;
  gallery: string[];
  specs: { label: string; value: string }[];
  shortDesc: string;
};

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Viar Cross X-250', category: 'Cross', price: 32500000, cc: 250, badge: 'Best Seller',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428297543_e0a72822.png',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428297543_e0a72822.png', 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428295998_7301c7b8.jpg'],
    specs: [{ label: 'Mesin', value: '250cc 4-Stroke' }, { label: 'Tenaga', value: '21 HP' }, { label: 'Transmisi', value: '5-Speed Manual' }, { label: 'Kapasitas BBM', value: '7.5 L' }],
    shortDesc: 'Motor adventure tangguh dengan mesin 250cc bertenaga.' },
  { id: 2, name: 'New Cross X150', category: 'Cross', price: 21900000, cc: 150, badge: 'New',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428301484_f13052bc.png',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428301484_f13052bc.png', 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428305028_e93b8298.png'],
    specs: [{ label: 'Mesin', value: '150cc SOHC' }, { label: 'Tenaga', value: '13.6 HP' }, { label: 'Transmisi', value: '5-Speed Manual' }, { label: 'Kapasitas BBM', value: '6 L' }],
    shortDesc: 'Dual sport ringan, lincah untuk on-road & off-road.' },
  { id: 3, name: 'Viar Cross 200Z', category: 'Cross', price: 27500000, cc: 200, badge: 'Promo',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428296721_a4da7ade.jpg',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428296721_a4da7ade.jpg'],
    specs: [{ label: 'Mesin', value: '200cc 4-Stroke' }, { label: 'Tenaga', value: '17 HP' }, { label: 'Transmisi', value: '5-Speed Manual' }, { label: 'Kapasitas BBM', value: '7 L' }],
    shortDesc: 'Performa seimbang untuk petualangan jangka panjang.' },
  { id: 4, name: 'Viar Cross XR', category: 'Cross', price: 25800000, cc: 150,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428329154_52e0a30d.png',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428329154_52e0a30d.png'],
    specs: [{ label: 'Mesin', value: '150cc 4-Stroke' }, { label: 'Tenaga', value: '14 HP' }, { label: 'Transmisi', value: '5-Speed Manual' }, { label: 'Kapasitas BBM', value: '6.5 L' }],
    shortDesc: 'Trail bike dengan desain agresif dan handling presisi.' },
  { id: 5, name: 'Viar Karya BIT', category: 'Karya', price: 23500000, cc: 200, badge: 'Best Seller',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428354142_eb555b47.jpg',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428354142_eb555b47.jpg'],
    specs: [{ label: 'Mesin', value: '200cc OHV' }, { label: 'Kapasitas Muat', value: '500 kg' }, { label: 'Bak', value: '160 x 120 cm' }, { label: 'Transmisi', value: '4-Speed + Reverse' }],
    shortDesc: 'Kendaraan niaga 3 roda untuk usaha & logistik.' },
  { id: 6, name: 'Viar Karya 100', category: 'Karya', price: 19900000, cc: 100,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428355920_578f94fb.jpg',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428355920_578f94fb.jpg'],
    specs: [{ label: 'Mesin', value: '100cc' }, { label: 'Kapasitas Muat', value: '300 kg' }, { label: 'Bak', value: '140 x 100 cm' }, { label: 'Transmisi', value: '4-Speed + Reverse' }],
    shortDesc: 'Roda tiga ekonomis untuk usaha kecil-menengah.' },
  { id: 7, name: 'Viar Karya 150L', category: 'Karya', price: 22500000, cc: 150, badge: 'Promo',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428392633_9a1ae3b2.png',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428392633_9a1ae3b2.png'],
    specs: [{ label: 'Mesin', value: '150cc' }, { label: 'Kapasitas Muat', value: '400 kg' }, { label: 'Bak', value: '150 x 110 cm' }, { label: 'Transmisi', value: '4-Speed + Reverse' }],
    shortDesc: 'Daya angkut besar dengan konsumsi BBM efisien.' },
  { id: 8, name: 'Viar Q1 Electric', category: 'Listrik', price: 17500000, cc: 0, badge: 'New',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428408531_315cec25.jpg',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428408531_315cec25.jpg'],
    specs: [{ label: 'Motor', value: '800W BLDC' }, { label: 'Baterai', value: '60V 20Ah Lithium' }, { label: 'Jarak Tempuh', value: '60 km' }, { label: 'Top Speed', value: '60 km/h' }],
    shortDesc: 'Skuter listrik perkotaan, hemat & ramah lingkungan.' },
  { id: 9, name: 'Viar N1 Pro', category: 'Listrik', price: 19900000, cc: 0,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428410655_ec176f99.jpg',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428410655_ec176f99.jpg'],
    specs: [{ label: 'Motor', value: '1200W BLDC' }, { label: 'Baterai', value: '72V 30Ah Lithium' }, { label: 'Jarak Tempuh', value: '90 km' }, { label: 'Top Speed', value: '70 km/h' }],
    shortDesc: 'EV premium dengan baterai swap & smart dashboard.' },
  { id: 10, name: 'Viar E-Cross', category: 'Listrik', price: 24900000, cc: 0, badge: 'New',
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428411489_14838615.jpg',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428411489_14838615.jpg'],
    specs: [{ label: 'Motor', value: '2000W' }, { label: 'Baterai', value: '72V 40Ah Lithium' }, { label: 'Jarak Tempuh', value: '110 km' }, { label: 'Top Speed', value: '85 km/h' }],
    shortDesc: 'Motor listrik adventure pertama Viar di kelasnya.' },
  { id: 11, name: 'Viar Cross XT', category: 'Cross', price: 29800000, cc: 200,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428295998_7301c7b8.jpg',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428295998_7301c7b8.jpg'],
    specs: [{ label: 'Mesin', value: '200cc DOHC' }, { label: 'Tenaga', value: '19 HP' }, { label: 'Transmisi', value: '6-Speed' }, { label: 'Kapasitas BBM', value: '8 L' }],
    shortDesc: 'Trail tour-ready dengan suspensi long travel.' },
  { id: 12, name: 'Viar Karya Box', category: 'Karya', price: 26500000, cc: 200,
    image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428305028_e93b8298.png',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428305028_e93b8298.png'],
    specs: [{ label: 'Mesin', value: '200cc OHV' }, { label: 'Kapasitas Muat', value: '500 kg' }, { label: 'Box', value: 'Aluminium 180 cm' }, { label: 'Transmisi', value: '4-Speed + Reverse' }],
    shortDesc: 'Roda tiga box tertutup, ideal untuk distribusi barang.' },
];

export const MODIFICATIONS = [
  { id: 1, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428449215_946a9799.jpg', title: 'Cross X-250 Rally Build', type: 'Performance', owner: 'Andika R.' },
  { id: 2, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428454541_a5529e5a.png', title: 'Custom Chrome Cafe', type: 'Aesthetic', owner: 'Bayu S.' },
  { id: 3, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428453517_8baf5eb9.jpg', title: 'Adventure Tour Pack', type: 'Utility', owner: 'Citra D.' },
  { id: 4, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428456360_c43ea578.png', title: 'Street Tracker', type: 'Aesthetic', owner: 'Dimas H.' },
  { id: 5, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428456127_a4def127.png', title: 'Enduro Spec', type: 'Performance', owner: 'Eko P.' },
  { id: 6, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428455896_1cb444f6.jpg', title: 'Karya Tow Trailer Mod', type: 'Utility', owner: 'Faisal M.' },
];

export const TESTIMONIALS = [
  { id: 1, name: 'Budi Santoso', role: 'Pemilik UKM', quote: 'Viar Karya BIT sudah 3 tahun jadi andalan distribusi toko saya. Bandel & irit BBM!', rating: 5 },
  { id: 2, name: 'Rina Wijaya', role: 'Adventure Rider', quote: 'Cross X-250 menemani saya menjelajah Sumatra-Jawa. After-sales MDB top!', rating: 5 },
  { id: 3, name: 'Hendra Kusuma', role: 'Petani', quote: 'Karya 150L sangat membantu angkut hasil panen. Service di MDB selalu cepat.', rating: 5 },
  { id: 4, name: 'Siti Nurhaliza', role: 'Komuter Harian', quote: 'Viar Q1 listrik bikin tagihan harian turun drastis. Suka banget!', rating: 5 },
];

export const EVENTS = [
  { id: 1, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428499537_6b504273.jpg', date: '2026-06-15', title: 'Viar Adventure Camp 2026', location: 'Sentul, Bogor', desc: 'Gathering komunitas Viar Cross dengan trek off-road eksklusif.', upcoming: true },
  { id: 2, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428501816_2f900213.png', date: '2026-05-25', title: 'Promo DP 2 Juta', location: 'Showroom MDB Gading Serpong', desc: 'Promo spesial DP mulai 2 juta untuk semua tipe Viar Karya.', upcoming: true },
  { id: 3, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428500586_47ea4691.jpg', date: '2026-04-10', title: 'Test Ride Day', location: 'Showroom MDB', desc: 'Coba langsung Viar Cross & Listrik di area test ride.', upcoming: false },
  { id: 4, image: 'https://d64gsuwffb70l.cloudfront.net/6a00a8e071c3194ba26682b8_1778428513320_c96c7025.png', date: '2026-03-20', title: 'Viar Family Funride', location: 'Tangerang', desc: 'Funride bareng pelanggan setia MDB dengan rute keluarga.', upcoming: false },
];

export const NAV_LINKS = [
  { to: '/', label: 'Beranda' },
  { to: '/products', label: 'Produk' },
  { to: '/test-ride', label: 'Test Ride' },
  { to: '/modifications', label: 'Modifikasi' },
  { to: '/about', label: 'Tentang' },
  { to: '/events', label: 'Event' },
  { to: '/sparepart', label: 'Sparepart' },
  { to: '/contact', label: 'Kontak' },
];

export function formatRupiah(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

export function waLink(phone: string, msg: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}
