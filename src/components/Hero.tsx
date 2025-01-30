import React, { useState, useEffect } from "react";
import iconLogo from "../assets/logo.svg";
import Button from "./Button";

interface HeroProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  section1Ref: React.RefObject<HTMLDivElement>; // Terima ref untuk SectionFileSyarat
  section2Ref: React.RefObject<HTMLDivElement>; // Terima ref untuk SectionToolsHelper
}

const Hero = ({ scrollToSection, section1Ref, section2Ref }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full text-white px-6 sm:px-10 lg:px-20 lg:pb-[186px]">
      {/* Logo Section */}
      <div
        className={`flex justify-center transition-opacity duration-1000 border-b-2 relative ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={iconLogo} alt="Logo" className="w-36 h-36" />
        <div className="absolute bottom-0 right-0 p-2 rounded-tl-lg">
          <span>Sabtu, 18 Januari 2025</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        className={`flex flex-col items-center justify-center lg:space-y-0 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="container mx-auto p-4 text-center">
          {/* Title Section */}
          <div className="space-y-4">
            <span className="block py-6 text-lg sm:text-xl">PANDUAN SKRIPSI</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">TEKNIK INFORMATIKA</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">UNIVERSITAS NUSAPUTRA</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">SUKABUMI</h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mt-6">
            Dibuat untuk membantu mahasiswa karena pahlawan himmel akan melakukan hal yang sama
          </p>

          {/* Button Section */}
          <div className="space-x-2 flex justify-center mt-14">
            <Button
              variant="primary"
              size="small"
              onClick={() => scrollToSection(section1Ref)} // Scroll ke SectionFileSyarat
            >
              Road Map
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={() => scrollToSection(section2Ref)} 
            >
              Tools
            </Button>
            <Button
              variant="secondary"
              size="small"
              onClick={() => scrollToSection(section2Ref)} 
            >
              <a href="/leaderboard">Leaderboard</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;