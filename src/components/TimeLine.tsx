import React, { forwardRef, useState, useRef, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./ui/Button";

// Reusable hook to detect if an element is in the viewport
function useOnScreen(ref: React.RefObject<HTMLElement>, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold: 0.2, // Trigger the animation when 20% of the element is in view
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

// TimeLine Section Component
interface TimeLineProps {
  ref?: React.RefObject<HTMLDivElement>;
}
interface SectionTimeLineProps {
  activeContent: "preProposal" | "preSidang" | "preWisuda";
  setActiveContent: React.Dispatch<React.SetStateAction<"preProposal" | "preSidang" | "preWisuda">>;
}

const TimeLine = forwardRef<HTMLDivElement, TimeLineProps>((_, ref) => {
  const [activeContent, setActiveContent] = useState<"preProposal" | "preSidang" | "preWisuda">("preProposal");

  const contentData: { [key in "preProposal" | "preSidang" | "preWisuda"]: { title: string; description?: string }[] } = {
    preProposal: [
      { title: "Mencari Fenomena Skripsi dan Metode Penyelesaian", description: "Mengidentifikasi topik atau masalah yang relevan untuk penelitian serta metode penyelesaian yang sesuai." },
      { title: "Menentukan Judul Skripsi", description: "Judul harus mengandung PMR (Public, Method dan Result)" },
      { title: "Melakukan Bimbingan dan Revisi Proposal (Bebas Dosen)", description: "Sering-seringlah melakukan bimbingan dengan dosen promotor." },
      { title: "Persiapan Seminar Proposal", description: "Menyiapkan materi presentasi, memahami argumen penelitian dan berlatih menjawab pertanyaan dosen penguji" },
      { title: "Seminar Proposal", description: "Memaparkan penelitian di depan penguji untuk mendapatkan persetujuan dan masukan." },
    ],
    preSidang: [
      { title: "Persiapan Sidang Skripsi", description: "Menyiapkan dokumen dan presentasi untuk sidang skripsi." },
      { title: "Melanjutkan Skripsi Bab 4 - 5", description: "Menyusun hasil penelitian dan pembahasan." },
      { title: "Melakukan Bimbingan dan Revisi Proposal", description: "Menyelesaikan perbaikan bab 4 dan 5." },
      { title: "Submit Jurnal Minimal Sinta 4", description: "Membuat artikel penelitian dari Skripsi dan mengirimkan artikel penelitian tersebut ke jurnal." },
      { title: "Sidang", description: "Melaksanakan sidang untuk mempertahankan hasil penelitian." },
    ],
    preWisuda: [
      { title: "Revisi Post Sidang", description: "Melakukan perbaikan berdasarkan masukan dari sidang." },
      { title: "Pengumpulan Berkas Skripsi", description: "Menyelesaikan semua dokumen administratif." },
      { title: "Yudisium", description: "Penetapan kelulusan oleh fakultas." },
      { title: "Finish - War is over" },
    ],
  };

  return (
    <div ref={ref} className="w-full px-6 sm:px-12 lg:px-[118px] bg-[#060A16] text-white pb-60 pt-20">
      <SectionTimeLine activeContent={activeContent} setActiveContent={setActiveContent} />
      <div className="flex flex-col space-y-3 lg:space-y-12">
        {contentData[activeContent].slice(0, contentData[activeContent].length - 1).map((item, index) => (
          <div key={index} className="flex w-full">
            <TimelineBlokRight title={item.title} description={item.description} />
          </div>
        ))}

        {/* Menampilkan hanya item terakhir di dalam TimelineBlokAkhir */}
        {contentData[activeContent].length > 0 && (
          <TimelineBlokAkhir
            title={contentData[activeContent][contentData[activeContent].length - 1].title}
            description={contentData[activeContent][contentData[activeContent].length - 1].description}
          />
        )}
      </div>
    </div>
  );
});

export default TimeLine;

// SectionTimeLine Component to toggle between timeline stages
function SectionTimeLine({ activeContent, setActiveContent }: SectionTimeLineProps) {
  return (
    <div className="flex flex-col items-center mb-20 ">
      <div className="text-center pb-14 space-y-6 lg:w-[1051px]">
        <SectionTitle
          title="Roadmap"
          description="Skripsi ternyata selesai jika dikerjakan jangan mengeluh Bre, satu langkah untuk  menjadi manusia yang berguna bagi diri sendiri"
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

interface TimelineBloks {
  title: string;
  description?: string;
}

// TimelineBlokRight for individual timeline blocks
function TimelineBlokRight({ title, description }: TimelineBloks) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`flex space-x-12 h-auto border-white transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex  flex-col ">
        <div className="relative top-4">
          <div className="w-6 h-6 bg-white rounded-full absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"></div>
        </div>
        <div className="w-1 h-full relative">
          <div className="w-1 h-full pb-36 lg:pb-64 bg-white absolute top-6"></div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex space-x-2 items-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
          </div>
          <div>
            <p className="text-gray-600 text-base md:text-xl lg:text-2xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// TimelineBlokAkhir for the last block in the timeline
function TimelineBlokAkhir({ title, description }: TimelineBloks) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`flex space-x-12 h-auto transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex  flex-col ">
        <div className="relative top-4">
          <div className="w-6 h-6 bg-white rounded-full absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"></div>
          <div className="w-1 h-full  relative">
            <div className="w-1 h-full pb-28 lg:hidden bg-white absolute top-2"></div>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex space-x-2 items-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
          </div>
          <div>
            <p className="text-gray-600 text-base md:text-xl lg:text-2xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
