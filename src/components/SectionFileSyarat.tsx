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
          "Minimal 3 SKPI Umum (TKDA, Public Speaking, English, dsb.)",
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
      {
        category: "Dokumen Laporan Kegiatan",
        listSyarat: [
          "Laporan PKL",
          "Laporan KKN",
          "Minimal LoA SCP Riset jika Riset",
          "Bukti Minimal 10 bulan internship Jika Internship",
        ],
      },
    ],
  },
  {
    category: "Seminar Sidang",
    data: [
      {
        category: "Dokumen Utama",
        listSyarat: [
          "Sertifikat Mabim (Masa Bimbingan Mahasiswa)",
          "Sertifikat Hakrab (Himpunan Akademik atau Organisasi Kemahasiswaan)",
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
          "Surat Pengajuan Judul Skripsi",
          "Surat Penunjukan Dosen Pembimbing Skripsi",
          "Surat Bukti Persetujuan Pembimbing untuk Ujian Sidang di TTD oleh pembimbing",
          "Surat Keterangan Bebas Akademik dan Administrasi",
        ],
      },
      {
        category: "File Skripsi",
        listSyarat: [
          "Softcopy Foto Berwarna (4x6, 3x4, 2x3)",
          "Fotocopy Ijazah SLTA yang Dilegalisir",
          "Lembar Persyaratan Sidang (KHS hingga semester akhir)",
          "Formulir Pendaftaran Sidang",
          "Kartu Bimbingan (minimal 8 kali bimbingan)",
          "Formulir Revisi Skripsi yang Ditandatangani Pembimbing",
          "Hard Cover Skripsi sebanyak 3 Rangkap berwarna biru",
          "CD Berisi Dokumen Skripsi",
          "Jurnal Penelitian Skripsi Minimal Sinta 4",
          "Manual Book (untuk aplikasi)",
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
          setIsVisible(true); // Trigger the animation when section is in view
        }
      },
      { threshold: 0.2 } // 20% of the section needs to be visible to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer when the component is unmounted
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
      className={`flex px-6 flex-col items-center py-[71px] transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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

interface ContainerSyaratsProps {
  category: {
    category: string;
    data: { category: string; listSyarat: string[] }[];
  };
}

function ContainerSyarats({ category }: ContainerSyaratsProps) {
  return (
    <div className="w-full xl:w-[590px] p-6 bg-slate-900 rounded-3xl space-y-6">
      <h1 className="text-center text-xl font-bold">{category.category}</h1>
      <div className="space-y-6 p-6 bg-black rounded-xl">
        {category.data.map((subCategory) => (
          <AccordionBerkas key={subCategory.category} syarats={subCategory} />
        ))}
      </div>
    </div>
  );
}
