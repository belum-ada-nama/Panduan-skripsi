import React from "react";

interface ModalTipsProps {
    onClose: () => void;
}

const ModalTips: React.FC<ModalTipsProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-md text-center">
                <h2 className="text-xl font-bold mb-4">🎓 Tips Skripsi</h2>
                <p className="mb-4">
                    Skripsi mau selesai itu kuncinya <strong>bimbingan aja terus</strong>. Jangan kena mental "ish pusing", "ish bingung", atau nggak tahu harus mulai dari mana. <strong>Bimbingan!</strong>
                    <span className="text-red-600"> <strong>Jangan hilang, jangan ngilang, dan jangan skip bimbingan!</strong></span>
                </p>
                <button
                    onClick={onClose}
                    className="mt-2 px-4 py-2 bg-[#060A16] text-white rounded hover:bg-[#1a1f2e] transition duration-300"
                >
                    Siap, Terima Kasih!
                </button>
            </div>
        </div>
    );
};

export default ModalTips;
