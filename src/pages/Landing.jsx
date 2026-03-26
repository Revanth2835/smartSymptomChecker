import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useLanguage } from "../context/LanguageContext";
import { text } from "../data/text";

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

        <div className="max-w-3xl w-full text-center relative z-10 px-2 sm:px-0">
          <h1 className="text-4xl sm:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            <span className="block">{t.title.split(",")[0]}</span>
            <span className="block text-blue-600 drop-shadow-sm">
              {t.title.split(",")[1] || ""}
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium px-4">
            {t.subtitle}
          </p>

          <div className="flex flex-col items-center space-y-4 w-full px-4 sm:px-0">
            <button
              onClick={() => navigate("/checker")}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 sm:py-5 px-10 rounded-2xl text-lg sm:text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:translate-y-0"
            >
              {t.cta}
            </button>
            <p className="flex items-center text-xs sm:text-sm font-semibold text-gray-400">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              {t.takesTime}
            </p>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="max-w-xl w-full mt-12 sm:mt-16 pb-12 relative z-10 px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-red-100 p-5 sm:p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full -mr-12 -mt-12 opacity-50"></div>

            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-lg mr-3">
                <span className="text-red-600 font-bold text-base sm:text-lg">
                  !
                </span>
              </span>
              {t.emergencyTitle}
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-8">
              <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-red-200 transition-colors">
                <div className="flex items-center min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mr-3 sm:mr-4 text-red-600 flex-shrink-0">
                    <span className="font-bold text-sm sm:text-base">108</span>
                  </div>
                  <span className="font-bold text-gray-800 text-sm sm:text-base truncate">
                    {t.ambulance}
                  </span>
                </div>
                <a
                  href="tel:108"
                  className="text-blue-600 font-bold hover:underline text-sm sm:text-base flex-shrink-0"
                >
                  108
                </a>
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-red-200 transition-colors">
                <div className="flex items-center min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mr-3 sm:mr-4 text-blue-600 flex-shrink-0">
                    <span className="font-bold text-sm sm:text-base">104</span>
                  </div>
                  <span className="font-bold text-gray-800 text-sm sm:text-base truncate">
                    {t.healthHelpline}
                  </span>
                </div>
                <a
                  href="tel:104"
                  className="text-blue-600 font-bold hover:underline text-sm sm:text-base flex-shrink-0"
                >
                  104
                </a>
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-red-200 transition-colors">
                <div className="flex items-center min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mr-3 sm:mr-4 text-pink-600 flex-shrink-0">
                    <span className="font-bold text-sm sm:text-base">102</span>
                  </div>
                  <span className="font-bold text-gray-800 text-sm sm:text-base truncate">
                    {t.womenHelpline}
                  </span>
                </div>
                <a
                  href="tel:102"
                  className="text-blue-600 font-bold hover:underline text-sm sm:text-base flex-shrink-0"
                >
                  102
                </a>
              </div>
            </div>

            <a
              href="tel:108"
              className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl transition-all shadow-md active:scale-95 text-base sm:text-lg"
            >
              <span className="mr-2">📞</span>
              {t.callAmbulance}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
