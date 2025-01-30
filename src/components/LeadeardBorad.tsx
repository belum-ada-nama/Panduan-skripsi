import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

interface Student {
    name: string;
    completedChapters: number;
}

interface LeaderboardProps {
    students: Student[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ students }) => {

    const sortedStudents = students.sort((a, b) => b.completedChapters - a.completedChapters);

    const getRankStyle = (index: number) => {
        switch (index) {
            case 0:
                return {
                    bg: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
                    icon: '🏆',
                    text: 'text-yellow-100',
                    shadow: 'shadow-yellow-500/50',
                };
            case 1:
                return {
                    bg: 'bg-gradient-to-r from-gray-400 to-gray-600',
                    icon: '🥈',
                    text: 'text-gray-100',
                    shadow: 'shadow-gray-500/50',
                };
            case 2:
                return {
                    bg: 'bg-gradient-to-r from-amber-600 to-amber-800',
                    icon: '🥉',
                    text: 'text-amber-100',
                    shadow: 'shadow-amber-500/50',
                };
            default:
                return {
                    bg: 'bg-gradient-to-r ',
                    icon: `${index + 1}`,
                    text: 'text-white',
                    shadow: 'shadow-purple-500/50',
                };
        }
    };

    return (
        <div className="p-6 bg-gradient-to-br from-gray-900 to-indigo-900 min-h-screen flex flex-col items-center justify-center">
            <div className='absolute top-6 left-6'><a href="/"><IoIosArrowBack color='white'  size={30}/></a></div>
            <div className='w-full border-b-2 mb-16 py-2 max-w-md'>
                <span className='text-white font-poppins font-semibold'>Update 30 Januari 2025</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-white text-center font-poppins animate-bounce">
                🏆 Leaderboard Skripsi 🏆
            </h2>
            <div className="w-full max-w-md space-y-4">
                {sortedStudents.map((student, index) => {
                    const rankStyle = getRankStyle(index);
                    return (
                        <div
                            key={index}
                            className={`flex items-center justify-between ${rankStyle.bg} p-4 rounded-lg shadow-2xl ${rankStyle.shadow} hover:scale-105 transition-all duration-300 ease-in-out`}
                        >
                            <div className="flex items-center">
                                <span className={`w-10 h-10 flex items-center justify-center rounded-full ${rankStyle.text} font-bold text-lg shadow-lg`}>
                                    {rankStyle.icon}
                                </span>
                                <span className={`ml-4 font-medium text-lg ${rankStyle.text}`}>
                                    {student.name}
                                </span>
                            </div>
                            <span className={`inline-flex items-center px-4 py-2 rounded-full ${rankStyle.bg} ${rankStyle.text} font-bold text-lg shadow-lg`}>
                                {student.completedChapters} Bab
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="mt-8 text-center text-white/70 text-sm">
                🚀 Terus semangat dan push skripsimu!
            </div>
        </div>
    );
};

export default Leaderboard;