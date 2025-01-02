import Accordion from "../components/Accordion";

import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import LayoutSection from "../components/LayoutSection";
import Button from "../components/button";
import { useState } from 'react';


function Home() {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        alert('Button clicked!');
    };
    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <LayoutSection />
                <LayoutSection />
                <LayoutSection />
                <LayoutSection />
                <LayoutSection />
                <LayoutSection />

            </div>
            <div className="space-x-4">
                <Button label="Primary Button" onClick={handleClick} />
                <Button label="Secondary Button" onClick={handleClick} variant="secondary" />
                <Button label="Disabled Button" onClick={handleClick} disabled={true} />
                <Button label="Toggle Disabled" onClick={() => setIsDisabled(!isDisabled)} disabled={isDisabled} />
            </div>
        </div>
    )
}

export default Home