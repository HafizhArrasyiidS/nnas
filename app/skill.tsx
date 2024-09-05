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
    { name: "Tailwind CSS", imgSrc: "/images/tailwind.png" }
];

const Skills = () => {
    return (
        <div className='text-white w-[90%] sm:w-[400px] md:min-w-[950px] mx-auto p-4 sm:p-8 text-center animate-fade-in mt-10 sm:mt-20'>
            <h2 className='text-6xl sm:text-6xl md:text-6xl font-bold mb-4'>Framework That I Use</h2>
            <p className='text-xs sm:text-sm md:text-base mb-4 sm:mb-6 text-zinc-500'>
                I use some of the frameworks below for productivity purposes or small projects.
            </p>
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6'>
                {skillImg.map((skill, index) => (
                    <div
                        key={index}
                        className='h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[200px] flex flex-col justify-between items-center bg-white/10 p-2 sm:p-4 rounded-xl'>
                        <img src={skill.imgSrc} alt={skill.name} className='h-16 w-16 sm:h-32 sm:w-32 md:h-40 md:w-40 object-cover' />
                        <p className='text-xs sm:text-sm md:text-base mt-2'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Skills;
