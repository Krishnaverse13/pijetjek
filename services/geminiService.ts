// services/geminiService.ts

// URL ke skrip PHP proxy Anda
const API_PROXY_URL = './api_proxy.php'; // Sesuaikan path jika diperlukan

/**
 * Menghasilkan konten teks berdasarkan prompt yang diberikan melalui PHP proxy ke API Gemini.
 * @param prompt Prompt teks untuk dikirim ke model.
 * @param systemInstruction Instruksi sistem opsional untuk memandu perilaku model.
 * @returns Promise yang resolve ke teks yang dihasilkan, atau pesan kesalahan string.
 */
export const generateTextFromGemini = async (prompt: string, systemInstruction?: string): Promise<string> => {
  try {
    const response = await fetch(API_PROXY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        prompt,
        ...(systemInstruction && { systemInstruction }) 
      }),
    });

    if (!response.ok) {
      // Coba baca pesan error dari proxy jika ada
      let errorMessage = `Kesalahan HTTP: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        if (errorData && errorData.error) {
          errorMessage = errorData.error;
        }
      } catch (e) {
        // Gagal mem-parse JSON error, gunakan pesan status HTTP
      }
      console.error("Kesalahan dari proxy API:", errorMessage);
      // Berikan pesan error yang lebih ramah pengguna
      if (response.status === 500 && errorMessage.toLowerCase().includes("kunci api belum dikonfigurasi")) {
        return "Layanan AI tidak tersedia: Konfigurasi Kunci API bermasalah di server.";
      }
      if (errorMessage.toLowerCase().includes("kunci api tidak valid") || errorMessage.toLowerCase().includes("invalid api key")) {
        return "Kunci API tidak valid atau hilang. Harap periksa konfigurasi server.";
      }
      if (errorMessage.toLowerCase().includes("kuota")) {
        return "Kuota untuk API telah terlampaui. Silakan coba lagi nanti.";
      }
      return `Maaf, terjadi kesalahan saat menghubungi layanan AI (${response.status}). Silakan coba lagi nanti.`;
    }

    const data = await response.json();
    
    if (data && data.text) {
      return data.text;
    } else if (data && data.error) {
      console.error("Kesalahan spesifik dari proxy:", data.error);
      return data.error; // Kembalikan pesan error dari proxy
    } else {
      return "Format respons tidak terduga dari layanan AI.";
    }

  } catch (error) {
    console.error("Kesalahan jaringan atau lainnya saat memanggil proxy API:", error);
    if (error instanceof Error) {
      return `Maaf, terjadi kesalahan jaringan: ${error.message}. Silakan coba lagi nanti.`;
    }
    return "Maaf, terjadi kesalahan jaringan yang tidak diketahui. Silakan coba lagi nanti.";
  }
};
