import React from 'react';

// Sample images for educational institutions
const schools = [
    {
        name: 'SMKN 1 Bangil',
        imageUrl: '/images/nesaba.png', // Replace with actual image path
    },
    {
        name: 'Coming Soon',
        imageUrl: '/images/coming.png', // Replace with actual image path
    },
];

const School = () => {
    return (
        <section className="py-12 px-4 text-center mt-32 animate-fade-in">
            <h2 className="text-white text-6xl font-bold mb-4">The Education I Took</h2>
            <p className="text-zinc-500 mb-12">
                The following are the schools and education that I have taken throughout my life.
            </p>
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6'>
                {schools.map((school, index) => (
                    <div
                        key={index}
                        className='h-[160px] w-[160px] sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px] xl:h-[280px] xl:w-[280px] flex flex-col justify-between items-center bg-white/10 p-4 sm:p-4 rounded-xl'
                    >
                        <img
                            src={school.imageUrl}
                            alt={school.name}
                            className='h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40 object-cover'
                        />
                        <p className='text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-center text-white'>
                            {school.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default School;
