import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6">
              <img 
                src="/image.png" 
                alt="Akhil Kumar Reddy" 
                className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            Akhil Kumar Reddy
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Aspiring Software Engineer
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Computer Science student passionate about problem solving, full-stack development, and intelligent systems.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-slate-600">
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>akhilkumarreddy26@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+91 7842230034</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/akhilkumar264"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-kumar-reddy-c-66443224b"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;