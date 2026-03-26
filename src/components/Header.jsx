import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { text } from '../data/text';

const Header = ({ showButton = true }) => {
  const navigate = useNavigate();
  const { language, toggleLanguage, changeLanguage } = useLanguage();
  const t = text[language];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center space-x-2 group min-w-0 flex-shrink">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors flex-shrink-0">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-sm sm:text-xl text-gray-900 tracking-tight truncate">
            {t.appName}
          </span>
        </Link>
        
        <div className="flex items-center space-x-3 sm:space-x-6 flex-shrink-0">
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm font-medium">
            <button 
              onClick={() => changeLanguage('en')}
              className={`transition-all duration-200 uppercase tracking-wide ${language === 'en' ? 'text-gray-900 font-bold border-b-2 border-gray-900 pb-0.5' : 'text-gray-400 hover:text-gray-600'}`}
            >
              EN
            </button>
            <span className="text-gray-200 font-light">|</span>
            <button 
              onClick={() => changeLanguage('te')}
              className={`transition-all duration-200 ${language === 'te' ? 'text-gray-900 font-bold border-b-2 border-gray-900 pb-0.5' : 'text-gray-400 hover:text-gray-600'}`}
            >
              తెలుగు
            </button>
          </div>

          {showButton && (
            <button 
              onClick={() => navigate('/checker')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-95 flex items-center"
            >
              <Activity className="w-4 h-4 sm:hidden" />
              <span className="hidden sm:inline">{t.checkSymptoms}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
