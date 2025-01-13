import Accordion from "../components/Accordion";



import Hero from "../components/Hero";
import TimeLine from "../components/TimeLine";
import DevTeam from "../components/DevTeam";

import SectionFileSyarat from "../components/SectionFileSyarat";
import SectionRecomendedPaper from "../components/SectionRecomendedPaper";
import SectionDoandDont from "../components/SectionDoandDont";
import SectionTemplateChat from "../components/SectionTemplateChat";
import SectionToolsHelper from "../components/SectionToolsHelper";

function Home() {
    
    return (
        <div className="flex flex-col items-center justify-center bg-[#060A16] text-white font-san-francisco">

            <Hero />
            <SectionFileSyarat />

            <TimeLine />
            <SectionRecomendedPaper />
            <SectionDoandDont />
            <SectionTemplateChat />

            <SectionToolsHelper />

            {/* Adjusting padding for responsiveness */}
            <div className="w-full px-4 md:px-10 lg:px-[185px] py-10 md:py-20">
                <Accordion
                    questions={[
                        {
                            question: 'Bagaimana kalau ada proposal mahasiswa yang ditolak saat seminar proposal, Apakah seminar proposalnya harus diulangi?',
                            answer: 'Jika proposal dinyatakan tidak layak saat seminar maka mahasiswa tersebut harus mengulang pengajuan judul proposal kepada dosen pembimbing tanpa melakukan seminar ulang.'
                        },
                        {
                            question: 'Kapan dan bagaimana proses submit jurnal skripsi minimal Sinta 4?',
                            answer: 'Proses submit dilakukan sebelum sidang skripsi selambat-lambatnya di bulan Mei. Prosesnya adalah Memilih Jurnal yang Sesuai, mempersiapkan manuskrip, Cek Plagiarisme, Submit ke Jurnal Tujuan, Review dari Editor, Revisi dan Finalisasi.'
                        },
                        {
                            question: 'Apakah harus konsultasi dulu atau tidak dalam proses pembuatan Seminar Proposal?',
                            answer: 'Mahasiswa dapat melakukan konsultasi dari Bab 1 sampai Bab 3 kepada dosen promotor atau dosen dengan keahlian mendalam di bidang penelitian terkait.'
                        },
                        {
                            question: 'Apakah bisa kalau mau mengajukan penggantian konsentrasi dari topik skripsi?',
                            answer: 'Tentu saja bisa. Mahasiswa dapat menjelaskan alasan mengapa ingin mengganti konsentrasi atau topik termasuk relevansi dan tujuan penelitian skripsi kepada dosen pembimbing.'
                        },
                        {
                            question: 'Bagaimana jika SKPI keahlian atau SKPI umumnya belum memenuhi jumlah persyaratan skripsi?',
                            answer: 'Jika sudah membayar SKPI tapi belum melaksanakan kegiatannya maka mahasiswa dapat meminta surat keterangan ke GTTC atau Nutral. Tetapi jika mahasiswa belum membayar SKPI sama sekali maka mahasiswa tidak dapat mendaftar sidang ke SASU karena dinilai persyaratan belum lengkap sehingga harus tambah semester.'
                        }
                    ]}
                />
            </div>
            <DevTeam />
        </div>
    );
}

export default Home;
