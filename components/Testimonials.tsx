import { motion } from "framer-motion";
import Image from "next/image";

const Testimonials: React.FC = () => {
    const testimonials = [
        {
          name: "Sarah Johnson",
          role: "CEO at TechCorp",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          text: "Yash&apos;s work on our platform exceeded all expectations. His attention to detail and technical expertise are outstanding."
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
          text: "Exceptional problem-solving skills and a great team player. Would definitely work with Yash again."
        }
      ];
    return (
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
    )
}

export default Testimonials;