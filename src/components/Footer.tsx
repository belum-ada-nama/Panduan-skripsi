import React from "react";
import IconLinkedin from '../assets/Linkedin.svg';
import IconGithub from '../assets/github.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060A16] text-white text-center px-4 md:px-10 lg:px-[328px] md:pt-[116px] pb-10 md:pb-[50px]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/haldies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={IconGithub} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition" />
          </a>
          <a
            href="https://linkedin.com/in/haldies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={IconLinkedin} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition" />
          </a>
        </div>
        <span className="text-sm text-gray-500">
          © 2025{' '}
          <a
            href="https://skripsiconnect.com/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Haldies G. Pasya
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
