import React, { useState } from 'react';

const berkasSyaratData = [
    {
        title: "📝 Seminar Proposal Skripsi",
        items: [

            {
                title: "Dokumen SKPI",
                content: [
                    "💻 4 SKPI Keahlian (Python, Mikrotik, AI, JS, Database, dsb.)",
                    "🗣️ SKPI Umum (TKDA, Public Speaking, English, dsb.)",
                    "🏅 Sertifikat Workshop dari Prodi & Luar Prodi",
                    "🏅 Sertifikat Seminar Nasional dan Internasional (Prodi & Luar Prodi)"
                ]
            },
            {
                title: "Dokumen Utama",
                content: [
                    "📑 Lembar Persetujuan Proposal Skripsi",
                    "🖥️ Sample Data (Jika relevan dengan topik skripsi)"
                ]
            },
        ]
    },
    {
        title: "🎓 Seminar Sidang",
        items: [
            {
                title: "Dokumen SKPI",
                content: [
                    "📜 Sertifikat Mabim (Masa Bimbingan Mahasiswa)",
                    "🤝 Sertifikat Hakrab (Himpunan Akademik atau Organisasi Kemahasiswaan)",
                    "💻 4 SKPI Keahlian (Python, Mikrotik, AI, JS, Database, dsb.)",
                    "🗣️ SKPI Umum (TKDA, Public Speaking, English, dsb.)",
                    "🏅 Sertifikat Workshop dari Prodi & Luar Prodi",
                    "🏅 Sertifikat Seminar Nasional dan Internasional (Prodi & Luar Prodi)"
                ]
            },
            {
                title: "Surat-Surat Penting",
                content: [
                    "📚 Surat Penyerahan Buku Sumbangan dari BAU Universitas",
                    "📝 Surat Permohonan Sidang",
                    "📖 Surat Bebas Pinjaman Buku dari Perpustakaan",
                    "🏷️ Surat Pengajuan Judul Skripsi",
                    "📚 Surat Penunjukan Dosen Pembimbing Skripsi",
                    "✅ Surat Persetujuan Pembimbing untuk Ujian Sidang",
                    "📜 Surat Keterangan Bebas Akademik dan Administrasi"
                ]
            },
            {
                title: "File Skripsi",
                content: [
                    "📸 Softcopy Foto Berwarna (4x6, 3x4, 2x3)",
                    "📄 Fotocopy Ijazah SLTA yang Dilegalisir",
                    "📝 Lembar Persyaratan Sidang (KHS hingga semester akhir)",
                    "🖊️ Formulir Pendaftaran Sidang",
                    "📅 Kartu Bimbingan (minimal 8 kali bimbingan)",
                    "📄 Formulir Revisi Skripsi yang Ditandatangani Pembimbing",
                    "📚 Hard Cover Skripsi sebanyak 3 Rangkap",
                    "💾 CD Berisi Dokumen Skripsi",
                    "📑 Jurnal Penelitian Skripsi Minimal Sinta 4",
                    "📘 Manual Book (untuk aplikasi)"
                ]
            }
        ]
    }
];

const BerkasSyarat: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number[]>([0, 0]);

    const handleToggle = (sectionIndex: number, itemIndex: number) => {
        setActiveIndex((prevState) => {
            const newState = [...prevState];

            if (newState[sectionIndex] === itemIndex) {
                newState[sectionIndex] = -1;
            } else {
                newState[sectionIndex] = itemIndex;
            }
            return newState;
        });
    };

    return (
        <div className="container mx-auto p-6 rounded-lg shadow-lg bg-black text-white ">
            <h1 className=" text-5xl font-bold mb-12 text-center">DAFTAR SYARAT</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {berkasSyaratData.map((section, sectionIndex) => (
                    <div className='border-2 p-6 rounded-lg' key={sectionIndex}>
                        <div className='flex items-center mb-6 gap-3'>
                           
                            <h1 className='font-bold text-4xl xtext-gray-300'>{section.title}</h1>
                        </div>
                        <div className='flex'>
                            {section.items.map((item, itemIndex) => (
                                <div key={itemIndex}>

                                    <h2
                                        className={`font-semibold text-lg cursor-pointer mr-3 py-3 hover:border-b-2
                                            ${activeIndex[sectionIndex] === itemIndex ? 'border-b-2 border-white' : 'text-gray-300'} 
                                            hover:text-white`}
                                        onClick={() => handleToggle(sectionIndex, itemIndex)}
                                    >
                                        {item.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                        <div>
                            {activeIndex[sectionIndex] !== -1 && (
                                <div className='py-4  '>
                                    {section.items[activeIndex[sectionIndex]].content.map((content, contentIndex) => (
                                        <p key={contentIndex} className='text-white text-lg font-semibold my-3'>{content}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BerkasSyarat;
