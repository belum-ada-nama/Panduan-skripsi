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
import FaQ from "../components/FaQ";

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


      <SectionFileSyarat />
      <TimeLine ref={section1Ref} />
      <SectionRecomendedPaper />
      <SectionDoandDont />
      <SectionTemplateChat />
      <SectionToolsHelper ref={section2Ref} />

      <FaQ />

      <DevTeam />
    </div>
  );
}

export default Home;