import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { analyzeSymptoms } from '../utils/ruleEngine';
import { Loader2, AlertTriangle, ArrowLeft, MapPin, Building2, List, AlertCircle, RefreshCcw } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { mockHospitals } from '../data/hospitals';
import { useLanguage } from '../context/LanguageContext';
import { text, symptomMap, conditionMap, severityMap } from '../data/text';

// 4. FIX LEAFLET ICON CRASH
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Custom Icon for User
const userIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = text[language];
  
  const [isLoading, setIsLoading] = useState(true);
  
  // 1. SAFE STATE MANAGEMENT
  const [position, setPosition] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [locationError, setLocationError] = useState("");
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  const symptoms = location.state?.symptoms || [];
  const analysis = symptoms.length > 0 ? analyzeSymptoms(symptoms) : null;
  const severity = analysis?.severity;

  useEffect(() => {
    // Simulate loading delay for UX (1.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Offline detection
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 1. SAFE STATE MANAGEMENT & 5. PREVENT CRASH GLUE
  useEffect(() => {
    if (severity === "High") {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setPosition([pos.coords.latitude, pos.coords.longitude]);
            setLoadingLocation(false);
          },
          () => {
            setLocationError("Location access needed to show nearby hospitals");
            setLoadingLocation(false);
          }
        );
      } else {
        setLocationError("Geolocation not supported");
        setLoadingLocation(false);
      }
    } else {
      setLoadingLocation(false);
    }
  }, [severity]);

  if (!location.state || symptoms.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col antialiased">
        <Header showButton={true} />
        <div className="flex-1 flex items-center justify-center p-4 mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center max-w-md w-full">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-105 transition-transform">
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{t.noData}</h2>
            <p className="text-gray-500 mb-8">{t.pleaseCheckAgain}</p>
            <button
              onClick={() => navigate('/checker')}
              className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t.checkSymptoms}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col antialiased">
        <Header showButton={false} />
        <div className="flex-1 flex flex-col items-center justify-center p-4 mt-16">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">{t.analyzing}</h2>
          <p className="text-gray-500 mt-2">{t.analyzingDesc}</p>
        </div>
      </div>
    );
  }

  // Severity Colors mapping
  const severityStyles = {
    Low: 'bg-green-100 text-green-800 border-green-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    High: 'bg-red-100 text-red-800 border-red-200',
  };

  const severityMessages = {
    Low: t.msg_Low,
    Medium: t.msg_Medium,
    High: t.msg_High
  };

  const severityMessageColors = {
    Low: 'text-green-700 font-medium',
    Medium: 'text-yellow-700 font-medium',
    High: 'text-red-700 font-bold',
  };

  // Transformation Logic for Telugu
  const displayCondition = language === 'te' 
    ? (conditionMap[analysis.conditionName] || t[analysis.conditionKey])
    : analysis.conditionName;

  const displaySeverity = language === 'te'
    ? (severityMap[analysis.severityLevel] || t[`sev_${analysis.severity}`])
    : analysis.severityLevel;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col antialiased">
      <Header showButton={false} />
      
      <div className="flex-1 py-8 sm:py-12 px-4 sm:px-6 mt-16">
        <div className="max-w-2xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Main Analysis Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 px-5 sm:px-6 py-6 sm:py-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 transform rotate-45 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-8 -mb-8 pointer-events-none"></div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 relative z-10">{t.analysisComplete}</h1>
              <p className="text-blue-100 text-sm sm:text-base font-medium relative z-10 opacity-90">{t.basedOnSymptoms}</p>
            </div>

            <div className="p-5 sm:p-10">
              {/* Condition & Severity */}
              <div className="flex flex-col items-center justify-center mb-8 sm:mb-10 border-b border-gray-100 pb-8 sm:pb-10 text-center">
                <div className="flex items-center text-[10px] sm:text-xs uppercase tracking-widest font-bold text-gray-400 mb-4 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  <AlertCircle className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
                  {t.predictedCondition}
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-6 px-2 sm:px-4 leading-tight">
                  {displayCondition}
                </h2>
                
                <div className="flex flex-col items-center space-y-4 w-full">
                  <span className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold border uppercase tracking-widest shadow-sm ${severityStyles[analysis.severity]}`}>
                    {t.severityLabel}: {displaySeverity}
                  </span>
                  <p className={`text-sm sm:text-base mt-2 px-4 py-2.5 rounded-xl bg-gray-50 flex items-center justify-center w-full sm:w-auto ${severityMessageColors[analysis.severity]}`}>
                    {severityMessages[analysis.severity]}
                  </p>
                </div>
              </div>

              {/* Guidance */}
              <div className="mb-8 sm:mb-10 bg-blue-50/50 rounded-2xl p-5 sm:p-8 border border-blue-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center text-base sm:text-lg">
                  <AlertTriangle className="w-5 h-5 text-blue-500 mr-2" />
                  {t.whatToDo}
                </h3>
                
                {/* Summary */}
                <p className="font-semibold text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
                  {t[analysis.guidance.summaryKey]}
                </p>

                {/* Steps */}
                <ul className="space-y-3 mb-6">
                  {t[analysis.guidance.stepsKey].map((step, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm leading-relaxed">
                      <span className="flex-shrink-0 bg-blue-100 text-blue-700 font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px] mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>

                {/* Warning */}
                <div className={`flex items-start p-4 rounded-xl border text-xs sm:text-sm font-medium ${
                  analysis.severity === 'High'
                    ? 'bg-red-50 border-red-200 text-red-800'
                    : analysis.severity === 'Medium'
                    ? 'bg-yellow-50 border-yellow-200 text-yellow-800'
                    : 'bg-green-50 border-green-200 text-green-800'
                }`}>
                  <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                  {t[analysis.guidance.warningKey]}
                </div>
              </div>

              {/* Selected Symptoms */}
              <div className="mb-2 bg-gray-50 rounded-2xl p-5 sm:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-4 flex items-center">
                  <List className="w-5 h-5 text-blue-500 mr-2" />
                  {t.symptomsEvaluated}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {symptoms.map(symId => {
                    const englishName = text.en[symId];
                    const displayName = language === 'te' 
                      ? (symptomMap[englishName] || t[symId])
                      : englishName;
                      
                    return (
                      <span key={symId} className="bg-white text-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 shadow-sm hover:border-blue-200 transition-colors cursor-default">
                        {displayName}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 5. PREVENT CRASH Wrapper */}
          {severity === "High" && (
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
              <div className="p-5 sm:p-10">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                  {t.nearbyHospitals}
                </h3>

                {/* 2. STRICT CONDITIONAL RENDERING */}
                {loadingLocation ? (
                  <div className="flex flex-col items-center justify-center py-10 sm:py-12 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner px-4 text-center">
                    <Loader2 className="w-8 h-8 text-red-500 animate-spin mb-3" />
                    <span className="text-gray-600 font-medium text-sm sm:text-base">{t.gettingLocation || "Fetching location..."}</span>
                  </div>
                ) : locationError ? (
                  <div className="bg-red-50 text-red-700 p-5 rounded-2xl border border-red-100 text-sm font-medium flex items-center shadow-sm">
                    <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0" />
                    {locationError}
                  </div>
                ) : position ? (
                  <div className="space-y-6 sm:space-y-8">
                    {/* 3. MAP RENDER (SAFE) */}
                    {isOffline ? (
                      <div className="bg-yellow-50 text-yellow-700 p-8 rounded-2xl border border-yellow-100 flex flex-col items-center justify-center text-center shadow-sm h-[280px] sm:h-[450px]">
                        <AlertTriangle className="w-10 h-10 mb-4 text-yellow-600 animate-pulse" />
                        <p className="font-bold text-lg sm:text-xl mb-2">{t.mapOffline}</p>
                        <p className="text-sm opacity-80">Please check your internet connection to view nearby hospitals on the map.</p>
                      </div>
                    ) : (
                      <div className="rounded-2xl overflow-hidden border border-gray-200 h-[280px] sm:h-[450px] w-full z-0 relative shadow-md">
                        <MapContainer 
                          center={position} 
                          zoom={13} 
                          style={{ height: '100%', width: '100%', zIndex: 0 }}
                        >
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          
                          {/* User Location Marker */}
                          <Marker position={position} icon={userIcon}>
                            <Popup>{t.yourLocation || "You are here"}</Popup>
                          </Marker>
                          
                          {/* Hospital Markers */}
                          {mockHospitals.map(hospital => (
                            <Marker key={hospital.id} position={[hospital.lat, hospital.lng]}>
                              <Popup className="font-semibold">{hospital.name} ({hospital.distance})</Popup>
                            </Marker>
                          ))}
                        </MapContainer>
                      </div>
                    )}

                    {/* Hospital List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                      {mockHospitals.map(hospital => (
                        <div key={hospital.id} className="flex items-center p-4 sm:p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 rounded-2xl border border-gray-100 group">
                          <div className="bg-red-50 group-hover:bg-red-100 transition-colors p-2.5 sm:p-3 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">{hospital.name}</h4>
                            <p className="text-xs sm:text-sm font-medium text-red-500 mt-0.5 flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {hospital.distance} {language === 'en' ? 'away' : 'దూరంలో'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}

          {/* Global Footer / Actions */}
          <div className="pt-4 sm:pt-6 pb-16 sm:pb-10 flex flex-col items-center w-full px-2 sm:px-0">
            <button
              onClick={() => navigate('/checker')}
              className="flex items-center justify-center w-full sm:w-auto min-w-[240px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all border-2 border-blue-600 shadow-xl mb-6 group active:scale-95 text-lg"
            >
              <RefreshCcw className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-500" />
              {t.checkAgain}
            </button>
            
            <div className="bg-gray-100 px-5 sm:px-6 py-4 rounded-2xl max-w-sm w-full border border-gray-200 shadow-inner">
              <p className="text-[10px] sm:text-xs text-center text-gray-500 font-medium leading-relaxed">
                <span className="text-gray-700 font-bold uppercase tracking-wider block mb-1">{t.disclaimerTitle}</span>
                {t.disclaimerText}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Results;
