export interface Service {
  id: string;
  name: string;
  description: string;
  durationMinutes: number;
  price: number;
}

export type TherapistAdminStatus = 'Disetujui' | 'Menunggu Tinjauan' | 'Ditolak';

export interface Therapist {
  id: string;
  name: string;
  email?: string; // Added email field
  specialties: string[];
  bio: string;
  rating: number; // 1-5
  reviewCount: number;
  imageUrl: string;
  services: Service[];
  availability: 'Tersedia Sekarang' | 'Segera Tersedia' | 'Dengan Janji Temu'; // Translated
  location: string; // e.g., "Serves Downtown & North City"
  latitude: number;
  longitude: number;
  adminStatus?: TherapistAdminStatus; // For admin dashboard
}

export interface Booking {
  therapistId: string;
  therapistName: string;
  serviceId: string;
  serviceName: string;
  dateTime: Date; // Simplified for this example
  price: number;
}

// For Admin Dashboard
export type AdminUserStatus = 'Aktif' | 'Ditangguhkan';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  joinDate: string; // ISO Date string
  totalBookings: number;
  status: AdminUserStatus;
}

export type AdminBookingStatus = 'Diajukan' | 'Dikonfirmasi' | 'Selesai' | 'Dibatalkan' | 'Menunggu Pembayaran';

export interface AdminBooking {
  id: string;
  clientName: string;
  clientId: string;
  therapistName: string;
  therapistId: string;
  serviceName: string;
  serviceId: string;
  bookingDate: string; // ISO Date string
  price: number;
  status: AdminBookingStatus;
}