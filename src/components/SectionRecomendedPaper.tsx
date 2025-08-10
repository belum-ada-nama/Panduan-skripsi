import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { IoIosArrowForward } from 'react-icons/io';

// Data hanya kategori Free
const dataRecomendasiPaper = [
    {
        category: 'Free',
        listPaper: [
            {
                title: 'Kesatria',
                link: 'https://tunasbangsa.ac.id/pkm/index.php/kesatria/pages/view/authorfees',
                publishMonth: 'Januari, April, Juli, Oktober',
                fee: 'Gratis',
                sintaRank: 'Sinta 5',
            },
            {
                title: 'Sistemasi',
                link: 'https://sistemasi.ftik.unisi.ac.id/index.php/stmsi',
                publishMonth: 'April, Oktober',
                fee: 'Gratis',
                sintaRank: 'Sinta 4',
            },
            {
                title: 'Jurnal Sisfokom',
                link: 'https://jurnal.atmaluhur.ac.id/index.php/sisfokom/',
                publishMonth: 'Januari, Juli',
                fee: 'Gratis',
                sintaRank: 'Sinta 5',
            },
            {
                title: 'JMSK',
                link: 'https://journal.unhas.ac.id/index.php/jmsk/about',
                publishMonth: 'Maret, September',
                fee: 'Gratis',
                sintaRank: 'Sinta 3',
            },
        ],
    },
];

// Filter options sama seperti sebelumnya
const allMonths = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
    'Setiap bulan',
];
const feeOptions = ['Semua', 'Gratis', 'Berbayar'];
const sintaOptions = ['Semua', 'Sinta 1', 'Sinta 2', 'Sinta 3', 'Sinta 4', 'Sinta 5', 'Sinta 6'];

// Interface
interface Paper {
    title: string;
    link: string;
    publishMonth: string;
    fee: string;
    sintaRank: string;
}

interface TitledescriptionProps {
    title: string;
    description: string;
    listPaper: Paper[];
}

interface ListProps extends Paper { }

// Komponen utama
const SectionRecomendedPaper = () => {
    const [filterMonth, setFilterMonth] = useState<string>('Semua');
    const [filterFee, setFilterFee] = useState<string>('Semua');
    const [filterSinta, setFilterSinta] = useState<string>('Semua');

    function filterPaper(paper: Paper) {
        if (filterMonth !== 'Semua') {
            if (!paper.publishMonth.includes(filterMonth)) return false;
        }
        if (filterFee !== 'Semua' && paper.fee !== filterFee) return false;
        if (filterSinta !== 'Semua' && paper.sintaRank !== filterSinta) return false;
        return true;
    }

    // Karena cuma ada satu kategori Free
    const filteredList = dataRecomendasiPaper[0].listPaper.filter(filterPaper);

    return (
        <div className="px-6 sm:px-12 lg:px-[118px] flex flex-col items-center justify-center">
            <div className="text-center py-14 space-y-6 lg:w-[1051px]">
                <SectionTitle
                    title="Rekomendasi Publish Paper"
                    description="Temukan jurnal yang cocok untuk publikasi paper Anda. Pilih berdasarkan bulan, biaya, dan peringkat Sinta."
                />
            </div>
            {/* Filter Controls */}
            <div className="mb-10 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center w-full max-w-5xl">
                <select
                    value={filterMonth}
                    onChange={(e) => setFilterMonth(e.target.value)}
                    className="p-3 rounded-lg text-lg bg-slate-800 text-white"
                >
                    {allMonths.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>

                <select
                    value={filterFee}
                    onChange={(e) => setFilterFee(e.target.value)}
                    className="p-3 rounded-lg text-lg bg-slate-800 text-white"
                >
                    {feeOptions.map((fee) => (
                        <option key={fee} value={fee}>
                            {fee}
                        </option>
                    ))}
                </select>

                <select
                    value={filterSinta}
                    onChange={(e) => setFilterSinta(e.target.value)}
                    className="p-3 rounded-lg text-lg bg-slate-800 text-white"
                >
                    {sintaOptions.map((sinta) => (
                        <option key={sinta} value={sinta}>
                            {sinta}
                        </option>
                    ))}
                </select>
            </div>

            {/* Tampilkan container kategori Free */}
            <Container
                title={dataRecomendasiPaper[0].category}
                description="Kategori ini berisi jurnal yang tidak memungut biaya untuk publikasi. Pilih berdasarkan bulan, biaya, dan peringkat Sinta."
                listPaper={filteredList}
            />
        </div>
    );
};

export default SectionRecomendedPaper;

// Container kategori Free
function Container({  listPaper }: TitledescriptionProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div
            ref={ref}
            className={`w-full sm:w-[385px] md:w-full p-6 bg-slate-900 rounded-3xl space-y-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
      
            <div className="space-y-6 p-6 bg-black rounded-xl">
                <ul className="space-y-4 sm:space-y-6">
                    {listPaper.map((paper, index) => (
                        <List key={index} {...paper} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

// List item
function List({ title, link, publishMonth, fee, sintaRank }: ListProps) {
    return (
        <li className="bg-slate-500 rounded-lg p-3 sm:p-6 text-base sm:text-xl md:p-3">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center text-white">
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm">Bulan Publish: {publishMonth}</p>
                    <p className="text-sm">Fee: {fee}</p>
                    <p className="text-sm">Sinta: {sintaRank}</p>
                </div>
                <IoIosArrowForward size={24} />
            </a>
        </li>
    );
}

// Hook animasi on screen
function useOnScreen(ref: React.RefObject<HTMLElement>, rootMargin = '0px') {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold: 0.2,
            }
        );

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, rootMargin]);

    return isVisible;
}
