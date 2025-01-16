import { useState } from "react";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

function TimeLine() {
    // State untuk menyimpan konten yang aktif
    const [activeContent, setActiveContent] = useState("preProposal");

    // Data konten untuk setiap tombol
    const contentData = {
        preProposal: [
            {
                title: "Mencari Fenomena Skripsi dan Metode Penyelesaian",
                description: "Mengidentifikasi topik atau masalah yang relevan untuk penelitian serta metode penyelesaian yang sesuai. Mereview sekurangnya 50 Artikel Ilmiah untuk memahami tren penelitian dan menemukan gap penelitian",
            },
            {
                title: "Menentukan Judul Skripsi",
                description: "Judul harus mengandung PMR (Public, Method dan Result)",
            },
            {
                title: "Melakukan Bimbingan dan Revisi Proposal (Bebas Dosen)",
                description: "Sering-seringlah melakukan bimbingan dengan dosen promotor karena the more u learn the more u earn",
            },
            {
                title: "Persiapan Seminar Proposal",
                description: "Menyiapkan materi presentasi, memahami argumen penelitian dan berlatih menjawab pertanyaan dosen penguji",
            },
            {
                title: "Seminar Proposal",
                description: "Memaparkan penelitian di depan penguji untuk mendapatkan persetujuan dan masukan. Jangan lupa selalu awali dengan do’a",
            },
        ],
        preSidang: [
            {
                title: "Persiapan Sidang Skripsi",
                description: "Menyiapkan dokumen dan presentasi untuk sidang skripsi.",
            },
            {
                title: "Melanjutkan Skripsi Bab 4 - 5",
                description: "Menyusun hasil penelitian dan pembahasan",
            },
            {
                title: "Melakukan Bimbingan dan Revisi Proposal",
                description: "Menyelesaikan perbaikan bab 4 dan 5",
            },
            {
                title: "Submit Jurnal Minimal Sinta 4",
                description: "Membuat artikel penelitian dari Skripsi dan mengirimkan artikel penelitian tersebut ke jurnal",
            },
            {
                title: "Sidang",
                description: "Melaksanakan sidang untuk mempertahankan hasil penelitian",
            },
        ],
        preWisuda: [
            {
                title: "Revisi Post Sidang",
                description: "Melakukan perbaikan berdasarkan masukan dari sidang.",
            },
            {
                title: "Pengumpulan Berkas Skripsi",
                description: "Menyelesaikan semua dokumen administratif",
            },
            {
                title: "Yudisium",
                description: "Penetapan kelulusan oleh fakultas",
            },
            {
                title: "Melakukan Bimbingan dan Revisi Proposal (Bebas Dosen)",
                description: "Sering-seringlah melakukan bimbingan dengan dosen promotor karena the more u learn the more u earn",
            },
            {
                title: "Persiapan Seminar Proposal",
                description: "Menyiapkan materi presentasi, memahami argumen penelitian dan berlatih menjawab pertanyaan dosen penguji",
            },
            {
                title: "Finish - War is over",
            },
        ],
    };

    return (
        <div className="w-full px-6 sm:px-12 lg:px-[118px] bg-[#060A16] text-white pb-60 pt-20">
            <SectionTimeLine activeContent={activeContent} setActiveContent={setActiveContent} />
            <div className="flex flex-col space-y-12">
                {contentData[activeContent].map((item, index) => (
                    <div key={index} className="flex  w-full">
                        <TimelineBlokRight title={item.title} description={item.description} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimeLine;

function SectionTimeLine({ activeContent, setActiveContent }) {
    return (
        <div className="flex flex-col items-center mb-20">
            <div className="text-center py-14 space-y-6 lg:w-[1051px]">
                <SectionTitle
                    title="Berkas Wajib"
                    description="Dokumen-dokumen yang harus dipenuhi sebagai persyaratan utama dalam proses seminar proposal hingga sidang skripsi, memastikan setiap langkah administrasi terlaksana dengan baik."
                />
            </div>
            <div className="flex w-full justify-center md:justify-start lg:justify-start p-2 space-x-3">
                <Button
                    variant={activeContent === "preProposal" ? "primary" : "secondary"}
                    size="small"
                    onClick={() => setActiveContent("preProposal")}
                >
                    Pre-Proposal
                </Button>
                <Button
                    variant={activeContent === "preSidang" ? "primary" : "secondary"}
                    size="small"
                    onClick={() => setActiveContent("preSidang")}
                >
                    Pre-Sidang
                </Button>
                <Button
                    variant={activeContent === "preWisuda" ? "primary" : "secondary"}
                    size="small"
                    onClick={() => setActiveContent("preWisuda")}
                >
                    Pre-Wisuda
                </Button>
            </div>
        </div>
    );
}

interface TimelineBlokRightProps {
    title: string;
    description: string;
}

function TimelineBlokRight({ title, description }: TimelineBlokRightProps) {
    return (
        <div className="flex space-x-12 h-[150px] border-white">
            <div className="flex flex-col">
                <div className="relative top-4">
                    <div className="w-6 h-6 bg-white rounded-full absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"></div>
                </div>
                <div className="w-1 h-auto relative">
                    <div className="w-1 h-[200px] bg-white absolute top-2"></div>
                </div>
            </div>
            <div className="h-full flex flex-col justify-between">
                <div className="space-y-4">
                    <div className="flex space-x-2 items-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg md:text-xl lg:text-2xl">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}