'use client';

import { animate, motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaReact, FaNode, FaPython, FaCopy, FaEnvelope, FaJs, FaHtml5, FaCss3, FaAws, FaDocker  } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs,   SiMongodb, SiDotnet, SiCsharp, SiAzuredevops, SiMysql  } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import clsx from 'clsx';
import Card from './Card';
import useMeasure from "react-use-measure";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const formRef = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

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
  
  const xTranslation1 = useMotionValue(0);
  const xTranslation2 = useMotionValue(0);

  useEffect(() => {
    const controls1 = animate(xTranslation1, [-100, 0], {
      ease: "linear",
      duration: 30,
      repeat: Infinity,
    });

    const controls2 = animate(xTranslation2, [0, -100], {
      ease: "linear",
      duration: 30,
      repeat: Infinity,
    });

    return () => {
      controls1.stop();
      controls2.stop();
    };
  }, [xTranslation1, xTranslation2]);


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

  const copyEmail = () => {
    navigator.clipboard.writeText('john.anderson@example.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formRef.current) {
      emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        setMessageSent(true);
        if (formRef.current) formRef.current.reset();
      });
    }
  };

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

        <section id="skills" className="py-20 px-4 md:px-20">
  <h2 className="text-4xl font-bold mb-10 text-center">About & Skills</h2>
  <div
    className="bento-grid max-w-6xl mx-auto grid grid-cols-6 gap-6"
    style={{ gridAutoRows: 'minmax(150px, auto)' }}
  >
    {/* Large Item */}
    <motion.div
      className="bento-item bg-gray-800 col-span-6 md:col-span-4 md:row-span-2 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-semibold mb-4">About Me</h3>
      <p className="text-gray-300">
        A passionate developer with a love for clean code and innovative solutions. I specialize in building scalable web applications and have worked with Fortune 500 companies to deliver high-impact software solutions.
      </p>
    </motion.div>
{/* Medium Item */}
<motion.div
  className="bento-item bg-gray-800 col-span-6 md:col-span-2 p-6 rounded-lg shadow-lg"
  whileHover={{ scale: 1.02 }}
>
  <h3 className="text-xl font-semibold mb-4">My Tech Stack</h3>

  {/* First Row */}
  <div className="overflow-hidden mb-4">
    <motion.div
      className="flex gap-8" // Increased gap between icons
      style={{ x: xTranslation1 }}
    >
      {[...Icons, ...Icons].map((Icon, idx) => (
        <div key={`row1-${idx}`} className="text-4xl">
          {Icon}
        </div>
      ))}
    </motion.div>
  </div>

  {/* Second Row */}
  <div className="overflow-hidden">
    <motion.div
      className="flex gap-8" // Matching gap for second row
      style={{ x: xTranslation2 }}
    >
      {[...Icons1, ...Icons1].map((Icon, idx) => (
        <div key={`row2-${idx}`} className="text-4xl">
          {Icon}
        </div>
      ))}
    </motion.div>
  </div>
</motion.div>



    {/* Small Item */}
    <motion.div
      className="bento-item bg-gray-800 col-span-6 md:col-span-2 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-4">Contact</h3>
      <p className="text-gray-400">Email: john.anderson@example.com</p>
    </motion.div>

    {/* Medium Item */}
    <motion.div
      className="bento-item bg-gray-800 col-span-6 md:col-span-4 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-4">Experience</h3>
      <p className="text-gray-300">
        8+ Years Experience | 50+ Projects Completed | 30+ Happy Clients
      </p>
    </motion.div>

    {/* Small Item */}
    <motion.div
      className="bento-item bg-gray-800 col-span-6 md:col-span-2 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-4">Achievements</h3>
      <ul className="list-disc pl-5 text-gray-300">
        <li>AWS Certified Solutions Architect</li>
        <li>Top 1% Stack Overflow</li>
      </ul>
    </motion.div>
  </div>
</section>




        <section id="experience" className="py-20 px-4 md:px-20">
          <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-opacity-10 bg-white p-6 rounded-lg glow"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold">Senior Developer at Google</h3>
              <p className="text-gray-400">2020 - Present</p>
              <p className="mt-4">Led development of multiple full-stack applications, including Google Cloud Platform features and internal tools. Managed a team of 5 developers and improved system performance by 40%.</p>
            </motion.div>
            <motion.div
              className="bg-opacity-10 bg-white p-6 rounded-lg glow"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold">Tech Lead at Microsoft</h3>
              <p className="text-gray-400">2018 - 2020</p>
              <p className="mt-4">Spearheaded the development of Azure DevOps features, implementing CI/CD pipelines and improving deployment efficiency by 60%.</p>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 md:px-20">
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-opacity-10 bg-white p-6 rounded-lg glow project-card overflow-hidden"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Project 1"
                  layout="fill"
                  objectFit="cover"
                  className="project-image"
                />
              </div>
              <h3 className="text-2xl font-semibold">AI-Powered Analytics Platform</h3>
              <p className="mt-4">Built a real-time analytics platform using React, Node.js, and TensorFlow, processing over 1M data points daily.</p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-500 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-500 rounded-full text-sm">AI</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-opacity-10 bg-white p-6 rounded-lg glow project-card overflow-hidden"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040"
                  alt="Project 2"
                  layout="fill"
                  objectFit="cover"
                  className="project-image"
                />
              </div>
              <h3 className="text-2xl font-semibold">Cloud Infrastructure Manager</h3>
              <p className="mt-4">Developed a cloud management tool that reduced infrastructure costs by 35% for enterprise clients.</p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-orange-500 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-red-500 rounded-full text-sm">Docker</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 md:px-20">
          <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-blue-500 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors glow"
                >
                  Send Message
                </button>
              </form>
              {messageSent && (
                <p className="mt-4 text-green-500 text-center">
                  Message sent successfully!
                </p>
              )}
            </motion.div>
          </div>
        </section>

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

        <footer className="footer-gradient py-20 px-4 md:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">John Anderson</h3>
              <p className="text-gray-400 mb-6">
                Building digital experiences that make a difference. Let's create something amazing together.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-2xl hover:text-purple-400 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-2xl hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-2xl hover:text-sky-400 transition-colors"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  john.anderson@example.com
                </li>
                <li className="text-gray-400">
                  <span className="block">Location:</span>
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} John Anderson. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}