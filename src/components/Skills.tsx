import React from 'react';
import { Code, Globe, Database, BarChart, Wrench, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Languages',
      skills: ['Java', 'C++', 'Python'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Database size={32} />,
      title: 'Back-end',
      skills: ['MySQL', 'Flask API'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <BarChart size={32} />,
      title: 'Data Science',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'OpenCV'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools',
      skills: ['Tableau', 'Power BI', 'Unity', 'Wireshark', 'Cisco Packet Tracer'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Brain size={32} />,
      title: 'Concepts',
      skills: ['Data Structures & Algorithms', 'OOPS'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning multiple domains of software development and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-50 px-4 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Technical Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-slate-600">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-slate-600">Development Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
              <div className="text-slate-600">Major Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;