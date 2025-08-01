import React from 'react';
import { Cpu, BookOpen, Shield, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SmartWear: AI-Powered T-Shirt Customization',
      description: 'Chatbot generates custom images from text, enhancing user interaction in t-shirt design.',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB'],
      icon: <Cpu size={32} />,
      color: 'from-blue-500 to-blue-600',
      category: 'AI/ML'
    },
    {
      title: 'E-Learning Recommendation System',
      description: 'Recommends courses based on skill levels and content similarity using machine learning.',
      technologies: ['Python', 'ML (SVM)', 'Doc2Vec'],
      icon: <BookOpen size={32} />,
      color: 'from-green-500 to-green-600',
      category: 'Machine Learning'
    },
    {
      title: 'Real-Time Violence Detection System',
      description: 'Alerts via Telegram upon detecting violence in video frames using deep learning.',
      technologies: ['CNN', 'Python', 'Firebase'],
      icon: <Shield size={32} />,
      color: 'from-red-500 to-red-600',
      category: 'Deep Learning'
    },
    {
      title: 'Sales Performance Dashboard',
      description: 'Analyzes revenue, regional sales trends, and product performance with interactive visuals.',
      technologies: ['Power BI', 'Excel'],
      icon: <TrendingUp size={32} />,
      color: 'from-purple-500 to-purple-600',
      category: 'Data Analytics'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions across AI, machine learning, and data analytics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-600">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white px-3 py-1 rounded-lg text-sm font-medium text-slate-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Project Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-slate-300">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">8+</div>
              <div className="text-slate-300">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-slate-300">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">Real-time</div>
              <div className="text-slate-300">Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;