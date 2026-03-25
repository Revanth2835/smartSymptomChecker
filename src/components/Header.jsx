import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { text } from '../data/text';

const Header = ({ showButton = true }) => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
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
        
        <div className="flex items-center space-x-1 sm:space-x-4 flex-shrink-0">
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 px-2 sm:px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors text-xs sm:text-sm font-semibold whitespace-nowrap"
            aria-label="Toggle Language"
          >
            <Languages className="w-3.5 h-3.5 sm:w-4 h-4 text-blue-500" />
            <span>{language === 'en' ? 'తెలుగు' : 'EN'}</span>
          </button>

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
