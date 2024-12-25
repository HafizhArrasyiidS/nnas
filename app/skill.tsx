import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3Alt size={140} />, label: "CSS" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <FaReact size={140} />, label: "React" }
];

const skillImg = [
    { name: "Flutter", imgSrc: "/images/flutter.webp" },
    { name: "Next.Js", imgSrc: "/images/next.png" },
    { name: "React", imgSrc: "/images/react.png" },
    { name: "Laravel", imgSrc: "/images/laravel.png" }
];

const Skills = () => {
    return (
        <div className='text-white w-[90%] max-w-[1200px] mx-auto p-4 sm:p-6 md:p-8 text-center animate-fade-in mt-10 sm:mt-16 md:mt-20'>
            <h2 className='text-6xl sm:text-6xl md:text-6xl font-bold mb-4'>Framework That I Use</h2>
            <p className='text-xs sm:text-sm md:text-base mb-4 sm:mb-6 text-zinc-500'>
                I use some of the frameworks below for productivity purposes or small projects.
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6'>
                {skillImg.map((skill, index) => (
                    <div
                        key={index}
                        className='flex flex-col justify-between items-center bg-white/10 p-3 sm:p-4 md:p-6 rounded-xl'>
                        <img 
                            src={skill.imgSrc} 
                            alt={skill.name} 
                            className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain' 
                        />
                        <p className='text-xs sm:text-sm md:text-base mt-2 md:mt-4'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
