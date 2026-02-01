import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 overflow-hidden">
      {/* Ornamen Kiri Atas */}
      <Image
        src="/images/logo_footer_kiri.png"
        alt="Ornamen Kiri"
        width={400}
        height={200}
        className="absolute top-0 left-0 
        w-40 sm:w-64 md:w-[20rem] lg:w-[28rem] xl:w-[36rem] 
        opacity-40 sm:opacity-100 z-0"
      />

      {/* Ornamen Kanan Bawah */}
      <Image
        src="/images/logo_footer_kanan.png"
        alt="Ornamen Kanan"
        width={300}
        height={150}
        className="absolute bottom-0 right-0 
        w-32 sm:w-48 md:w-[20rem] lg:w-[24rem] xl:w-[28rem] 
        opacity-40 sm:opacity-100 z-0"
      />

      {/* Konten Utama */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          
          {/* Kolom 1: Sosial Media + Bank */}
          <div className="flex flex-col items-center lg:items-start gap-5">
            {/* Sosial Media */}
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/ptdahliaglobalindo?igsh=ZWZxYnNrYTYzNHA0"
                aria-label="Instagram"
              >
                <Image
                  src="/images/icon_ig.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
              </Link>

              <Link href="https://wa.me/628153135669" aria-label="WhatsApp">
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
            <h4 className="text-base font-semibold mb-3">Kontak Kami</h4>
            <p className="text-gray-600 leading-relaxed mb-2">
              Jl. Kebon Kawung No.49, Pasir Kaliki, Kec. Cicendo, Kota Bandung,
              Jawa Barat 40171, Indonesia
            </p>
            <p className="text-gray-600">ptdahliglobalindo@gmail.com</p>
            <p className="text-gray-600">(+62) 815-3135-668</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#FFDD00] py-3 text-center text-xs text-gray-800 font-medium">
        © ptdahliglobalindo. Hak cipta dilindungi undang-undang.
      </div>
    </footer>
  );
}
