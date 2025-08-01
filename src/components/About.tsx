import React from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Education</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Currently pursuing <strong>Integrated M.Tech in Computer Science & Engineering</strong> at Vellore Institute of Technology, India with a CGPA of <strong>8.64</strong>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-slate-50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-600 p-3 rounded-full text-white">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Passion</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Enthusiastic about applying technical knowledge to real-world solutions and creating intelligent systems that make a difference.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-slate-50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-600 p-3 rounded-full text-white">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Experience</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Experienced with academic projects and hands-on tools across the software stack, from front-end development to machine learning implementations.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              My Journey
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Full-Stack Development</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Building end-to-end applications with modern technologies like React, Node.js, and MongoDB.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Data Science & ML</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Developing intelligent systems using Python, machine learning algorithms, and deep learning frameworks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Problem Solving</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and system design.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <p className="text-slate-700 leading-relaxed italic">
                "I believe in continuous learning and staying updated with the latest technologies to solve complex problems and create meaningful impact through code."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;