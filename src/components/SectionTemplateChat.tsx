import SectionTitle from "./SectionTitle";
import { MdContentCopy } from "react-icons/md";




function SectionTemplateChat() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Teks berhasil disalin!");
    }).catch((error) => {
      alert("Gagal menyalin teks: " + error);
    });
  };

  return (
    <div>
      <div className="text-center py-20 px-6 space-y-6 lg:w-[1051px] mx-auto">
        <SectionTitle
          title="Template Bimbingan ke Dosen"
          description="Template ini dirancang untuk membantumu menyusun komunikasi yang jelas dan efektif dengan dosen, serta memastikan bahwa semua informasi yang diperlukan disampaikan dengan baik"
        />
        <div className="p-4 rounded-lg space-y-4">
          {/* Pesan Pengirim */}
          <div className="flex justify-end relative">
            <div className="max-w-[70%] bg-[#D9FDD3] text-black p-3 rounded-lg relative text-start">
              <p>“Assalamualaikum Wr. Wb.
                Selamat siang Bu, mohon maaf mengganggu. Saya nama NIM nim, TI angkatan. Pada semester ini saya berencana untuk menyelesaikan skripsi. Lalu sesuai arahan dari Pak Alam, Ibu bersama dengan Pak nama penguji lain akan menjadi penguji 1 dan 2 saya. Mohon bimbingannya Ibu. Selain itu, kalau boleh tahu apa minggu depan Ibu ada waktu senggang untuk melaksanakan seminar proposal saya? Terimakasih.Wassalamualaikum Wr. Wb.”</p>
             

            </div>
            <div className="cursor-pointer">
              <button
                className="mt-2 p-4 absolute -bottom-10 -right-4 text-white rounded-lg  flex items-center justify-center"
                onClick={() => copyToClipboard("Assalamualaikum Wr. Wb. Selamat siang Bu, mohon maaf mengganggu. Saya nama NIM nim, TI angkatan. Pada semester ini saya berencana untuk menyelesaikan skripsi. Lalu sesuai arahan dari Pak Alam, Ibu bersama dengan Pak nama penguji lain akan menjadi penguji 1 dan 2 saya. Mohon bimbingannya Ibu. Selain itu, kalau boleh tahu apa minggu depan Ibu ada waktu senggang untuk melaksanakan seminar proposal saya? Terimakasih.Wassalamualaikum Wr. Wb.")}>
                <MdContentCopy  />
              </button>
            </div>

          </div>

          {/* Pesan Penerima */}
          <div className="flex justify-start relative">
            <div className="max-w-[70%] bg-white text-black p-3 rounded-lg relative">
              <p>Halo, terima kasih sudah menghubungi. Apa yang ingin kamu tanyakan?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTemplateChat;
