import React from 'react';

const skillImg = [
    { name: "Dart", imgSrc: "/images/dart.png" },
    { name: "JavaScript", imgSrc: "/images/js.png" }, // Jika gambar berada di public/images
];

const MyMain = () => {
    return (
        <section className="my-16 animate-fade-in">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
                <div className="flex flex-col md:flex-row items-center text-center md:text-left px-4 md:px-48 gap-8">
                    <div className="flex flex-col items-start">
                        <h3 className="text-6xl text-white font-bold">My Main Programming Language</h3>
                        <p className="mt-4 text-sm text-zinc-500">
                            Why do I use these two languages? Because I chose the profession as a mobile app developer and web developer, the languages I use are Dart and Javascript.
                        </p>
                    </div>
                    <div className="flex flex-row gap-8 mt-8 md:mt-0 px-4 md:px-8">
                        {skillImg.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center justify-center">
                                <div className="w-20 h-20 md:w-32 md:h-32 mb-2 overflow-hidden">
                                    <img
                                        src={skill.imgSrc}
                                        alt={skill.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-sm text-zinc-500">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyMain;
