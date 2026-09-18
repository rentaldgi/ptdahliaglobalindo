"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sejarah from "../components/Sejarah";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaPlay } from "react-icons/fa";
import AnimatePage from "../components/AnimatePage";
import Image from "next/image";

const teamMembers = [
  {
    Image: "/images/kontenkreator.png",
    title: "Konten Kreator",
    name: "Diana Putri",
  },
  {
    Image: "/images/admin.png",
    title: "Admin",
    name: "Amelia Rahayu",
  },
  {
    Image: "/images/owner.png",
    title: "Pemilik Perusahaan",
    name: "Dahliana Quranis Siva SM, M.Kom",
    extra: "Jakarta, 20 Januari 2002",
  },
  {
    Image: "/images/keuangan.png",
    title: "Keuangan",
    name: "Evi Dian Nuke S",
  },
  {
    Image: "/images/driver.png",
    title: "Driver",
    name: "Aldi Hidayat",
  },
];

// Data Dokumen PT Dahlia Global Indo
const documentsDahlia = [
  { title: "Akta & SK Kemenkumham", Image: "/images/dokumen1.png", isi: ["/images/isidokumen1.png"] },
  { title: "NIB PT Dahlia Global Indo", Image: "/images/dokumen2.png", isi: ["/images/NIB - PTP DAHLIA GLOBAL INDO-1.png", "/images/NIB - PTP DAHLIA GLOBAL INDO-2.png", "/images/NIB - PTP DAHLIA GLOBAL INDO-3.png"] },
  { title: "SK Domisili", Image: "/images/dokumen3.png", isi: ["/images/isisk.jpg"] },
  { title: "Pernyataan Mandiri", Image: "/images/pernyataanmandiri.png", isi: ["/images/isipernyataanmandiri.jpg"] },
  { title: "SKT Pajak", Image: "/images/dokumendaftar.png", isi: ["/images/isisktpajak.jpg"] },
  { title: "NPWP PT Dahlia", Image: "/images/dok-npwp.png", isi: ["/images/isi-npwp.png"] },
  { title: "SKT PT Dahlia", Image: "/images/dok-sktp.png", isi: ["/images/isi-sktp.png"] },
  { title: "SPPL", Image: "/images/dok-sppl.png", isi: ["/images/isi-sppl-1.png", "/images/isi-sppl-2.png"] },
  { title: "Akun OSS", Image: "/images/dok-akun.png", isi: ["/images/isi-akun.png"] },
  { title: "Tata Ruang", Image: "/images/dok-tataruang.png", isi: ["/images/isi-tataruang-1.png", "/images/isi-tataruang-2.png"] },
];

// Data Dokumen PT Asseta Travindo Rent
const documentsAsseta = [
  { 
    title: "NIB PT Asseta Travindo Rent", 
    Image: "/images/dokumen2.png", 
    isi: [
      "/images/aseta/NIB ATR 1.jpg", 
      "/images/aseta/NIB ATR 2.jpg", 
      "/images/aseta/NIB ATR 3.jpg"
    ] 
  },
  { 
    title: "NPWP PT Asseta Travindo Rent", 
    Image: "/images/dok-npwp.png", 
    isi: ["/images/aseta/NPWP PT ATR-1.png"] 
  },
  { 
    title: "SKT PT Asseta Travindo Rent", 
    Image: "/images/dok-sktp.png", 
    isi: ["/images/aseta/SKT PT ATR-1.png"] 
  },
  { 
    title: "Penerbitan Akun WP PT Asseta", 
    Image: "/images/dok-akun.png", 
    isi: ["/images/aseta/PENERBITAN AKUN WP PT ATR-1.png"] 
  },
];

