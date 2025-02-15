import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="sticky top-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md border-b border-gray-700 shadow-lg transition-all">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex-shrink-0">
        <span className="text-xl font-bold text-white">Portfolio</span>
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
  );
};

export default Navbar;
