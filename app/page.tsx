import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image';
import Skills from '@/app/skill';
import MyMain from '@/app/mymain';
import School from '@/app/school';
import ProjectsSection from '@/app/project';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen overflow-y-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="mt-20 mb-32 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <h1 className="py-3.5 px-0.5 z-10 text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Nnas
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="mt-32 mb-20 text-center animate-fade-in">
        <div className="text-sm text-zinc-500">
          <p>I am Hafizh Arrasyiid Syahbana, a Junior Mobile App Developer.</p>
          <p>I am currently studying at SMKN 1 Bangil Class XII PPLG, and I like pineapple.</p>
          <Link
            target="_blank"
            href="https://github.com/HafizhArrasyiidS"
            className="underline duration-500 hover:text-zinc-300"
          >
            Other things about me
          </Link>
        </div>
      </div>
      
      <MyMain/>
      <Skills/>
      <School/>
      <ProjectsSection/>

      {/* Footer or Additional Content */}
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          Thank you for visiting my portfolio. Feel free to explore my work!
        </h2>
      </div>
    </div>
  );

}
