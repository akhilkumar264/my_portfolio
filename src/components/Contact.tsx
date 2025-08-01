import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on innovative projects or discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a 
                    href="mailto:akhilkumarreddy26@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    akhilkumarreddy26@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                <div className="bg-green-500 p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a 
                    href="tel:+917842230034"
                    className="text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    +91 7842230034
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                <div className="bg-purple-500 p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-purple-400">Andhra Pradesh, India</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/akhilkumar264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-4 rounded-full hover:bg-slate-600 transform hover:scale-110 transition-all duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/akhil-kumar-reddy-c-66443224b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transform hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-500 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;