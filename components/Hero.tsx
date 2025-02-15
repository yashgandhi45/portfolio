import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope  } from 'react-icons/fa';

const Hero: React.FC = () => {
      const { scrollY } = useScroll();
      const y = useTransform(scrollY, [0, 500], [0, -100]);
  return (
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
          src="/DSC_3543.JPG"
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
            Yash Gandhi
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Crafting exceptional digital experiences with modern technologies.
            Specialized in building scalable web applications and cloud solutions
            with 8+ years of industry experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a
              href="https://github.com/yashgandhi45"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-3xl hover:text-cyan-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yashgandhi45"
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
              href="mailto:yashgandhi.dev@gmail.com"
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
  );
};

export default Hero;
