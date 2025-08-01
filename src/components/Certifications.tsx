import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Microsoft Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      description: 'Fundamental concepts of artificial intelligence and machine learning on Azure platform.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Build Your Generative AI Skills',
      issuer: 'Microsoft & LinkedIn',
      description: 'Advanced training in generative AI technologies and implementation strategies.',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Excel with Copilot: AI-Driven Data Analysis',
      issuer: 'Microsoft',
      description: 'Modern data analysis techniques using AI-powered tools and Excel Copilot.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Award size={32} />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {cert.title}
              </h3>

              <div className="text-blue-600 font-semibold mb-4">
                {cert.issuer}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {cert.description}
              </p>

              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                <ExternalLink size={16} />
                View Certificate
              </button>
            </div>
          ))}
        </div>

        {/* Resume Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Complete Resume
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Download my complete resume to see all my qualifications, experience, and achievements in detail.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <a 
              href="https://drive.google.com/file/d/1x-76RfR3AvnNWqnSpPmIxA5n87rSoyKG/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              📄 Download Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;