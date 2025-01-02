import Accordion from "../components/Accordion";
import FeedbackForm from "../components/FeedbackForm";
import SectionTitle from "../components/SectionTitle";
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';



function Home() {
    const handleSubmit = (data: { name: string; email: string; message: string }) => {
        console.log('Data form yang dikirim:', data);
      };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="flex space-x-4 mb-10">
      <a href="https://vite.dev" target="_blank" className="hover:opacity-75">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" className="hover:opacity-75">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>

    <div className="card p-6 bg-white shadow-lg rounded-lg">

      <Accordion
        questions={[
          { question: 'kalau SKPI Belum Lengkap Bisa ikut Seminar  ahdjsjasd hjvhsdajhvjhsdjvh i ijdsvja ghjg sdhgvhas?', answer: 'Bisa harus minta surat ke prodi.' },
          { question: 'cape ngga kuliah dinusput?', answer: 'semangat yah' },
        ]}
      />
    </div>
    <SectionTitle title="Berkas Wajib" description="Siapkan dari awal karena sulit mendapatkannya" />
    <FeedbackForm onSubmit={handleSubmit}/>
  </div>
  )
}

export default Home