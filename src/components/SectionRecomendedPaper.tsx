import SectionTitle from "./SectionTitle";
import Sinta from "../assets/sinta.svg";
import { IoIosArrowForward } from "react-icons/io";

const dataRecomendasiPaper = [
    {
        category: 'Free',
        listPaper: [
            {
                title: 'Kesatria',
                link: 'https://tunasbangsa.ac.id/pkm/index.php/kesatria/pages/view/authorfees '
            },
            {
                title: 'Sistemasi',
                link: 'https://sistemasi.ftik.unisi.ac.id/index.php/stmsi '
            },
            {
                title: 'Jurnal Sisfokom',
                link: ' https://jurnal.atmaluhur.ac.id/index.php/sisfokom/ '
            },
            {
                title: 'JMSK',
                link: 'https://journal.unhas.ac.id/index.php/jmsk/about'
            }
        ]
    },
    {
        category: 'Regular',
        listPaper: [
            {
                title: 'Komputasi',
                link: 'https://ejournal.jak-stik.ac.id/index.php/komputasi'
            },
            {
                title: 'Brillant',
                link: 'https://jurnal.unublitar.ac.id/index.php/briliant'
            },
            {
                title: 'Explore',
                link: 'https://jurnal.ubl.ac.id/ '
            },
            {
                title: 'MIB',
                link: 'https://ejurnal.stmik-budidarma.ac.id/index.php/mib'
            }
        ]
    },
    {
        category: 'Fast Track',
        listPaper: [
            {
                title: 'JSINBIS',
                link: ' https://ejournal.undip.ac.id/index.php/jsinbis'
            },
            {
                title: 'G-Tech',
                link: 'https://ejournal.uniramalang.ac.id/index.php/g-tech/index'
            },
            {
                title: 'J-ICOM',
                link: 'http://ejurnalunsam.id/index.php/jicom'
            },
            {
                title: 'JIPI',
                link: 'https://jurnal.stkippgritulungagung.ac.id/index.php/jipi/index'
            }
        ]

    }
];

const SectionRecomendedPaper = () => {
    return (
        <div className="px-6 sm:px-12 lg:px-[118px] flex flex-col items-center justify-center ">
            <div className="text-center py-14 space-y-6 lg:w-[1051px]">
                <SectionTitle
                    title="Rekomendasi Publish Paper"
                    description="Mahasiswa yang malas memang disebut sampah, tetapi mahasiswa yang meninggalkan skripsi lebih rendah dari sampah"
                />
            </div>
            <img className="p-12 max-w-full" src={Sinta} alt="Sinta logo" />
            <div className="grid gap-6 space-y-6 sm:grid-cols-1 md:grid-cols-2 md:space-y-0 lg:grid-cols-3 xl:grid-cols-3 lg:space-y-0">
                {dataRecomendasiPaper.map((categoryData, index) => (
                    <Container
                        key={index}
                        title={categoryData.category}
                        description={
                            categoryData.category === 'Free'
                                ? "Free Submission adalah jalur gratis tanpa biaya, tapi prosesnya lama hingga berbulan-bulan. Cocok untuk peneliti tanpa anggaran, namun butuh kesabaran."
                                : categoryData.category === 'Regular'
                                    ? "Regular Submission adalah jalur berbayar dengan biaya standar (APC) dan proses lebih cepat, biasanya 3-6 bulan. Artikel lebih terorganisir, tapi memerlukan biaya tambahan."
                                    : "Fast Track Submission adalah jalur berbayar dengan proses sangat cepat. Cocok untuk kebutuhan mendesak, tapi biayanya tinggi dan kadang kurang selektif."
                        }
                        listPaper={categoryData.listPaper}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionRecomendedPaper;

interface TitledescriptionProps {
    title: string;
    description: string;
    listPaper: {
        title: string,
        link: string
    }[];
}

function Container({ title, description, listPaper }: TitledescriptionProps) {
    return (
        <div className="w-full sm:w-[385px] md:w-full p-6 bg-slate-900 rounded-3xl space-y-6">
            <h1 className="text-center text-2xl sm:text-3xl lg:text-xl font-bold">{title}</h1>
            <p className="text-xl sm:text-lg md:text-xl ">{description}</p>
            <div className="space-y-6 p-6 bg-black rounded-xl">
                <ul className="space-y-4 sm:space-y-6">
                    {listPaper.map((paper, index) => (
                        <List key={index} title={paper.title} link={paper.link} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

interface ListProps {
    title: string;
    link: string;
}

function List({ title, link }: ListProps) {
    return (
        <li className="bg-slate-500 rounded-lg p-3 sm:p-6 text-base sm:text-xl md:p-3">
            <a href={link} target="_blank" className="flex justify-between items-center text-white">
                {title}
                <IoIosArrowForward />
            </a>
        </li>
    );
}
