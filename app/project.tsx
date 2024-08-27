"use client"; // Add this at the very top of the file
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons from React Icons
import React, { useState } from "react";

const projectData = [
    {
        title: "SiPatuh Mobile App",
        description: "This project is a mobile app-based project that records student violations and achievements, violations and achievements that will be recorded can be done via a QR code from the student's student card, violations and achievements that have been recorded can be printed like notes.",
        imgSrc: "/images/sipatuh.png", // Assuming the image is located in public/images
        link: "#"
    },
    {
        title: "AR Furniture",
        description: "This project is a mobile app based project that displays a list of items sold in a shop, the items sold can be viewed with Augmented Reality (AR).",
        imgSrc: "/images/ar.png", // Assuming the image is located in public/images
        link: "#"
    },
    // Add more projects as needed
];

const ProjectsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
        );
    };

    const project = projectData[currentIndex];

    return (
        <div className="bg-[#0d0d0d] text-white py-12 mt-32 animate-fade-in">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
                    Some of the Projects that I have made
                </h2>
                <p className="text-center text-gray-400 mb-12">
                    The following are several projects that I have done to train my skills and fill my productive time.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <button onClick={handlePrev} className="text-white text-xl p-3">
                        <FaChevronLeft />
                    </button>
                    <div className="bg-[#161616] rounded-lg p-6 flex flex-col md:flex-row items-start md:mx-4">
                        <img
                            src={project.imgSrc}
                            alt={project.title}
                            className="rounded-lg max-w-full md:max-w-[500px] shadow-lg"
                        />
                        <div className="mt-4 md:mt-0 md:ml-8 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>
                            </div>
                            {/* Uncomment the following block if you want to enable the link */}
                            {/* <a
                                href={project.link}
                                className="bg-[#0d0d0d] text-white px-2 py-1 rounded-full hover:bg-[#696969] self-end"
                            >
                                Kunjungi
                            </a> */}
                        </div>
                    </div>
                    <button onClick={handleNext} className="text-white text-xl p-3">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
