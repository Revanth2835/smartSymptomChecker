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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg sm:text-xl text-gray-900 tracking-tight">
            {t.appName}
          </span>
        </Link>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors text-sm font-semibold"
            aria-label="Toggle Language"
          >
            <Languages className="w-4 h-4 text-blue-500" />
            <span>{t.langToggle}</span>
          </button>

          {showButton && (
            <button 
              onClick={() => navigate('/checker')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-all active:scale-95"
            >
              {t.checkSymptoms}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
