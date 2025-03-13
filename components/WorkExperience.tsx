import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  const workExperiences = [
    {
      title: 'Software Developer',
      company: 'Fiserv',
      duration: 'Jan 2024 - Nov 2024',
      description: 'Worked on BillMatrix, a bill payment service providing secure payment options, to implement Voltage, an encryption solution securing sensitive data in applications',
      delay: 0, // Optional delay for animation
    },
    // {
    //   title: 'Tech Lead',
    //   company: 'Microsoft',
    //   duration: '2018 - 2020',
    //   description: 'Spearheaded the development of Azure DevOps features, implementing CI/CD pipelines and improving deployment efficiency by 60%.',
    //   delay: 0.2, // Optional delay for animation
    // },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Work Experience</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {workExperiences.map((experience, idx) => (
          <motion.div
            key={idx}
            className="bg-opacity-10 bg-white p-6 rounded-lg glow"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: experience.delay || 0 }}
          >
            <h3 className="text-2xl font-semibold">{experience.title} at {experience.company}</h3>
            <p className="text-gray-400">{experience.duration}</p>
            <p className="mt-4">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
