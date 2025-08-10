import React, { forwardRef, useState, useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import AccordionBerkas from "./AccordionBerkas";

interface SectionFileSyaratProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const berkasData = [
  {
    category: "Seminar Proposal Skripsi",
    data: [
      {
        category: "Dokumen SKPI",
        listSyarat: [
          "Minimal 3 SKPI Keahlian (Python, Mikrotik, AI, JS, Database, dsb.)",
          "Minimal 4 SKPI Umum (TKDA, Public Speaking, English, dsb.)",
          "Sertifikat Workshop dari Prodi & Luar Prodi",
          "Sertifikat Seminar Nasional dan Internasional (Prodi & Luar Prodi)",
        ]
      },
      {
        category: "Dokumen Utama",
        listSyarat: [
          "Proposal Skripsi Bab 1 sampai 3",
          "Lembar pengesahan seminar skripsi (Scan)",
          "Lembar persetujuan seminar skripsi",
          "Sample Data (Jika relevan dengan topik skripsi)",
        ],
      },
    ],
  },
  {
    category: "Sidang",
    data: [
      {
        category: "Dokumen Utama",
        listSyarat: [
          "4 SKPI Keahlian (Python, Mikrotik, AI, JS, Database, dsb.)",
          "4 SKPI Umum (TKDA, Public Speaking, English, dsb.)",
          "Sertifikat Workshop dari Prodi & Luar Prodi",
          "Sertifikat Seminar Nasional dan Internasional (Prodi & Luar Prodi)",
        ],
      },
      {
        category: "Surat-Surat Penting",
        listSyarat: [
          "Surat Penyerahan Buku Sumbangan dari BAU Universitas",
          "Surat Permohonan Sidang",
          "Surat Bebas Pinjaman Buku dari Perpustakaan",
          "Surat Bukti Persetujuan Pembimbing untuk Ujian Sidang di TTD oleh pembimbing",
          "Surat Keterangan Bebas Akademik dan Administrasi",
        ],
      },
      {
        category: "File Skripsi",
        listSyarat: [
          "Softcopy Foto Berwarna 4x6",
          "Fotocopy Ijazah SLTA yang Dilegalisir",
          "Lembar Persyaratan Sidang (KHS hingga semester akhir)",
          "Formulir Pendaftaran Sidang",
          "Form Bimbingan (minimal 8 kali bimbingan)",
          "Hard Cover Skripsi sebanyak 3 Rangkap berwarna biru",
          "CD Berisi Dokumen Skripsi",
          "Jurnal Penelitian Skripsi Minimal Sinta 4",
        ],
      },
    ],
  },
];

const SectionFileSyarat = forwardRef<HTMLDivElement, SectionFileSyaratProps>((_, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={(node) => {
        sectionRef.current = node;
        if (ref && 'current' in ref) ref.current = node;
      }}
      className={`flex px-6 flex-col items-center py-[71px] transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-center py-14 space-y-6 lg:w-[1051px]">
        <SectionTitle
          title="Syarat Berkas"
          description="Dokumen-dokumen yang harus dipenuhi sebagai persyaratan utama dalam proses seminar proposal hingga sidang skripsi, memastikan setiap langkah administrasi terlaksana dengan baik."
        />
      </div>
      <div className="lg:space-y-0 space-y-6 lg:flex gap-6">
        {berkasData.map((item) => (
          <ContainerSyarats key={item.category} category={item} />
        ))}
      </div>
    </div>
  );
});

export default SectionFileSyarat;

// =====================
// ContainerSyarats
// =====================

interface ContainerSyaratsProps {
  category: {
    category: string;
    data: { category: string; listSyarat: string[] }[];
  };
}

function ContainerSyarats({ category }: ContainerSyaratsProps) {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [missingItems, setMissingItems] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleCheck = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleCheckRequirements = () => {
    const allItems = category.data.flatMap((sub) => sub.listSyarat);
    const missing = allItems.filter((item) => !checkedItems[item]);
    setMissingItems(missing);
    setShowPopup(true);
  };

  return (
    <div className="w-full xl:w-[590px] p-6 bg-slate-900 rounded-3xl space-y-6">
      <h1 className="text-center text-xl font-bold text-white">{category.category}</h1>
      <div className="space-y-6 p-6 bg-black rounded-xl">
        {category.data.map((subCategory) => (
          <AccordionBerkas
            key={subCategory.category}
            syarats={subCategory}
            checkedItems={checkedItems}
            onCheck={handleCheck}
          />
        ))}
        <button
          onClick={handleCheckRequirements}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4"
        >
          Cek Kelengkapan
        </button>
      </div>

      {/* Modal / Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl max-w-md w-[90%]">
            <h2 className="text-lg font-bold mb-4">Hasil Pengecekan</h2>
            {missingItems.length === 0 ? (
              <p>✅ Semua syarat sudah lengkap!</p>
            ) : (
              <>
                <p className="mb-2">❌ Kamu masih kurang beberapa syarat:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {missingItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
