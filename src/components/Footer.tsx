import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060A16] text-white text-center px-4 md:px-10 lg:px-[328px] pt-10 md:pt-[116px] pb-10 md:pb-[50px]">
      <div>
        <span className='text-sm md:text-xl'>
          Awal bukan berarti akhir. Akhir bukan berarti awal. Semangat semangat dan semangat. Semua akan baik-baik saja ketika kita percaya dan yakin.
        </span>
        <h2 className="mt-4">Teknik Informatika Universitas Nusaputra Sukabumi</h2>
      </div>

      <div className="mt-[110px]">
        <div className="flex items-center justify-center text-center">
          <span className="text-sm text-gray-500 w-full">
            © 2025 <a href="https://skripsiconnect.com/" className="hover:underline">Skripsi™</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
