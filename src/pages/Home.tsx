import React, { useRef } from "react";
import Hero from "../components/Hero";
import SectionFileSyarat from "../components/SectionFileSyarat";
import SectionToolsHelper from "../components/SectionToolsHelper";
import TimeLine from "../components/TimeLine";
import DevTeam from "../components/DevTeam";
import SectionRecomendedPaper from "../components/SectionRecomendedPaper";
import SectionDoandDont from "../components/SectionDoandDont";
import SectionTemplateChat from "../components/SectionTemplateChat";
import Accordion from "../components/Accordion";

function Home() {
  const section1Ref = useRef<HTMLDivElement>(null); // Ref untuk SectionFileSyarat
  const section2Ref = useRef<HTMLDivElement>(null); // Ref untuk SectionToolsHelper

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#060A16] text-white font-san-francisco">
      
      <Hero
        scrollToSection={scrollToSection}
        section1Ref={section1Ref}
        section2Ref={section2Ref}
      />


      <SectionFileSyarat  />
      <TimeLine ref={section1Ref}/>
      <SectionRecomendedPaper />
      <SectionDoandDont />
      <SectionTemplateChat />
      <SectionToolsHelper ref={section2Ref} />

      {/* Konten lainnya */}
      <div className="w-full px-4 md:px-10 lg:px-[185px] py-10 md:py-20">
        <Accordion
          questions={[
            {
              question: 'Bagaimana kalau ada proposal mahasiswa yang ditolak saat seminar proposal, Apakah seminar proposalnya harus diulangi?',
              answer: 'Jika proposal dinyatakan tidak layak saat seminar maka mahasiswa tersebut harus mengulang pengajuan judul proposal kepada dosen pembimbing tanpa melakukan seminar ulang.'
            },
          ]}
        />
      </div>
      <DevTeam />
    </div>
  );
}

export default Home;