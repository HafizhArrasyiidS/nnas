import React from 'react';

// Sample images for educational institutions
const schools = [
    {
        name: 'SMPN 2 Bangil',
        imageUrl: '/images/smp2.png', // Replace with actual image path
    },
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
            <h2 className="text-white text-6xl font-bold mb-4">School and education that I took </h2>
            <p className="text-zinc-500 mb-12">
                The following are the schools and education that I have taken throughout my life.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
                {schools.map((school, index) => (
                    <div key={index} className="w-full md:w-1/3 lg:w-1/4 bg-white/10 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={school.imageUrl}
                            alt={school.name}
                            className="w-full h-50 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-white text-xl">{school.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default School;
