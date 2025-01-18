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
            role: 'Project Manager',
            imageUrl: ProfilTeguh,
            github: 'https://github.com/asep',
            linkedin: 'https://linkedin.com/in/asep',
        },
        {
            name: 'Haldies Gerhardien Pasya',
            role: 'Web Developer',
            imageUrl: ProfilHaldies,
            github: 'https://github.com/haldies',
            linkedin: 'https://linkedin.com/in/haldies',
        },
        {
            name: 'Dila Aura Futri',
            role: ' Research and Development',
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
        <div className='w-full flex justify-center items-center flex-col p-6 sm:p-10 md:p-12 mt-36'>
            <div className='w-full flex justify-center flex-col items-center space-y-3 text-center'>
                <h1 className='font-bold text-3xl sm:text-4xl lg:text-2xl'>Dev Team</h1>
                <p className='italic text-lg sm:text-xl lg:text-xl'>
                    Hidup itu adalah soal dikenali dan diingat seseorang
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-36  '>
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center gap-3 '>
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className='w-24 h-24 sm:w-24 sm:h-24 lg:w-24 lg:h-24 rounded-full object-cover'
                        />
                        <div className='text-center'>
                            <h1 className='font-bold text-lg sm:text-xl lg:text-2xl'>{member.name}</h1>
                            <p className='text-sm sm:text-base'>{member.role}</p>
                        </div>
                        <div className='flex gap-4 justify-center mt-3'>
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
