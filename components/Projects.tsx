import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Visionary",
    description: "An interactive Miro-like whiteboard enabling real-time brainstorming and smooth collaboration",
    image: "/Visionarythumbnail.png", 
    tags: ["Next.js", "Clerk", "Convex"],
    url: "https://visionary-snowy.vercel.app", 
  },
  {
    title: "BlogPost",
    description: "A feature-rich blogging platform with tagging and seamless navigation for an enhanced reading experience",
    image: "/BlogPostThumbnail.png", 
    tags: ["ASP.NET Core", "C#", "Entity Framework Core"],
    url: "https://github.com/yashgandhi45/blogpost", 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-opacity-10 bg-white p-6 rounded-lg glow project-card overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.a
              href={project.url} 
              className="relative h-48 mb-4 overflow-hidden rounded-lg block"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="project-image"
              />

              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300"
                whileHover={{ opacity: 1 }}
              >
                <motion.span
                  className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  Visit Live Site
                </motion.span>
              </motion.div>
            </motion.a>

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