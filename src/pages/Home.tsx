import React, { useRef, useState, useEffect } from "react";
import Hero from "../components/Hero";
import SectionFileSyarat from "../components/SectionFileSyarat";
import SectionToolsHelper from "../components/SectionToolsHelper";
import TimeLine from "../components/TimeLine";
import DevTeam from "../components/DevTeam";
import SectionRecomendedPaper from "../components/SectionRecomendedPaper";
import FaQ from "../components/FaQ";
import ChatButton from "../components/Assisten";
import ModalTips from "../components/ModalTips"; // <== Tambahkan ini

function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const [showTips, setShowTips] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Menampilkan tips saat pertama kali halaman dimuat
    const timer = setTimeout(() => {
      setShowTips(true);
    }, 1500); // Tunda sedikit agar muncul tidak terlalu cepat
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[#060A16] text-white font-san-francisco">
      {showTips && <ModalTips onClose={() => setShowTips(false)} />} {/* Modal muncul */}
      
      <Hero
        scrollToSection={scrollToSection}
        section1Ref={section1Ref}
        section2Ref={section2Ref}
      />
      <SectionFileSyarat />
      <TimeLine ref={section1Ref} />
      <SectionRecomendedPaper />
      <SectionToolsHelper ref={section2Ref} />
      <FaQ />
      <ChatButton />
      <DevTeam />
    </div>
  );
}

export default Home;