export default function TentangKami() {
  const [activeTab, setActiveTab] = useState("dahlia");
  const [index, setIndex] = useState(0);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mobileTeamIndex, setMobileTeamIndex] = useState(0);
  const [mobileDocIndex, setMobileDocIndex] = useState(0);

  const currentDocs = activeTab === "dahlia" ? documentsDahlia : documentsAsseta;

  useEffect(() => {
    setIndex(0);
    setMobileDocIndex(0);
  }, [activeTab]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? Math.max(0, currentDocs.length - 4) : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev >= currentDocs.length - 4 ? 0 : prev + 1));
  };

  const openModal = (doc) => {
    setSelectedDoc(doc);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedDoc(null);
    setShowModal(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <AnimatePage>
        {/* Header & Team Section */}
        <div className="relative">
          {/* Tinggi container disesuaikan agar jarak atas dan card member lebih proporsional / tidak terlalu jauh */}
          <div className="relative h-[450px] sm:h-[530px] text-center">
            <Image
              src="/images/tentangkami_icon_bg.png"
              alt="Background"
              fill
              className="object-cover z-0"
            />
            <Image
              src="/images/tentangkami.png"
              alt="Overlay"
              fill
              className="object-cover"
              style={{ marginTop: "-300px" }}
            />
            <div className="absolute top-10 sm:top-8 w-full text-center px-4 z-20">
              <h1 className="text-2xl sm:text-4xl font-bold text-yellow-400">
                DAHLIA GROUP
              </h1>
              <p className="text-white text-sm sm:text-base mt-2 font-medium hidden sm:block">
                Perusahaan kami merupakan penyedia layanan rental dan jasa terpercaya
                yang menawarkan solusi <br /> sewa motor, iPhone, apartemen,
                serta jasa pindahan melalui Pindahloka secara mudah, aman, dan efisien.
              </p>
            </div>

            {/* Team Desktop */}
            <div className="absolute bottom-0 w-full py-4">
              <div className="hidden md:flex justify-center gap-4 sm:gap-6 items-end flex-wrap max-w-6xl mx-auto">
                {teamMembers.map((member, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg w-40 sm:w-44 text-center shadow-md"
                  >
                    <Image
                      src={member.Image}
                      alt={member.title}
                      width={150}
                      height={150}
                      className="object-cover mx-auto"
                    />
                    <div className="py-2">
                      <h3 className="text-xs text-gray-800">{member.title}</h3>
                      <p className="text-sm font-semibold text-gray-600">
                        {member.name}
                      </p>
                      {member.extra && (
                        <p className="text-xs text-gray-500">{member.extra}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Mobile */}
              <div className="flex md:hidden justify-center items-center gap-4 px-4">
                <button
                  onClick={() =>
                    setMobileTeamIndex((prev) =>
                      prev === 0 ? teamMembers.length - 1 : prev - 1
                    )
                  }
                  className="bg-[#FFC107] p-2 rounded-full shadow"
                >
                  <ChevronLeft />
                </button>
                <div className="bg-white rounded-lg w-64 text-center shadow-md">
                  <Image
                    src={teamMembers[mobileTeamIndex].Image}
                    alt={teamMembers[mobileTeamIndex].title}
                    width={200}
                    height={200}
                    className="bg-cover mx-auto"
                  />
                  <div className="py-2">
                    <h3 className="text-xs text-gray-800">
                      {teamMembers[mobileTeamIndex].title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600">
                      {teamMembers[mobileTeamIndex].name}
                    </p>
                    {teamMembers[mobileTeamIndex].extra && (
                      <p className="text-xs text-gray-500">
                        {teamMembers[mobileTeamIndex].extra}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() =>
                    setMobileTeamIndex((prev) =>
                      prev === teamMembers.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="bg-[#FFC107] p-2 rounded-full shadow"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <section id="sejarah">
          <Sejarah />
        </section>

        {/* Visi */}
        <section id="visimisi">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-7">
            <div className="bg-transparent p-0 rounded-lg text-black transform translate-y-[-50px]">
              <div className="text-center bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 inline-block relative">
                  VISI
                </h2>
                <div className="flex justify-center">
                  <span className="block h-[3px] bg-black w-[50%] sm:w-[50%] max-w-6xl mt-1"></span>
                </div>
                <p className="text-sm sm:text-base text-center leading-relaxed mt-4">
                  Menjadi perusahaan penyedia jasa penyewaan apartemen, kendaraan,
                  dan peralatan
                  <br />
                  dokumentasi yang terpercaya, inovatif, dan terdepan dalam
                  memberikan kemudahan bagi masyarakat urban di Indonesia.
                </p>
              </div>
            </div>
          </div>

          {/* Misi Section */}
          <div className="w-full px-0 md:px-0 py-10 bg-white flex flex-col md:flex-row items-start justify-between gap-6 mx-auto">
            <div className="relative w-fit h-auto">
              <Image
                src="/images/misi_bawah.png"
                alt="Background Image"
                width={320}
                height={200}
                className="absolute top-0 left-0 w-56 md:w-80 rounded-xl z-0"
              />
              <Image
                src="/images/misi_atas.png"
                alt="Main Image"
                width={400}
                height={300}
                className="relative ml-20 mt-20 w-72 md:w-100 rounded-xl shadow-lg z-10"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-end mb-6">
                <div className="flex items-center justify-center bg-yellow-400 h-16 shadow-md rounded-l-full md:rounded-l-full md:px-12 px-24 w-[220px] md:w-auto transition-all duration-300">
                  <h2 className="text-white font-bold text-xl">MISI</h2>
                </div>
              </div>
              <div className="space-y-4 ml-4 mr-4 md:ml-[24%] md:mr-0">
                {[
                  "Menyediakan layanan penyewaan apartemen yang nyaman, aman, dan strategis untuk memenuhi kebutuhan hunian modern.",
                  "Menawarkan layanan rental motor yang praktis, terjangkau, dan mendukung mobilitas harian pelanggan.",
                  "Menyediakan layanan sewa kamera berkualitas untuk mendukung berbagai kebutuhan dokumentasi pribadi dan profesional.",
                  "Membangun hubungan jangka panjang dengan pelanggan melalui pelayanan prima, kepercayaan, dan konsistensi.",
                  "Berinovasi dalam pengembangan layanan berbasis teknologi untuk meningkatkan kenyamanan, efisiensi, dan kepuasan pelanggan.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-start bg-gray-200 p-4 rounded-l-full shadow-md w-[100%]"
                  >
                    <div className="bg-yellow-400 text-red-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 text-lg font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed flex-1">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DOKUMEN SECTION (Legalitas Perusahaan) */}
        <section id="dokumen">
          <div className="relative w-full bg-[#FFDD00] py-12 overflow-hidden">
            
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Legalitas Perusahaan</h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setActiveTab("dahlia")}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-md ${
                    activeTab === "dahlia" ? "bg-gray-900 text-yellow-400 scale-105" : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  PT Dahlia Global Indo
                </button>
                <button
                  onClick={() => setActiveTab("asseta")}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-md ${
                    activeTab === "asseta" ? "bg-gray-900 text-yellow-400 scale-105" : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  PT Asseta Traverindo Rent
                </button>
              </div>
            </div>

            {/* Desktop Slider */}
            <div className="hidden md:flex items-center justify-between px-8 sm:px-12 max-w-7xl mx-auto w-full">
              <button
                onClick={handlePrev}
                className="z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 flex-shrink-0 mr-4"
              >
                <FaPlay className="w-3 h-3 text-yellow-400 rotate-180" />
              </button>

              <div className="grid grid-cols-4 gap-6 w-full max-w-5xl mx-auto">
                {currentDocs.slice(index, index + 4).map((doc, i) => (
                  <div
                    key={i}
                    className="group transition-all duration-500 ease-out transform hover:scale-105 w-full flex justify-center"
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white w-full">
                      <Image
                        src={doc.Image}
                        alt={doc.title}
                        width={288}
                        height={200}
                        onClick={() => openModal(doc)}
                        className="w-full h-auto mx-auto cursor-pointer transition-all duration-300 group-hover:brightness-105 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 flex-shrink-0 ml-4"
              >
                <FaPlay className="w-3 h-3 text-yellow-400" />
              </button>
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden flex justify-center items-center gap-6 px-4">
              <button
                onClick={() =>
                  setMobileDocIndex((prev) => (prev === 0 ? currentDocs.length - 1 : prev - 1))
                }
                className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 flex-shrink-0"
              >
                <FaPlay className="w-3 h-3 text-yellow-400 rotate-180" />
              </button>

              <div className="w-[75%] relative">
                <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <Image
                    src={currentDocs[mobileDocIndex].Image}
                    alt={currentDocs[mobileDocIndex].title}
                    width={300}
                    height={200}
                    onClick={() => openModal(currentDocs[mobileDocIndex])}
                    className="w-full max-w-xs h-auto mx-auto cursor-pointer hover:brightness-105 transition-all duration-300 object-cover"
                  />
                </div>
              </div>

              <button
                onClick={() =>
                  setMobileDocIndex((prev) => (prev === currentDocs.length - 1 ? 0 : prev + 1))
                }
                className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 flex-shrink-0"
              >
                <FaPlay className="w-3 h-3 text-yellow-400" />
              </button>
            </div>
          </div>
        </section>

        {/* Modal Detail Dokumen */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out bg-black/50 ${
            showModal ? "opacity-100 pointer-events-auto bg-opacity-60" : "opacity-0 pointer-events-none bg-opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden transition-all duration-300 ease-out transform ${
              showModal ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {selectedDoc?.title || "Detail Dokumen"}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
              {selectedDoc && (
                <div
                  className={`grid gap-4 sm:gap-6 ${
                    selectedDoc.isi.length < 3
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {selectedDoc.isi.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="group overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                    >
                      <Image
                        src={imgSrc}
                        alt={`Isi Dokumen ${idx + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-auto max-h-[350px] object-contain bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </AnimatePage>
    </div>
  );
}