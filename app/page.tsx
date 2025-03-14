'use client';

import { animate, motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaReact, FaNode, FaPython, FaCopy, FaEnvelope, FaJs, FaHtml5, FaCss3, FaAws, FaDocker  } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs,   SiMongodb, SiDotnet, SiCsharp, SiAzuredevops, SiMysql  } from 'react-icons/si';

import clsx from 'clsx';
import Card from './Card';
import useMeasure from "react-use-measure";
import Projects from '@/components/Projects';
import BentoGrid from '@/components/BentoGrid'
import WorkExperience from '@/components/WorkExperience'
import Footer from '@/components/Footer';
import ContactMe from '@/components/ContactMe';
import Testimonials from '@/components/Testimonials';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {

  const RowIcons1 = [
    <FaReact className="text-blue-500 text-4xl" key="react" />,       // React
    <SiNextdotjs className="text-black text-4xl" key="next" />,      // Next.js
    <FaNode className="text-green-500 text-4xl" key="node" />,       // Node.js
    <SiTypescript className="text-blue-600 text-4xl" key="typescript" />,  // TypeScript
    <FaJs className="text-yellow-500 text-4xl" key="js" />,       // JavaScript
    <FaPython className="text-green-500 text-4xl" key="python" />,    // Python
    <FaHtml5 className="text-orange-600 text-4xl" key="html" />,     // HTML
    <FaCss3 className="text-blue-600 text-4xl" key="css" />      // CSS
  ]
  
  const RowIcons2 = [
    <SiDotnet className="text-purple-600 text-4xl" key="dotnet" />,    // .NET Core
    <SiCsharp className="text-purple-500 text-4xl" key="csharp" />,    // C#
    <SiMysql className="text-blue-500 text-4xl" key="mysql" />,       // MySQL
    <SiMongodb className="text-green-600 text-4xl" key="mongodb" />,       // MongoDB
    <SiTailwindcss className="text-teal-400 text-4xl" key="tailwind" />, // Tailwind CSS
    <FaDocker className="text-blue-400 text-4xl" key="docker" />,      // Docker
    <FaAws className="text-orange-500 text-4xl" key="aws" />,       // AWS
    <SiAzuredevops className="text-blue-600 text-4xl" key="azure" />  // Azure DevOps
  ]
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.bento-item').forEach((item) => {
        const rect = (item as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (item as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (item as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <Navbar/>
      <main className="min-h-screen space-dots">
        <Hero/>
        <BentoGrid Icons={RowIcons1} Icons1={RowIcons2} />
        <WorkExperience/>
        <Projects/>
        <ContactMe/>
        <Testimonials/>
        <Footer/>
      </main>
    </>
  );
}