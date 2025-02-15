import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-20">
    <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
    <div className="max-w-4xl mx-auto">
      <div className="bg-opacity-10 bg-white p-8 rounded-lg shadow-lg glow">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">
            Let&apos;s create something amazing together
            </h3>
            <p className="mt-4 text-gray-300">
              Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
            </p>
          </div>
          <div>
            <a href="mailto:yashgandhi.dev@gmail.com">
              <button className="text-gray-100 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 hover:from-gray-700 hover:via-gray-600 hover:to-gray-800 transition-all px-12 py-6 rounded-xl border border-gray-700 shadow-md">
                <span className="font-semibold text-lg">Email Me</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  ); 
};

export default ContactMe;
