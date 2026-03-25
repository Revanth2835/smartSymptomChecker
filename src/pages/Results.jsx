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

// ... (Leaflet setup unchanged)

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = text[language];
  const [isLoading, setIsLoading] = useState(true);
  
  // Geolocation state
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState('');

  const symptoms = location.state?.symptoms || [];
  const analysis = symptoms.length > 0 ? analyzeSymptoms(symptoms) : null;

  useEffect(() => {
    // Simulate loading delay for UX (1.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle Geolocation only if severity is High
  useEffect(() => {
    if (analysis?.severity === 'High') {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
            setLocationError('');
          },
          (error) => {
            setLocationError(t.locationNeeded || "Location access denied");
          }
        );
      } else {
        setLocationError(t.geoNotSupported || "Geolocation not supported");
      }
    }
  }, [analysis?.severity, t]);

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
      
      <div className="flex-1 py-12 px-4 sm:px-6 mt-16">
        <div className="max-w-2xl mx-auto space-y-10">
          
          {/* Main Analysis Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 px-6 py-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 transform rotate-45 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-8 -mb-8 pointer-events-none"></div>
              <h1 className="text-3xl font-bold text-white tracking-tight mb-2 relative z-10">{t.analysisComplete}</h1>
              <p className="text-blue-100 font-medium relative z-10">{t.basedOnSymptoms}</p>
            </div>

            <div className="p-6 sm:p-10">
              {/* Condition & Severity */}
              <div className="flex flex-col items-center justify-center mb-10 border-b border-gray-100 pb-10 text-center">
                <div className="flex items-center text-xs uppercase tracking-widest font-bold text-gray-400 mb-4 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  <AlertCircle className="w-4 h-4 mr-1.5 text-gray-500" />
                  {t.predictedCondition}
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 px-4">
                  {displayCondition}
                </h2>
                
                <div className="flex flex-col items-center space-y-4">
                  <span className={`px-6 py-2.5 rounded-full text-sm font-bold border uppercase tracking-widest shadow-sm ${severityStyles[analysis.severity]}`}>
                    {t.severityLabel}: {displaySeverity}
                  </span>
                  <p className={`text-sm sm:text-base mt-2 px-4 py-2 rounded-lg bg-gray-50 flex items-center justify-center ${severityMessageColors[analysis.severity]}`}>
                    {severityMessages[analysis.severity]}
                  </p>
                </div>
              </div>

              {/* Guidance */}
              <div className="mb-10 bg-blue-50/50 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                  <AlertTriangle className="w-5 h-5 text-blue-500 mr-2" />
                  {t.whatToDo}
                </h3>
                
                {/* Summary */}
                <p className="font-semibold text-gray-800 mb-4 text-base leading-relaxed">
                  {t[analysis.guidance.summaryKey]}
                </p>

                {/* Steps */}
                <ul className="space-y-2 mb-6">
                  {t[analysis.guidance.stepsKey].map((step, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm leading-relaxed">
                      <span className="flex-shrink-0 bg-blue-100 text-blue-700 font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>

                {/* Warning */}
                <div className={`flex items-start p-4 rounded-xl border text-sm font-medium ${
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
              <div className="mb-4 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center">
                  <List className="w-5 h-5 text-blue-500 mr-2" />
                  {t.symEvaluated}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {symptoms.map(symId => {
                    const englishName = text.en[symId];
                    const displayName = language === 'te' 
                      ? (symptomMap[englishName] || t[symId])
                      : englishName;
                      
                    return (
                      <span key={symId} className="bg-white text-gray-700 px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 shadow-sm hover:border-blue-200 transition-colors cursor-default">
                        {displayName}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* High Severity Hospital Map Section */}
          {analysis.severity === 'High' && (
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  {t.nearbyHospitals}
                </h3>

                {locationError ? (
                  <div className="bg-red-50 text-red-700 p-5 rounded-2xl border border-red-100 text-sm font-medium flex items-center shadow-sm">
                    <AlertTriangle className="w-6 h-6 mr-3 flex-shrink-0" />
                    {locationError}
                  </div>
                ) : !userLocation ? (
                  <div className="flex flex-col items-center justify-center py-12 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
                    <Loader2 className="w-8 h-8 text-red-500 animate-spin mb-3" />
                    <span className="text-gray-600 font-medium">{t.gettingLocation}</span>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden border border-gray-200 h-[300px] sm:h-[450px] w-full z-0 relative shadow-md">
                      <MapContainer 
                        center={[userLocation.lat, userLocation.lng]} 
                        zoom={13} 
                        style={{ height: '100%', width: '100%', zIndex: 0 }}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        
                        {/* User Location Marker */}
                        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
                          <Popup>{t.yourLocation}</Popup>
                        </Marker>
                        
                        {/* Hospital Markers */}
                        {mockHospitals.map(hospital => (
                          <Marker key={hospital.id} position={[hospital.lat, hospital.lng]}>
                            <Popup className="font-semibold">{hospital.name} ({hospital.distance})</Popup>
                          </Marker>
                        ))}
                      </MapContainer>
                    </div>

                    {/* Hospital List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {mockHospitals.map(hospital => (
                        <div key={hospital.id} className="flex items-center p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 rounded-2xl border border-gray-100 group">
                          <div className="bg-red-50 group-hover:bg-red-100 transition-colors p-3 rounded-xl mr-4 flex-shrink-0">
                            <Building2 className="w-6 h-6 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-base">{hospital.name}</h4>
                            <p className="text-sm font-medium text-red-500 mt-0.5 flex items-center">
                              <MapPin className="w-3.5 h-3.5 mr-1" />
                              {hospital.distance} {language === 'en' ? 'away' : 'దూరంలో'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Global Footer / Actions */}
          <div className="pt-6 pb-20 sm:pb-10 flex flex-col items-center">
            <button
              onClick={() => navigate('/checker')}
              className="flex items-center justify-center w-full sm:w-auto min-w-[240px] bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all border-2 border-blue-600 shadow-lg mb-6 group active:scale-95"
            >
              <RefreshCcw className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-500" />
              {t.checkAgain}
            </button>
            
            <div className="bg-gray-100 px-6 py-3 rounded-xl max-w-sm w-full border border-gray-200">
              <p className="text-xs text-center text-gray-500 font-medium">
                <span className="text-gray-700 font-bold uppercase tracking-wider block mb-1">{t.disclaimer}</span>
                {t.disclaimerDesc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Results;
