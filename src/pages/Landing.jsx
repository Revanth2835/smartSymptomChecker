import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useLanguage } from '../context/LanguageContext';
import { text } from '../data/text';

const Landing = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = text[language];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col antialiased">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden mt-16">
        {/* Background blobs for depth */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <div className="max-w-3xl w-full text-center relative z-10">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            <span className="block">{t.title.split(',')[0]}</span>
            <span className="block text-blue-600 drop-shadow-sm">{t.title.split(',')[1] || ''}</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            {t.subtitle}
          </p>

          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={() => navigate('/checker')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-2xl text-lg sm:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:translate-y-0"
            >
              {t.cta}
            </button>
            <p className="flex items-center text-sm font-semibold text-gray-400">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              {t.takesTime}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
