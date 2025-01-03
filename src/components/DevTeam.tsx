import IconLinkedin from '../assets/Linkedin.svg';
import IconGithub from '../assets/github.svg';
import ProfilTeguh from '../assets/teguh.png';
import ProfilHaldies from '../assets/haldies.png';
import ProfilDila from '../assets/dila.png';
import ProfilAngga from '../assets/angga.png';

function DevTeam() {
    const teamMembers = [
        {
            name: 'Asep Teguh Hidayat',
            role: 'Backend Developer',
            imageUrl: ProfilTeguh,
            github: 'https://github.com/asep',
            linkedin: 'https://linkedin.com/in/asep',
        },
        {
            name: 'Haldies Gerhardien Pasya',
            role: 'Frontend Developer',
            imageUrl: ProfilHaldies,
            github: 'https://github.com/haldies',
            linkedin: 'https://linkedin.com/in/haldies',
        },
        {
            name: 'Dila Aura Futri',
            role: 'Researcher',
            imageUrl: ProfilDila,
            github: 'https://github.com/dila',
            linkedin: 'https://linkedin.com/in/dila',
        },
        {
            name: 'Angga Maulana Yusup',
            role: 'UI/UX Designer',
            imageUrl: ProfilAngga,
            github: 'https://github.com/angga',
            linkedin: 'https://linkedin.com/in/angga',
        },
    ];

    return (
        <div className='w-full p-6 sm:p-10 md:p-12'>
            <div className='w-full flex justify-center flex-col items-center space-y-3'>
                <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>DEV TEAM</h1>
                <p className='italic text-lg sm:text-xl lg:text-2xl'>
                    kontribusi dari dev team terbaik dari universitas nusaputra
                </p>
            </div>
            <div className='grid grid-cols-2 lg:px-36 sm:grid-cols-4 lg:grid-cols-4 mt-20'>
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center gap-3'>
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className='w-12 h-12 sm:w-16 sm:h-16 lg:w-16 lg:h-16 rounded-full object-cover'
                        />
                        <div className='text-center'>
                            <h1 className='font-bold text-xl sm:text-2xl'>{member.name}</h1>
                            <p className='text-sm sm:text-base'>{member.role}</p>
                        </div>
                        <div className='flex gap-4 justify-center'>
                            {member.github && (
                                <div>
                                    <a href={member.github} target='_blank' rel='noopener noreferrer'>
                                        <img src={IconGithub} alt="GitHub" className='w-6 h-6 sm:w-8 sm:h-8' />
                                    </a>
                                </div>
                            )}
                            {member.linkedin && (
                                <div>
                                    <a href={member.linkedin} target='_blank' rel='noopener noreferrer'>
                                        <img src={IconLinkedin} alt="LinkedIn" className='w-6 h-6 sm:w-8 sm:h-8' />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DevTeam;
