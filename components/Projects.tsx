import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Built a real-time analytics platform using React, Node.js, and TensorFlow, processing over 1M data points daily.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Node.js", "AI"],
  },
  {
    title: "Cloud Infrastructure Manager",
    description: "Developed a cloud management tool that reduced infrastructure costs by 35% for enterprise clients.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
    tags: ["AWS", "TypeScript", "Docker"],
  },
  {
    title: "E-Commerce Recommendation System",
    description: "Implemented a machine learning-based recommendation engine that increased sales conversion by 20%.",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221",
    tags: ["Python", "Flask", "ML"],
  },
  {
    title: "Real-Time Chat Application",
    description: "Built a secure, real-time chat application with WebSockets and end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["React", "Socket.io", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-opacity-10 bg-white p-6 rounded-lg glow project-card overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="project-image"
              />
            </div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-4">{project.description}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
