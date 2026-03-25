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
      
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{t.selectSymptoms}</h1>
            <p className="text-gray-500">
              {t.selectDesc}
            </p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center text-red-700">
              <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <p className="font-medium">{error}</p>
            </div>
          )}

          <div className="space-y-8">
            {symptomCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-semibold text-gray-800">{t[category.id]}</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.symptoms.map((symptom) => {
                      const isSelected = selectedSymptoms.includes(symptom.id);
                      return (
                        <label
                          key={symptom.id}
                          className={`
                            relative flex items-center p-4 cursor-pointer rounded-xl border-2 transition-all duration-200
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
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                          </div>
                          <span className={`text-sm font-medium ${isSelected ? 'text-blue-900' : 'text-gray-700'}`}>
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

          <div className="mt-10 flex flex-col items-center">
            <button
              onClick={handleAnalyze}
              className="w-full sm:w-auto min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t.analyzeBtn}
            </button>
            <div className="mt-6 text-sm text-gray-400 text-center max-w-md">
              <p>
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
