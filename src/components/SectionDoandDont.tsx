import SectionTitle from "./SectionTitle";
const tema = [
    {
        tipe: "Do",
        items: [
            {
                title: "Pilih Tema yang Relevan dengan Tren Teknologi Terkini",
                description: "Fokus pada bidang-bidang seperti Kecerdasan Buatan (AI), Pembelajaran Mesin (Machine Learning), Keamanan Siber (Cyber Security), Internet of Things (IoT), Blockchain, atau Teknologi Ramah Lingkungan (Green IT)."
            },
            {
                title: "Pastikan Adanya Kontribusi Baru",
                description: "Topik yang dipilih harus menawarkan nilai tambah dalam bentuk teknologi, metode, atau aplikasi yang inovatif."
            },
            {
                title: "Konsultasikan dengan Pembimbing Akademik",
                description: "Diskusikan tema yang dipilih untuk memastikan relevansi akademis dan potensi kontribusinya terhadap penelitian di bidang tersebut."
            },
            {
                title: "Gunakan Dataset yang Valid",
                description: "Jika penelitian menggunakan pendekatan berbasis data, pastikan dataset yang digunakan memenuhi standar validitas, akurasi, dan relevansi dengan topik penelitian."
            }
        ]
    },
    {
        tipe: "Don't",
        items: [
            {
                title: "Sistem Informasi Tanpa Nilai Inovatif",
                description: "Proyek yang hanya berisi fungsi dasar seperti CRUD (Create, Read, Update, Delete) tanpa pengembangan fitur yang memberikan nilai tambah."
            },
            {
                title: "Tema yang Terlalu Generik atau Menyerupai Proyek Komersial Umum",
                description: "Hindari topik yang terlalu serupa dengan aplikasi komersial yang sudah umum tanpa memberikan elemen pembeda atau kontribusi baru."
            },
            {
                title: "E-Commerce Sederhana Tanpa Fitur Inovatif",
                description: "Proyek e-commerce yang hanya mencakup fungsi dasar tanpa adanya pengembangan teknologi baru atau peningkatan pengalaman pengguna."
            },
            {
                title: "Analisis Sentimen pada Media Sosial yang Tidak Dikonseptualisasi dengan Baik",
                description: "Hindari proyek analisis sentimen yang tidak menawarkan pendekatan baru atau wawasan mendalam di luar penelitian yang sudah ada."
            }
        ]
    }
];

function SectionDoandDont() {
    return (
        <div>
            <div className="bg-[#060A16] px-6 flex flex-col items-center justify-center py-20">
                <div className="text-center py-14 space-y-6 lg:w-[1051px]">
                    <SectionTitle
                        title="Do and Don’t"
                        description="Tetap fokus pada tujuan utamamu. Mempunyai target yang jelas akan membantumu tetap berada di jalur yang benar. Jangan biarkan kegagalan menghentikan langkahmu. Lihat kegagalan sebagai pelajaran, bukan hambatan"
                    />
                </div>
                <div className="flex flex-col lg:flex-col gap-6">
                    {tema.filter(item => item.tipe === "Do").map((group, index) => (
                        <Container key={index} tipe={group.tipe} items={group.items} />
                    ))}

                    {/* Container untuk kategori Don't */}
                    {tema.filter(item => item.tipe === "Don't").map((group, index) => (
                        <Container key={index} tipe={group.tipe} items={group.items} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectionDoandDont


interface TitledescriptionProps {
    tipe: string;
    items: { title: string; description: string }[]; 
}

function Container({ tipe, items }: TitledescriptionProps) {
    return (
        <div className="flex flex-col lg:flex-row justify-between lg:gap-48 space-y-6">
            {/* Teks untuk judul kategori (Do/Don't) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">{tipe}</h1>
            <div className="p-3 bg-slate-800 rounded-3xl lg:w-[631px]">
                {items.map((item, index) => (
                    <div key={index} className="p-3">
                        {/* Teks untuk judul item */}
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</h1>
                        {/* Teks untuk deskripsi */}
                        <p className="text-base sm:text-lg md:text-xl">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}




