import Link from "next/link";
import Image from "next/image";
import { Phone, PhoneCall, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 overflow-hidden">
      {/* Ornamen Kiri Atas */}
        <Image
          src="/images/logo_kanan.png"
          alt="Ornamen Kiri"
          width={400}
          height={200}
          className="absolute top-0 left-0 
          w-24 sm:w-36 md:w-48 lg:w-56 xl:w-64 
          opacity-30 sm:opacity-40 z-0"
        />

        {/* Ornamen Kanan Bawah */}
        <Image
          src="/images/logo_kiri.png"
          alt="Ornamen Kanan"
          width={300}
          height={150}
          className="absolute bottom-10 right-0 
          w-20 sm:w-28 md:w-40 lg:w-48 xl:w-56 
          opacity-30 sm:opacity-40 z-0"
        />

      {/* Konten Utama */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          
          {/* Kolom 1: Sosial Media + Bank */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            {/* Sosial Media */}
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/dahliagroup.id"
                aria-label="Instagram"
              >
                <Image
                  src="/images/icon_ig.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
              </Link>

              <Link href="https://wa.me/628153135668" aria-label="WhatsApp">
                <Image
                  src="/images/icon_wa.png"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                />
              </Link>
            </div>

            {/* Logo Bank */}
            <div
              className="
              bg-[#FFDD00] py-2 px-4 rounded-full flex flex-wrap justify-center gap-3 shadow-md
              lg:absolute lg:bottom-24 lg:-left-10
            "
            >
            <Image src="/images/pm_bni.png" alt="BNI" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_bca.png" alt="BCA" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_mandiri.png" alt="Mandiri" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_qris.png" alt="QRIS" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_mastercard.png" alt="Mastercard" width={24} height={24} className="w-8 h-8 object-contain" />
            <Image src="/images/pm_visa.png" alt="Visa" width={24} height={24} className="w-8 h-8 object-contain" />
          </div>
          </div>

          {/* Kolom 2: Halaman */}
          <div className="text-center lg:text-left">
            <h4 className="text-base font-semibold mb-3">Halaman</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/TentangKami">Tentang Kami</Link></li>
              <li><Link href="/Kontak">Kontak</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Isi Pendukung */}
          <div className="text-center lg:text-left">
            <h4 className="text-base font-semibold mb-3">Isi Pendukung</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/#layanankami">Layanan Kami</Link></li>
              <li><Link href="/#kenapakami">Keunggulan</Link></li>
              <li><Link href="/TentangKami#dokumen">Dokumen</Link></li>
              <li><Link href="/TentangKami#sejarah">Sejarah Perusahaan</Link></li>
              <li><Link href="/TentangKami#visimisi">Visi & Misi</Link></li>
            </ul>
          </div>

         {/* Kolom 4: Kontak */}
        <div className="text-center lg:text-left">
          <h4 className="text-base font-semibold mb-4">Kontak Kami</h4>

          <div className="space-y-3 text-gray-600">
            {/* Telepon */}
            <a
              href="tel:+628153135668"
              className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#002F66] transition-colors duration-200"
            >
              <Phone size={17} strokeWidth={1.8} className="shrink-0" />
              <span>+62 815-3135-668</span>
            </a>

            {/* Fax */}
            <a
              href="tel:02245720413"
              className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#002F66] transition-colors duration-200"
            >
              <PhoneCall size={17} strokeWidth={1.8} className="shrink-0" />
              <span>02245720413</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dahliagroup.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#002F66] transition-colors duration-200"
            >
              <Instagram size={17} strokeWidth={1.8} className="shrink-0" />
              <span>@dahliagroup.id</span>
            </a>
          </div>
        </div>
        </div>
        </div>

      {/* Copyright */}
      <div className="bg-[#FFDD00] py-3 text-center text-xs text-gray-800 font-medium">
      © 2026 Dahlia Group. Seluruh hak cipta dilindungi undang-undang
      </div>
    </footer>
  );
}
