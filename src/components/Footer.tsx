import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">Akhil Kumar Reddy</h3>
            <p className="text-slate-400">Aspiring Software Engineer</p>
          </div>
          
          <div className="border-t border-slate-700 pt-4">
            <p>&copy; {currentYear} Akhil Kumar Reddy. All rights reserved.</p>
            <p className="text-sm mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;