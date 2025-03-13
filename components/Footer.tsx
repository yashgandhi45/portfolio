import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer-gradient py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Yash Gandhi</h3>
          <p className="text-gray-400 mb-6">
            Building digital experiences that make a difference. Let&apos;s create something amazing together.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/yashgandhi45"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl hover:text-purple-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yashgandhi45"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-2xl hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yash_gandhi"
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
          <h4 className="text-lg font-semibold mb-4">Let&apos;s Talk</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <span className="block">If you have any questions or ideas, don&apos;t hesitate to reach out</span>
            </li>
            <li className="text-gray-400">
              <span className="block font-semibold">Location:</span>
              Pune, India
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Yash Gandhi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
