'use client';

import { animate, motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaReact, FaNode, FaPython, FaCopy, FaEnvelope, FaJs, FaHtml5, FaCss3, FaAws, FaDocker  } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs,   SiMongodb, SiDotnet, SiCsharp, SiAzuredevops, SiMysql  } from 'react-icons/si';
import Image from 'next/image';
import clsx from 'clsx';
import Card from './Card';
import useMeasure from "react-use-measure";
import Projects from '@/components/Projects';
import BentoGrid from '@/components/BentoGrid'
import WorkExperience from '@/components/WorkExperience'
import Footer from '@/components/Footer';
import ContactMe from '@/components/ContactMe';

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const formRef = useRef<HTMLFormElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);




  const Icons = [
    <FaReact className="text-blue-500 text-4xl" />,       // React
    <SiNextdotjs className="text-black text-4xl" />,      // Next.js
    <FaNode className="text-green-500 text-4xl" />,       // Node.js
    <SiTypescript className="text-blue-600 text-4xl" />,  // TypeScript
    <FaJs className="text-yellow-500 text-4xl" />,        // JavaScript
    <FaHtml5 className="text-orange-600 text-4xl" />,     // HTML
    <FaCss3 className="text-blue-600 text-4xl" />      // CSS
  ]
  
  const Icons1 = [
    <SiDotnet className="text-purple-600 text-4xl" />,    // .NET Core
    <SiCsharp className="text-purple-500 text-4xl" />,    // C#
    <SiMysql className="text-blue-500 text-4xl" />,       // MySQL
    <SiTailwindcss className="text-teal-400 text-4xl" />, // Tailwind CSS
    <FaDocker className="text-blue-400 text-4xl" />,      // Docker
    <FaAws className="text-orange-500 text-4xl" />,       // AWS
    <SiAzuredevops className="text-blue-600 text-4xl" />  // Azure DevOps
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


  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navItems = ['Home', 'Experience', 'Projects', 'Skills', 'Contact'];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "John's work on our platform exceeded all expectations. His attention to detail and technical expertise are outstanding."
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      text: "One of the most talented developers I've worked with. Delivered our project on time and with exceptional quality."
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      text: "Exceptional problem-solving skills and a great team player. Would definitely work with John again."
    }
  ];

  return (
    <>
      <nav className="fixed w-full z-50 nav-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="min-h-screen space-dots">
        <motion.section
          id="home"
          className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div style={{ y }} className="flex flex-col md:flex-row items-center justify-center gap-12 z-10 max-w-7xl mx-auto">
            <motion.div
              className="hero-image-container w-48 h-48 md:w-64 md:h-64"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
                alt="Profile"
                width={256}
                height={256}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </motion.div>
            <div className="text-center md:text-left max-w-2xl">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
                  John Anderson
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                  Senior Full Stack Developer
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Crafting exceptional digital experiences with modern technologies.
                  Specialized in building scalable web applications and cloud solutions
                  with 8+ years of industry experience.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-3xl hover:text-cyan-400"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-3xl hover:text-blue-400"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-3xl hover:text-sky-400"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="mailto:john.anderson@example.com"
                    className="social-icon text-3xl hover:text-pink-400"
                  >
                    <FaEnvelope />
                  </a>
                </div>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#projects"
                    className="bg-transparent border-2 border-cyan-500 text-white px-8 py-3 rounded-full hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    View Projects
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        </motion.section>

        <BentoGrid Icons={Icons} Icons1={Icons1} />






        <WorkExperience/>
        <Projects/>
        <ContactMe/>


        <section className="py-20 px-4 relative overflow-hidden">
          <h2 className="text-4xl font-bold mb-10 text-center">What People Say</h2>
          <div className="relative w-full overflow-hidden">
            <div className="testimonial-track flex gap-8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] md:min-w-[400px] bg-white/5 backdrop-blur-lg rounded-2xl p-6 flex flex-col gap-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </>
  );
}