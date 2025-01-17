import Accordion from "./Accordion"
import SectionTitle from "./SectionTitle"



const faqData = [
    {
        question: "Bagaimana kalau ada proposal mahasiswa yang ditolak saat seminar proposal? Apakah seminar proposalnya harus diulang?",
        answer: "Jika proposal dinyatakan tidak layak saat seminar maka mahasiswa tersebut harus mengajukan pengajuan judul proposal kepada dosen pembimbing tanpa melakukan seminar ulang."
    },
    {
        question: "Kapan dan bagaimana proses submit jurnal skripsi minimal Sinta 4?",
        answer: "Proses submit dilakukan sebelum sidang skripsi selambat-lambatnya di bulan Mei. Prosesnya adalah Memilih Jurnal yang Sesuai, mempersiapkan manuskrip, Cek Plagiarisme, Submit ke Jurnal Tujuan, Review dari Editor, Revisi dan Finalisasi."
    },
    {
        question: "Apakah harus konsultasi dulu atau tidak dalam proses pembuatan Seminar Proposal?",
        answer: "Mahasiswa dapat melakukan konsultasi dari Bab 1 sampai Bab 3 kepada dosen promotor atau dosen dengan keahlian mendalam di bidang penelitian terkait."
    },
    {
        question: "Apakah bisa kalau mau mengajukan penggantian konsentrasi dari topik skripsi?",
        answer: "Tentu saja bisa. Mahasiswa dapat menjelaskan alasan mengapa ingin mengganti konsentrasi atau topik termasuk relevansi dan tujuan penelitian skripsi kepada dosen pembimbing."
    },
    {
        question: "Bagaimana jika SKPI keahlian atau SKPI umumnya belum memenuhi jumlah persyaratan skripsi?",
        answer: "Jika sudah membayar SKPI tapi belum melaksanakan kegiatannya maka mahasiswa dapat meminta surat keterangan ke GTTC atau Nutral. Tetapi jika mahasiswa belum membayar SKPI sama sekali maka mahasiswa tidak dapat mendaftar sidang ke SASU karena dinilai persyaratan belum lengkap sehingga harus tambah semester."
    }
];
function FaQ() {
    return (
        <div className="px-6 lg:px-[185px]">
            <div className="text-start  py-14 space-y-6   ">
                <SectionTitle
                    title="FAQ"
                    description="Dapatkan jawaban atas pertanyaan umum dan tips untuk membantu menyelesaikan skripsimu. Jika butuh bantuan lebih lanjut, tim kami siap membantu."
                />
            </div>
            <div className="">
                {faqData.map((item, index) => (

                    <Accordion
                        key={index}
                        questions={[
                            {
                                question: item.question,
                                answer: item.answer
                            }
                        ]}
                    />
                ))}
            </div>
        </div>
    )
}

export default FaQ