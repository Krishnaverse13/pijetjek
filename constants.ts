import { Therapist, AdminUser, AdminBooking } from './types';

export const APP_NAME = "Pijat-Jek";

export const APP_ROUTES = {
  HOME: '/',
  THERAPISTS: '/therapists',
  THERAPIST_DETAIL: (id: string) => `/therapists/${id}`,
  THERAPIST_DETAIL_PARAM: '/therapists/:therapistId',
  BOOKING_CONFIRMATION: '/booking-confirmation', // Not used as a page yet, modal instead
  NOT_FOUND: '/404', 
};

export const APP_ADMIN_ROUTES = {
  DASHBOARD: '/admin',
  THERAPISTS: '/admin/therapists',
  USERS: '/admin/users',
  BOOKINGS: '/admin/bookings',
};

// Coordinates for Indonesian cities
const JAKARTA_COORDS = { lat: -6.2088, lon: 106.8456 };
const SURABAYA_COORDS = { lat: -7.2575, lon: 112.7521 };
const BANDUNG_COORDS = { lat: -6.9175, lon: 107.6191 };
const MEDAN_COORDS = { lat: 3.5952, lon: 98.6722 };

export const MOCK_THERAPISTS: Therapist[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    email: 'budi.santoso@example.com',
    specialties: ['Pijat Tradisional', 'Relaksasi', 'Terapi Otot'],
    bio: 'Budi adalah terapis pijat bersertifikat dengan 5 tahun pengalaman, spesialis dalam teknik relaksasi dan pereda stres. Dia percaya pada pendekatan holistik untuk kesehatan.',
    rating: 4.8,
    reviewCount: 120,
    imageUrl: 'https://picsum.photos/seed/budi/400/400',
    availability: 'Tersedia Sekarang',
    location: 'Melayani Jakarta Pusat & Selatan',
    latitude: JAKARTA_COORDS.lat + (Math.random() - 0.5) * 0.1,
    longitude: JAKARTA_COORDS.lon + (Math.random() - 0.5) * 0.1,
    adminStatus: 'Disetujui',
    services: [
      { id: 's1-1', name: 'Pijat Relaksasi Swedia', description: 'Pijat seluruh tubuh klasik untuk relaksasi.', durationMinutes: 60, price: 250000 },
      { id: 's1-2', name: 'Terapi Pijat Jaringan Dalam', description: 'Menargetkan lapisan otot dan jaringan ikat yang lebih dalam.', durationMinutes: 60, price: 300000 },
      { id: 's1-3', name: 'Aromaterapi Tambahan', description: 'Tingkatkan pijat Anda dengan minyak esensial.', durationMinutes: 0, price: 50000 },
    ],
  },
  {
    id: '2',
    name: 'Siti Aminah',
    email: 'siti.aminah@example.com',
    specialties: ['Pijat Olahraga', 'Pelepasan Myofascial', 'Pijat Refleksi'],
    bio: 'Siti bersemangat membantu atlet dan individu aktif pulih dan berkinerja terbaik. Dia telah bekerja dengan banyak tim olahraga.',
    rating: 4.9,
    reviewCount: 95,
    imageUrl: 'https://picsum.photos/seed/siti/400/400',
    availability: 'Segera Tersedia',
    location: 'Melayani Surabaya Timur & Pusat',
    latitude: SURABAYA_COORDS.lat + (Math.random() - 0.5) * 0.05,
    longitude: SURABAYA_COORDS.lon + (Math.random() - 0.5) * 0.05,
    adminStatus: 'Disetujui',
    services: [
      { id: 's2-1', name: 'Pijat Pemulihan Olahraga', description: 'Fokus pada area tubuh yang terlalu sering digunakan dan stres akibat gerakan berulang.', durationMinutes: 75, price: 350000 },
      { id: 's2-2', name: 'Pelepasan Myofascial', description: 'Tekanan lembut dan berkelanjutan ke jaringan ikat Myofascial.', durationMinutes: 60, price: 320000 },
    ],
  },
  {
    id: '3',
    name: 'Rina Wulandari',
    email: 'rina.wulandari@example.com',
    specialties: ['Pijat Batu Panas', 'Pijat Hamil', 'Totok Wajah'],
    bio: 'Rina menciptakan lingkungan yang tenang dan menenangkan bagi kliennya. Dia berspesialisasi dalam perawatan prenatal dan teknik terapi lembut.',
    rating: 4.7,
    reviewCount: 78,
    imageUrl: 'https://picsum.photos/seed/rina/400/400',
    availability: 'Dengan Janji Temu',
    location: 'Melayani Seluruh Area Bandung',
    latitude: BANDUNG_COORDS.lat + (Math.random() - 0.5) * 0.08,
    longitude: BANDUNG_COORDS.lon + (Math.random() - 0.5) * 0.08,
    adminStatus: 'Menunggu Tinjauan',
    services: [
      { id: 's3-1', name: 'Pijat Batu Panas Mewah', description: 'Batu yang dipanaskan digunakan untuk menghangatkan dan merelaksasi otot.', durationMinutes: 90, price: 400000 },
      { id: 's3-2', name: 'Pijat Nyaman Ibu Hamil', description: 'Pijat aman dan menenangkan untuk ibu hamil.', durationMinutes: 60, price: 280000 },
      { id: 's3-3', name: 'Refleksi Kaki', description: 'Titik-titik tekanan pada kaki dimanipulasi untuk meningkatkan kesehatan.', durationMinutes: 45, price: 180000 },
    ],
  },
  {
    id: '4',
    name: 'Agus Setiawan',
    email: 'agus.setiawan@example.com',
    specialties: ['Pijat ala Thai', 'Shiatsu', 'Pijat Kursi'],
    bio: 'Agus membawa teknik Timur kuno ke kesehatan modern. Dengan fokus pada aliran energi dan titik-titik tekanan, sesinya menyegarkan dan menyeimbangkan.',
    rating: 4.6,
    reviewCount: 65,
    imageUrl: 'https://picsum.photos/seed/agus/400/400',
    availability: 'Tersedia Sekarang',
    location: 'Melayani Medan Kota & Sekitarnya',
    latitude: MEDAN_COORDS.lat + (Math.random() - 0.5) * 0.06,
    longitude: MEDAN_COORDS.lon + (Math.random() - 0.5) * 0.06,
    adminStatus: 'Disetujui',
    services: [
      { id: 's4-1', name: 'Pijat Tradisional Thai', description: 'Teknik peregangan dan akupresur yang dibantu.', durationMinutes: 90, price: 380000 },
      { id: 's4-2', name: 'Sesi Shiatsu', description: 'Pijat tekanan jari untuk menyeimbangkan energi tubuh.', durationMinutes: 60, price: 260000 },
      { id: 's4-3', name: 'Pijat Kursi Cepat', description: 'Fokus pada punggung, leher, dan bahu.', durationMinutes: 30, price: 150000 },
    ],
  },
  {
    id: '5',
    name: 'Dewi Lestari',
    email: 'dewi.lestari@example.com',
    specialties: ['Pijat Aromaterapi', 'Limfatik Drainase', 'Lulur Tradisional'],
    bio: 'Dewi menggabungkan keahlian pijat dengan manfaat aromaterapi dan perawatan tubuh tradisional untuk pengalaman yang menyegarkan secara menyeluruh.',
    rating: 4.8,
    reviewCount: 88,
    imageUrl: 'https://picsum.photos/seed/dewi/400/400',
    availability: 'Dengan Janji Temu',
    location: 'Melayani Jakarta Barat & Utara',
    latitude: JAKARTA_COORDS.lat + 0.05 + (Math.random() - 0.5) * 0.1,
    longitude: JAKARTA_COORDS.lon - 0.05 + (Math.random() - 0.5) * 0.1,
    adminStatus: 'Ditolak',
    services: [
      { id: 's5-1', name: 'Pijat Aromaterapi Holistik', description: 'Kombinasi pijatan lembut dengan minyak esensial pilihan.', durationMinutes: 75, price: 320000 },
      { id: 's5-2', name: 'Drainase Limfatik', description: 'Pijatan ringan untuk merangsang aliran getah bening.', durationMinutes: 60, price: 300000 },
      { id: 's5-3', name: 'Lulur Tradisional Jawa', description: 'Perawatan eksfoliasi tubuh dengan bahan alami.', durationMinutes: 45, price: 200000 },
    ],
  }
];

