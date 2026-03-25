import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { symptomCategories } from '../data/symptoms';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { text } from '../data/text';

const SymptomChecker = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = text[language];
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [error, setError] = useState('');

  const handleToggleSymptom = (symptomId) => {
    setSelectedSymptoms((prev) => {
      if (prev.includes(symptomId)) {
        return prev.filter((s) => s !== symptomId);
      } else {
        return [...prev, symptomId];
      }
    });
    // Clear error if user starts selecting
    if (error) setError('');
  };

  const handleAnalyze = () => {
    if (selectedSymptoms.length === 0) {
      setError(t.errorNoSymptom);
      return;
    }
    setError('');
    navigate('/results', { state: { symptoms: selectedSymptoms } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col antialiased">
      <Header showButton={false} />
      
      <div className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 px-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
              {t.selectSymptoms}
            </h1>
            <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
              {t.selectDesc}
            </p>
          </div>

          {error && (
            <div className="mb-6 sm:mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center text-red-700 mx-1 sm:mx-0">
              <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <p className="font-medium text-sm sm:text-base">{error}</p>
            </div>
          )}

          <div className="space-y-6 sm:space-y-8">
            {symptomCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50/50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800">{t[category.id]}</h2>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {category.symptoms.map((symptom) => {
                      const isSelected = selectedSymptoms.includes(symptom.id);
                      return (
                        <label
                          key={symptom.id}
                          className={`
                            relative flex items-center p-3.5 sm:p-4 cursor-pointer rounded-xl border-2 transition-all duration-200 min-h-[56px]
                            ${isSelected 
                              ? 'border-blue-500 bg-blue-50/50' 
                              : 'border-gray-100 hover:border-blue-200 hover:bg-gray-50'}
                          `}
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={isSelected}
                            onChange={() => handleToggleSymptom(symptom.id)}
                          />
                          <div className={`
                            flex-shrink-0 w-5 h-5 mr-3 rounded border flex items-center justify-center transition-colors
                            ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-white'}
                          `}>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 h-4 text-white" />}
                          </div>
                          <span className={`text-sm sm:text-base font-medium leading-tight ${isSelected ? 'text-blue-900' : 'text-gray-700'}`}>
                            {t[symptom.id]}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 mb-6 flex flex-col items-center w-full px-2 sm:px-0">
            <button
              onClick={handleAnalyze}
              className="w-full sm:w-auto min-w-[220px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all transform active:scale-95 text-lg"
            >
              {t.analyzeBtn}
            </button>
            <div className="mt-6 text-xs sm:text-sm text-gray-400 text-center max-w-xs sm:max-w-md px-4">
              <p className="leading-relaxed">
                {t.appName} - {language === 'en' ? `${selectedSymptoms.length} symptoms selected` : `${selectedSymptoms.length} లక్షణాలు ఎంచుకోబడ్డాయి`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
