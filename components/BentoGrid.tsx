import { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";

type BentoGridProps = {
  Icons: JSX.Element[];
  Icons1: JSX.Element[];
};

const BentoGrid: React.FC<BentoGridProps> = ({ Icons, Icons1 }) => {

  const interests = [
    "Web3", "AI/ML", "System Design", "Open Source", "DevOps"
  ];

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

    const email = "yashgandhi.dev@gmail.com"; // Replace with your email
    const [isCopied, setIsCopied] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
  
    const handleCopy = async () => {
      try {
        // Copy the static email to the clipboard
        await navigator.clipboard.writeText(email); 
        setIsCopied(true); // Show "Copied!" effect
        setShowNotification(true); // Show notification
  
        // Reset button text after 2 seconds
        setTimeout(() => setIsCopied(false), 2000);
        // Hide notification after 3 seconds
        setTimeout(() => setShowNotification(false), 3000); 
      } catch (err) {
        console.error("Failed to copy email:", err);
      }
    }
    
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

  return (
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
        Driven by a passion for technology and innovation, I thrive in dynamic environments, continuously learning and leveraging modern tools to solve complex problems.
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
  className="bento-item bg-gray-800 col-span-6 md:col-span-2 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center"
  whileHover={{ scale: 1.02 }}
  style={{ position: "relative" }}
>
  <h3 className="text-xl font-semibold mb-4 text-center text-white">
    Do you want to start a project together?
  </h3>

  <div className="flex flex-col items-center gap-4 mt-4">
    {/* Button to Copy Email */}
    <button
      onClick={handleCopy}
      style={{
        padding: "12px 24px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: isCopied ? "#48bb78" : "#4c7dff", // Green when copied, blue otherwise
        color: "#fff",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.3s ease",
        boxShadow: isCopied
          ? "0 4px 12px rgba(72, 187, 120, 0.5)"
          : "0 4px 12px rgba(76, 125, 255, 0.5)",
        transform: isCopied ? "scale(1.05)" : "scale(1)",
      }}
      aria-label="Copy email"
    >
      {isCopied ? "Copied to Clipboard" : "Copy My Email"}
    </button>

    {/* Notification inside the bento-item */}
    {showNotification && (
      <div
        style={{
          bottom: "16px",
          backgroundColor: "#333",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "opacity 0.3s ease-in-out",
          fontSize: "14px",
        }}
      >
        Email copied to clipboard!
      </div>
    )}
  </div>
</motion.div>


<motion.div
  className="bento-item bg-gray-800 col-span-6 md:col-span-4 p-6 rounded-lg shadow-lg"
  whileHover={{ scale: 1.02 }}
>
  <h3 className="text-xl font-semibold mb-4">Interests</h3>
  <p className="text-gray-300"></p>
  <div className="flex flex-wrap gap-4"> {/* Use flex and gap for controlled spacing */}
    {interests.map((interest, index) => (
      <motion.span
        key={index}
        variants={item}
        className="px-3 py-1 bg-zinc-800/50 backdrop-blur-sm rounded-full text-sm text-zinc-300 border border-zinc-700/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {interest}
      </motion.span>
    ))}
  </div>
</motion.div>



    {/* Small Item */}
    <motion.div
      className="bento-item bg-gray-800 col-span-6 md:col-span-2 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-4">Creative Vision</h3>
      <ul className="list-disc pl-5 text-gray-300">
        <li>Transforming ideas into elegant digital experiences</li>
        {/* <li>Top 1% Stack Overflow</li> */}
      </ul>
    </motion.div>
  </div>
</section>
  );
};

export default BentoGrid;