export const MOCK_ADMIN_USERS: AdminUser[] = [
    { id: 'u1', name: 'Ahmad Zulkifli', email: 'ahmad.z@example.com', joinDate: '2023-01-15T10:00:00Z', totalBookings: 5, status: 'Aktif' },
    { id: 'u2', name: 'Lina Marwati', email: 'lina.m@example.com', joinDate: '2023-02-20T14:30:00Z', totalBookings: 2, status: 'Aktif' },
    { id: 'u3', name: 'Chandra Wijaya', email: 'chandra.w@example.com', joinDate: '2023-03-10T09:15:00Z', totalBookings: 0, status: 'Aktif' },
    { id: 'u4', name: 'Putri Ayu', email: 'putri.a@example.com', joinDate: '2023-04-05T16:45:00Z', totalBookings: 8, status: 'Ditangguhkan' },
    { id: 'u5', name: 'Rizky Pratama', email: 'rizky.p@example.com', joinDate: '2023-05-12T11:20:00Z', totalBookings: 12, status: 'Aktif' },
];

export const MOCK_ADMIN_BOOKINGS: AdminBooking[] = [
    { id: 'b1', clientId: 'u1', clientName: 'Ahmad Zulkifli', therapistId: '1', therapistName: 'Budi Santoso', serviceId: 's1-1', serviceName: 'Pijat Relaksasi Swedia', bookingDate: '2024-07-20T10:00:00Z', price: 250000, status: 'Selesai' },
    { id: 'b2', clientId: 'u2', clientName: 'Lina Marwati', therapistId: '2', therapistName: 'Siti Aminah', serviceId: 's2-1', serviceName: 'Pijat Pemulihan Olahraga', bookingDate: '2024-07-22T14:00:00Z', price: 350000, status: 'Dikonfirmasi' },
    { id: 'b3', clientId: 'u1', clientName: 'Ahmad Zulkifli', therapistId: '4', therapistName: 'Agus Setiawan', serviceId: 's4-2', serviceName: 'Sesi Shiatsu', bookingDate: '2024-07-25T16:00:00Z', price: 260000, status: 'Diajukan' },
    { id: 'b4', clientId: 'u5', clientName: 'Rizky Pratama', therapistId: '1', therapistName: 'Budi Santoso', serviceId: 's1-2', serviceName: 'Terapi Pijat Jaringan Dalam', bookingDate: '2024-07-28T11:00:00Z', price: 300000, status: 'Dibatalkan' },
    { id: 'b5', clientId: 'u3', clientName: 'Chandra Wijaya', therapistId: '3', therapistName: 'Rina Wulandari', serviceId: 's3-1', serviceName: 'Pijat Batu Panas Mewah', bookingDate: '2024-08-02T15:30:00Z', price: 400000, status: 'Menunggu Pembayaran' },
];