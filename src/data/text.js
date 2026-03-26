export const symptomMap = {
  Fever: "జ్వరం",
  Cough: "దగ్గు",
  "Shortness of breath": "శ్వాస తీసుకోవడంలో ఇబ్బంది",
  "Chest pain": "ఛాతి నొప్పి",
  Headache: "తలనొప్పి",
  Vomiting: "వాంతులు",
  Diarrhea: "డయ్యేరియా"
};

export const conditionMap = {
  "Flu": "ఫ్లూ",
  "Food Poisoning": "ఆహార విషబాధ",
  "Heart Issue": "గుండె సమస్య",
  "Serious Condition": "తీవ్రమైన పరిస్థితి",
  "Migraine": "మైగ్రేన్",
  "General illness": "సాధారణ అనారోగ్యం",
  "Infection": "ఇన్ఫెక్షన్",
  "Respiratory Issue": "శ్వాసకోశ సమస్య",
  "Digestive Issue": "జీర్ణ సంబంధిత సమస్య",
  "Neurological Issue": "నరాల సంబంధిత సమస్య",
  "Skin/Urinary Issue": "చర్మం/మూత్రనాళ సమస్య"
};

export const severityMap = {
  Low: "తక్కువ",
  Medium: "మధ్యస్థ",
  High: "తీవ్రమైనది"
};

export const text = {
  en: {
    // Landing Page
    title: "Smart Symptom, Checker",
    subtitle: "Get instant health insights based on your symptoms without any medical jargon.",
    cta: "Analyze Symptoms Now",
    checkSymptoms: "Check Symptoms",
    takesTime: "Takes less than 30 seconds",
    emergencyTitle: "Emergency Help",
    ambulance: "Ambulance",
    healthHelpline: "Health Helpline",
    womenHelpline: "Women Helpline",
    callAmbulance: "Call Ambulance (108)",
    
    // Header
    appName: "Smart Symptom Checker",
    langToggle: "తెలుగు",
    
    // Symptom Checker Page
    selectSymptoms: "Select Your Symptoms",
    selectDesc: "Please select all the symptoms you are currently experiencing. You can select multiple options.",
    errorNoSymptom: "Please select at least one symptom",
    analyzeBtn: "Analyze Symptoms",
    emergencyWarning: "If you have severe chest pain or difficulty breathing, go to an emergency room immediately.",
    
    // Categories
    cat_General: "General",
    cat_Respiratory: "Respiratory",
    cat_Heart: "Heart/Emergency",
    cat_Neurological: "Neurological",
    cat_Digestive: "Digestive",
    cat_Infection: "Infection",

    // Symptoms
    sym_Fever: "Fever",
    sym_Fatigue: "Fatigue",
    sym_Chills: "Chills",
    sym_Sweating: "Sweating",
    sym_WeightLoss: "Weight loss",
    sym_LossOfAppetite: "Loss of appetite",
    sym_Cough: "Cough",
    sym_ShortnessOfBreath: "Shortness of breath",
    sym_SoreThroat: "Sore throat",
    sym_RunnyNose: "Runny nose",
    sym_ChestCongestion: "Chest congestion",
    sym_Wheezing: "Wheezing",
    sym_ChestPain: "Chest pain",
    sym_IrregularHeartbeat: "Irregular heartbeat",
    sym_Dizziness: "Dizziness",
    sym_SwellingInLegs: "Swelling in legs",
    sym_SevereWeakness: "Severe weakness",
    sym_Headache: "Headache",
    sym_BlurredVision: "Blurred vision",
    sym_Confusion: "Confusion",
    sym_Seizures: "Seizures",
    sym_Numbness: "Numbness",
    sym_StomachPain: "Stomach pain",
    sym_Vomiting: "Vomiting",
    sym_Diarrhea: "Diarrhea",
    sym_Nausea: "Nausea",
    sym_Bloating: "Bloating",
    sym_SkinRash: "Skin rash",
    sym_WoundInfection: "Wound infection",
    sym_BurningUrination: "Burning urination",
    sym_EyeRedness: "Eye redness",
    sym_EarPain: "Ear pain",

    // Results Page
    analyzing: "Analyzing Symptoms",
    analyzingDesc: "Running evaluation against condition rules...",
    analysisComplete: "Analysis Complete",
    basedOnSymptoms: "Based on the symptoms you selected",
    predictedCondition: "Predicted Condition",
    severityLabel: "Severity",
    whatToDo: "What You Should Do",
    symptomsEvaluated: "Symptoms Evaluated",
    nearbyHospitals: "Nearby Hospitals Recommended",
    gettingLocation: "Getting your current location...",
    checkAgain: "Check Again",
    noData: "No data available.",
    pleaseCheckAgain: "Please check your symptoms again.",
    disclaimerTitle: "Disclaimer",
    disclaimerText: "This is not a medical diagnosis. Consult a doctor or medical professional immediately in emergencies.",
    
    // Severities
    sev_Low: "Low",
    sev_Medium: "Medium",
    sev_High: "High",

    // Severity Messages
    msg_Low: "No major concern, rest advised",
    msg_Medium: "Monitor symptoms and take care",
    msg_High: "⚠️ Immediate medical attention recommended",

    // Rule Engine Content (Keys for Conditions and Guidance)
    cond_HeartIssue: "Possible Heart Issue",
    cond_SeriousCondition: "Serious Condition",
    cond_Flu: "Flu",
    cond_FoodPoisoning: "Food Poisoning",
    cond_Infection: "Infection",
    cond_Allergy: "Allergy or Infection",
    cond_Migraine: "Migraine",
    cond_GeneralIllness: "General Illness",

    summ_HeartIssue: "This may be a cardiac emergency. Act immediately.",
    warn_HeartIssue: "Do NOT wait. Heart conditions can worsen in minutes. Seek emergency help now.",
    steps_HeartIssue: [
      "Call emergency services or go to the nearest hospital right now.",
      "Sit or lie down — do not walk around unnecessarily.",
      "Loosen any tight clothing around the chest.",
      "Do not eat or drink anything.",
      "If available, chew an aspirin (325mg) unless allergic."
    ],

    summ_SeriousCondition: "Sudden severe weakness and dizziness need urgent medical attention.",
    warn_SeriousCondition: "If you feel like fainting or cannot move, call emergency services immediately.",
    steps_SeriousCondition: [
      "Sit or lie down immediately to avoid falling.",
      "Ask someone to stay with you.",
      "Do not drive or operate machinery.",
      "Go to the nearest hospital as soon as possible.",
      "Mention all medications you are currently taking to the doctor."
    ],

    summ_Flu: "Looks like a flu infection. Rest and care at home should help.",
    warn_Flu: "See a doctor if fever is above 103°F (39.4°C) or symptoms do not improve in 3 days.",
    steps_Flu: [
      "Drink at least 8–10 glasses of water or warm fluids daily.",
      "Get plenty of rest — avoid going outside if possible.",
      "Take a paracetamol (Crocin/Dolo) for fever and body ache.",
      "Gargle with warm salt water for sore throat relief.",
      "Eat light, easy-to-digest food like khichdi or soup."
    ],

    summ_FoodPoisoning: "You may have eaten contaminated food. Focus on hydration first.",
    warn_FoodPoisoning: "Go to a doctor if vomiting or diarrhea continues for more than 24 hours, or if you see blood.",
    steps_FoodPoisoning: [
      "Drink ORS (Oral Rehydration Solution) every 30 minutes.",
      "If ORS is unavailable, mix 1 teaspoon salt + 6 teaspoons sugar in 1 litre of water.",
      "Avoid solid food for the first few hours — let your stomach settle.",
      "Avoid milk, spicy food, or oily items.",
      "Resume eating with bland food like plain rice, banana, or toast."
    ],

    summ_Infection: "Fever with chills and sweating often indicates an infection that needs medical check.",
    warn_Infection: "If fever is very high or does not break after 48 hours, see a doctor immediately.",
    steps_Infection: [
      "Take paracetamol to control fever.",
      "Drink plenty of fluids — water, coconut water, or ORS.",
      "Wear light clothing; do not cover yourself with heavy blankets.",
      "Get a blood test done (may include malaria, typhoid check).",
      "Visit a doctor — do not self-medicate with antibiotics."
    ],

    summ_Allergy: "A rash with fever may indicate an allergic reaction or viral infection.",
    warn_Allergy: "Seek immediate care if rash spreads quickly, or if you have difficulty breathing.",
    steps_Allergy: [
      "Do not scratch the rash — it can worsen or spread.",
      "Apply a cool, damp cloth to itchy areas for relief.",
      "Take an antihistamine (like Cetrizine) for allergy symptoms.",
      "Take paracetamol to control the fever.",
      "See a doctor to identify the rash type and get proper treatment."
    ],

    summ_Migraine: "This may be a migraine episode. Rest in a calm, dark place.",
    warn_Migraine: "See a doctor if headaches are frequent (more than once a week) or very severe.",
    steps_Migraine: [
      "Lie down in a quiet, dark room away from screen light.",
      "Apply a cold or warm compress on your forehead.",
      "Drink water — dehydration can trigger or worsen migraines.",
      "Take a pain reliever like Ibuprofen or Paracetamol.",
      "Avoid loud noises, bright lights, and strong smells."
    ],

    summ_GeneralIllness: "No specific condition matched, but it is good to take care of yourself.",
    warn_GeneralIllness: "If symptoms persist beyond 2 days or become more severe, please visit a doctor.",
    steps_GeneralIllness: [
      "Get adequate rest and sleep.",
      "Drink enough water throughout the day.",
      "Eat nutritious, home-cooked food.",
      "Monitor your symptoms over the next 24–48 hours.",
      "If any symptoms worsen or new ones appear, consult a doctor."
    ],

    cond_RespiratoryIssue: "Respiratory Issue",
    summ_RespiratoryIssue: "Your symptoms suggest a respiratory irritation or mild infection.",
    warn_RespiratoryIssue: "Seek medical help if you experience chest pain, high fever, or severe cough for more than 3 days.",
    steps_RespiratoryIssue: [
      "Drink warm fluids like herbal tea or warm water.",
      "Rest your voice and avoid smoking or dusty areas.",
      "Steam inhalation can help clear congestion.",
      "Monitor your temperature regularly.",
      "Consult a doctor if breathing becomes even slightly difficult."
    ],

    cond_DigestiveIssue: "Digestive Issue",
    summ_DigestiveIssue: "You are experiencing symptoms related to your digestive system.",
    warn_DigestiveIssue: "Consult a doctor if you have severe abdominal pain, persistent vomiting, or signs of dehydration.",
    steps_DigestiveIssue: [
      "Stick to a bland diet (Rice, Bananas, Toast).",
      "Avoid spicy, oily, or dairy-heavy foods for now.",
      "Drink small sips of water or ORS to stay hydrated.",
      "Rest your stomach for a few hours if you feel nauseous.",
      "Keep track of bowel movements and any changes."
    ],

    cond_NeurologicalIssue: "Neurological/Headache Issue",
    summ_NeurologicalIssue: "Headache or neurological symptoms need careful monitoring.",
    warn_NeurologicalIssue: "Seek IMMEDIATE emergency care if you experience sudden confusion, fainting, or severe vision changes.",
    steps_NeurologicalIssue: [
      "Rest in a quiet, dark room.",
      "Avoid bright screens (mobile/TV) and loud noises.",
      "Check your blood pressure if possible.",
      "Stay hydrated and try to maintain a regular sleep schedule.",
      "Consult a doctor if the headache is different from your usual pattern."
    ],

    cond_SkinUrinary: "Skin/Urinary Irritation",
    summ_SkinUrinary: "You have symptoms related to skin or urinary tract irritation.",
    warn_SkinUrinary: "See a doctor if you have a high fever, severe pain, or if the rash spreads rapidly.",
    steps_SkinUrinary: [
      "Drink plenty of water to flush your system.",
      "Avoid using harsh soaps or chemicals on the affected area.",
      "Wear loose, cotton clothing.",
      "Do not self-medicate with creams or antibiotics without advice.",
      "Note when the symptoms started and any potential triggers."
    ]
  },
  te: {
    // Landing Page
    title: "స్మార్ట్ లక్షణాల, తనిఖీ",
    subtitle: "ఎటువంటి వైద్య పరిభాష లేకుండా మీ లక్షణాల ఆధారంగా వెంటనే ఆరోగ్య సూచనలు పొందండి.",
    cta: "లక్షణాలను విశ్లేషించండి",
    checkSymptoms: "లక్షణాలు తనిఖీ చేయండి",
    takesTime: "30 సెకన్ల కంటే తక్కువ సమయం పడుతుంది",
    emergencyTitle: "అత్యవసర సహాయం",
    ambulance: "అంబులెన్స్",
    healthHelpline: "ఆరోగ్య హెల్ప్‌లైన్",
    womenHelpline: "మహిళా హెల్ప్‌లైన్",
    callAmbulance: "అంబులెన్స్‌కు కాల్ చేయండి (108)",
    
    // Header
    appName: "స్మార్ట్ లక్షణాల తనిఖీ",
    langToggle: "EN",
    
    // Symptom Checker Page
    selectSymptoms: "మీ లక్షణాలను ఎంచుకోండి",
    selectDesc: "మీరు ప్రస్తుతం అనుభవిస్తున్న అన్ని లక్షణాలను ఎంచుకోండి. మీరు ఒకటి కంటే ఎక్కువ ఎంచుకోవచ్చు.",
    errorNoSymptom: "కనీసం ఒక లక్షణాన్ని ఎంచుకోండి",
    analyzeBtn: "లక్షణాలను విశ్లేషించండి",
    emergencyWarning: "మీకు తీవ్రమైన ఛాతీ నొప్పి లేదా శ్వాస తీసుకోవడంలో ఇబ్బంది ఉంటే, వెంటనే ఎమర్జెన్సీ వార్డుకు వెళ్లండి.",
    
    // Categories
    cat_General: "సాధారణ",
    cat_Respiratory: "శ్వాసకోశ",
    cat_Heart: "గుండె/అత్యవసర",
    cat_Neurological: "నరాల సంబంధిత",
    cat_Digestive: "జీర్ణ సంబంధిత",
    cat_Infection: "ఇన్ఫెక్షన్",

    // Symptoms
    sym_Fever: "జ్వరం",
    sym_Fatigue: "అలసట",
    sym_Chills: "వణుకు",
    sym_Sweating: "చెమటలు పట్టడం",
    sym_WeightLoss: "బరువు తగ్గడం",
    sym_LossOfAppetite: "ఆకలి లేకపోవడం",
    sym_Cough: "దగ్గు",
    sym_ShortnessOfBreath: "శ్వాస తీసుకోవడంలో ఇబ్బంది",
    sym_SoreThroat: "గొంతు నొప్పి",
    sym_RunnyNose: "ముక్కు కారడం",
    sym_ChestCongestion: "ఛాతీ పట్టేయడం",
    sym_Wheezing: "గురక",
    sym_ChestPain: "ఛాతి నొప్పి",
    sym_IrregularHeartbeat: "క్రమరహిత గుండె కొట్టుకోవడం",
    sym_Dizziness: "కళ్లు తిరగడం",
    sym_SwellingInLegs: "కాళ్ల వాపు",
    sym_SevereWeakness: "తీవ్రమైన బలహీనత",
    sym_Headache: "తలనొప్పి",
    sym_BlurredVision: "మసక చూపు",
    sym_Confusion: "గందరగోళం",
    sym_Seizures: "ఫిట్స్",
    sym_Numbness: "తిమ్మిర్లు",
    sym_StomachPain: "కడుపు నొప్పి",
    sym_Vomiting: "వాంతులు",
    sym_Diarrhea: "డయ్యేరియా",
    sym_Nausea: "వికారం",
    sym_Bloating: "కడుపు ఉబ్బరం",
    sym_SkinRash: "చర్మంపై దద్దుర్లు",
    sym_WoundInfection: "గాయం ఇన్ఫెక్షన్",
    sym_BurningUrination: "మూత్రవిసర్జనలో మంట",
    sym_EyeRedness: "కళ్లు ఎర్రబడటం",
    sym_EarPain: "చెవి నొప్పి",

    // Results Page
    analyzing: "లక్షణాలను విశ్లేషిస్తోంది",
    analyzingDesc: "పరిస్థితుల నియమాలకు వ్యతిరేకంగా మూల్యాంకనం చేస్తోంది...",
    analysisComplete: "విశ్లేషణ పూర్తయింది",
    basedOnSymptoms: "మీరు ఎంచుకున్న లక్షణాల ఆధారంగా",
    predictedCondition: "అంచనా వేయబడిన పరిస్థితి",
    severityLabel: "తీవ్రత",
    whatToDo: "మీరు ఏమి చేయాలి",
    symptomsEvaluated: "మదింపు చేసిన లక్షణాలు",
    nearbyHospitals: "సిఫార్సు చేయబడిన సమీప ఆసుపత్రులు",
    gettingLocation: "మీ ప్రస్తుత స్థానాన్ని పొందుతోంది...",
    checkAgain: "మళ్లీ తనిఖీ చేయండి",
    noData: "డేటా అందుబాటులో లేదు.",
    pleaseCheckAgain: "దయచేసి మీ లక్షణాలను మళ్లీ తనిఖీ చేయండి.",
    disclaimerTitle: "నిరాకరణ",
    disclaimerText: "ఇది వైద్య నిర్ధారణ కాదు. అత్యవసర పరిస్థితుల్లో వెంటనే డాక్టర్ లేదా వైద్య నిపుణులను సంప్రదించండి.",
    
    // Severities
    sev_Low: "తక్కువ",
    sev_Medium: "మధ్యస్థ",
    sev_High: "తీవ్రమైనది",

    // Severity Messages
    msg_Low: "పెద్దగా ఆందోళన లేదు, విశ్రాంతి అవసరం",
    msg_Medium: "లక్షణాలను గమనిస్తూ జాగ్రత్తలు తీసుకోండి",
    msg_High: "⚠️ వెంటనే వైద్య సహాయం అవసరం",

    // Rule Engine Content (Keys for Conditions and Guidance)
    cond_HeartIssue: "గుండె సమస్య",
    cond_SeriousCondition: "తీవ్రమైన పరిస్థితి",
    cond_Flu: "ఫ్లూ",
    cond_FoodPoisoning: "ఆహార విషబాధ",
    cond_Infection: "ఇన్ఫెక్షన్",
    cond_Allergy: "అలెర్జీ లేదా ఇన్ఫెక్షన్",
    cond_Migraine: "మైగ్రేన్",
    cond_GeneralIllness: "సాధారణ అనారోగ్యం",

    summ_HeartIssue: "ఇది గుండె సంబంధిత అత్యవసర పరిస్థితి కావచ్చు. వెంటనే స్పందించండి.",
    warn_HeartIssue: "వేచి ఉండకండి. గుండె పరిస్థితులు నిమిషాల్లో అధ్వాన్నంగా మారవచ్చు. వెంటనే అత్యవసర సహాయం పొందండి.",
    steps_HeartIssue: [
      "వెంటనే అత్యవసర సేవలకు కాల్ చేయండి లేదా సమీప ఆసుపత్రికి వెళ్లండి.",
      "కదలకుండా కూర్చోండి లేదా పడుకోండి - అవసరం లేకుండా తిరగవద్దు.",
      "ఛాతీ చుట్టూ ఉన్న బిగుతుగా ఉన్న దుస్తులను వదులు చేయండి.",
      "ఏమీ తినవద్దు లేదా తాగవద్దు.",
      "అందుబాటులో ఉంటే, అలెర్జీ లేకపోతే ఆస్పిరిన్ (325mg) నమలండి."
    ],

    summ_SeriousCondition: "హఠాత్తుగా వచ్చే తీవ్రమైన బలహీనత మరియు కళ్లు తిరగడం వంటివాటికి అత్యవసర వైద్య సంరక్షణ అవసరం.",
    warn_SeriousCondition: "మీకు స్పృహ తప్పడం లేదా కదలలేని పరిస్థితి అనిపిస్తే, వెంటనే అత్యవసర సేవలకు కాల్ చేయండి.",
    steps_SeriousCondition: [
      "పడిపోకుండా ఉండటానికి వెంటనే కూర్చోండి లేదా పడుకోండి.",
      "ఎవరినైనా మీతో ఉండమని అడగండి.",
      "డ్రైవింగ్ లేదా మిషన్లు ఆపరేట్ చేయవద్దు.",
      "త్వరగా సమీప ఆసుపత్రికి వెళ్లండి.",
      "మీరు ప్రస్తుతం వాడుతున్న అన్ని మందుల వివరాలను డాక్టర్కు తెలియజేయండి."
    ],

    summ_Flu: "ఇది ఫ్లూ ఇన్ఫెక్షన్ లాగా కనిపిస్తోంది. ఇంట్లో విశ్రాంతి మరియు జాగ్రత్తలు తీసుకోవడం వల్ల నయమవుతుంది.",
    warn_Flu: "జ్వరం 103°F (39.4°C) కంటే ఎక్కువగా ఉంటే లేదా 3 రోజుల్లో లక్షణాలు మెరుగుపడకపోతే డాక్టర్ను సంప్రదించండి.",
    steps_Flu: [
      "రోజుకు కనీసం 8-10 గ్లాసుల నీరు లేదా వెచ్చని ద్రవాలు తాగండి.",
      "తగినంత విశ్రాంతి తీసుకోండి - వీలైతే బయటకు వెళ్లవద్దు.",
      "జ్వరం మరియు ఒంటి నొప్పుల కోసం పారాసిటమాల్ తీసుకోండి.",
      "గొంతు నొప్పి ఉపశమనం కోసం వెచ్చని ఉప్పు నీటితో పుక్కిలించండి.",
      "కిచిడీ లేదా సూప్ వంటి తేలికపాటి, సులభంగా అరిగే ఆహారాన్ని తినండి."
    ],

    summ_FoodPoisoning: "మీరు కలుషితమైన ఆహారం తిని ఉండవచ్చు. హైడ్రేషన్పై దృష్టి పెట్టండి.",
    warn_FoodPoisoning: "వాంతులు లేదా విరేచనాలు 24 గంటల కంటే ఎక్కువ కాలం కొనసాగితే లేదా రక్తం కనిపిస్తే డాక్టర్ వద్దకు వెళ్లండి.",
    steps_FoodPoisoning: [
      "ప్రతి 30 నిమిషాలకు ఓఆర్ఎస్ (ORS) తాగండి.",
      "ORS అందుబాటులో లేకపోతే, 1 లీటరు నీటిలో 1 టీస్పూన్ ఉప్పు + 6 టీస్పూన్ల చక్కెర కలిపి తాగండి.",
      "మొదటి కొన్ని గంటల పాటు ఘన ఆహారాన్ని నివారించండి - మీ కడుపు సర్దుకోనివ్వండి.",
      "పాలు, కారంగా ఉన్న ఆహారం లేదా నూనె పదార్థాలను నివారించండి.",
      "అన్నం, అరటిపండు వంటి చప్పని ఆహారంతో తిరిగి ఆహారం తీసుకోవడం ప్రారంభించండి."
    ],

    summ_Infection: "వణుకు మరియు చెమటతో కూడిన జ్వరం తరచుగా వైద్య తనిఖీ అవసరమయ్యే ఇన్ఫెక్షన్ను సూచిస్తుంది.",
    warn_Infection: "జ్వరం చాలా ఎక్కువగా ఉంటే లేదా 48 గంటల తర్వాత కూడా తగ్గకపోతే, వెంటనే డాక్టర్ను చూడండి.",
    steps_Infection: [
      "జ్వరం నియంత్రణ కోసం పారాసిటమాల్ తీసుకోండి.",
      "నీరు, కొబ్బరి నీళ్లు లేదా ORS వంటి ద్రవాలు పుష్కలంగా తాగండి.",
      "తేలికపాటి దుస్తులు ధరించండి; భారీ దుప్పట్లతో కప్పవద్దు.",
      "రక్త పరీక్ష చేయించుకోండి (మలేరియా, టైఫాయిడ్ పరీక్షలు ఉండవచ్చు).",
      "డాక్టర్ను సంప్రదించండి - సొంతంగా యాంటీబయాటిక్స్ వాడకండి."
    ],

    summ_Allergy: "జ్వరంతో కూడిన దద్దుర్లు అలెర్జీ ప్రతిచర్యను లేదా వైరల్ ఇన్ఫెక్షన్ను సూచిస్తాయి.",
    warn_Allergy: "దద్దుర్లు త్వరగా వ్యాప్తి చెందినా లేదా శ్వాస తీసుకోవడంలో ఇబ్బంది ఉన్నా వెంటనే వైద్య సహాయం పొందండి.",
    steps_Allergy: [
      "దద్దుర్లను గీకవద్దు - ఇది పరిస్థితిని అధ్వాన్నం చేయవచ్చు.",
      "ఉపశమనం కోసం దద్దుర్లు ఉన్న చోట చల్లని, తడి గుడ్డను ఉంచండి.",
      "అలెర్జీ లక్షణాల కోసం యాంటీహిస్టామైన్ తీసుకోండి.",
      "జ్వరం నియంత్రణ కోసం పారాసిటమాల్ తీసుకోండి.",
      "దద్దుర్లు రకాన్ని గుర్తించి సరైన చికిత్స పొందడానికి డాక్టర్ను సంప్రదించండి."
    ],

    summ_Migraine: "ఇది మైగ్రేన్ ఎపిసోడ్ కావచ్చు. ప్రశాంతమైన, చీకటి ప్రదేశంలో విశ్రాంతి తీసుకోండి.",
    warn_Migraine: "తలనొప్పి తరచుగా (వారానికి ఒకసారి కంటే ఎక్కువ) లేదా చాలా తీవ్రంగా ఉంటే డాక్టర్ను చూడండి.",
    steps_Migraine: [
      "స్క్రీన్ లైట్కు దూరంగా ప్రశాంతమైన, చీకటి గదిలో పడుకోండి.",
      "మీ నుదుటిపై చల్లని లేదా వెచ్చని పట్టీని వేసుకోండి.",
      "నీరు తాగండి - డీహైడ్రేషన్ మైగ్రేన్ను ప్రేరేపిస్తుంది లేదా అధ్వాన్నం చేస్తుంది.",
      "ఇబుప్రోఫెన్ లేదా పారాసిటమాల్ వంటి నొప్పి నివారణ మందులు తీసుకోండి.",
      "శబ్దాలు, ప్రకాశవంతమైన కాంతి మరియు ఘటైన వాసనలను నివారించండి."
    ],

    summ_GeneralIllness: "నిర్దిష్ట పరిస్థితి ఏదీ సరిపోలలేదు, కానీ మీ ఆరోగ్యం పట్ల జాగ్రత్త వహించడం మంచిది.",
    warn_GeneralIllness: "లక్షణాలు 2 రోజుల కంటే ఎక్కువ కాలం కొనసాగితే లేదా మరింత తీవ్రంగా మారితే, దయచేసి డాక్టర్ను సంప్రదించండి.",
    steps_GeneralIllness: [
      "తగినంత విశ్రాంతి మరియు నిద్ర తీసుకోండి.",
      "రోజంతా తగినంత నీరు తాగండి.",
      "పోషకమైన, ఇంట్లో వండిన ఆహారాన్ని తినండి.",
      "తదుపరి 24-48 గంటల పాటు మీ లక్షణాలను గమనించండి.",
      "ఏవైనా లక్షణాలు అధ్వాన్నంగా మారితే లేదా కొత్తవి కనిపిస్తే, డాక్టర్ను సంప్రదించండి."
    ],

    cond_RespiratoryIssue: "శ్వాసకోశ సమస్య",
    summ_RespiratoryIssue: "మీ లక్షణాలు శ్వాసకోశ చికాకు లేదా తేలికపాటి ఇన్ఫెక్షన్ను సూచిస్తున్నాయి.",
    warn_RespiratoryIssue: "మీకు ఛాతీ నొప్పి, అధిక జ్వరం లేదా 3 రోజుల కంటే ఎక్కువ కాలం తీవ్రమైన దగ్గు ఉంటే వైద్య సహాయం పొందండి.",
    steps_RespiratoryIssue: [
      "హెర్బల్ టీ లేదా వెచ్చని నీరు వంటి వెచ్చని ద్రవాలను తాగండి.",
      "ధూమపానం లేదా దుమ్ము ఉన్న ప్రాంతాలకు దూరంగా ఉండండి.",
      "ఆవిరి పట్టడం వల్ల ఉపశమనం లభిస్తుంది.",
      "మీ శరీర ఉష్ణోగ్రతను క్రమం తప్పకుండా గమనించండి.",
      "శ్వాస తీసుకోవడం కొంచెం కష్టమైనా డాక్టర్ను సంప్రదించండి."
    ],

    cond_DigestiveIssue: "జీర్ణ సంబంధిత సమస్య",
    summ_DigestiveIssue: "మీరు మీ జీర్ణవ్యవస్థకు సంబంధించిన లక్షణాలను అనుభవిస్తున్నారు.",
    warn_DigestiveIssue: "మీకు తీవ్రమైన కడుపు నొప్పి, నిరంతర వాంతులు లేదా డీహైడ్రేషన్ లక్షణాలు ఉంటే డాక్టర్ను సంప్రదించండి.",
    steps_DigestiveIssue: [
      "తేలికపాటి ఆహారం (అన్నం, అరటిపండు) తీసుకోండి.",
      "ప్రస్తుతానికి కారం, నూనె లేదా పాల పదార్థాలను నివారించండి.",
      "హైడ్రేటెడ్గా ఉండటానికి కొద్దికొద్దిగా నీరు లేదా ఓఆర్ఎస్ తాగండి.",
      "వికారం అనిపిస్తే మీ కడుపుకు కొన్ని గంటల పాటు విశ్రాంతినివ్వండి.",
      "విరేచనాల సంఖ్య మరియు మార్పులను గమనించండి."
    ],

    cond_NeurologicalIssue: "నరాల సంబంధిత సమస్య / తలనొప్పి",
    summ_NeurologicalIssue: "తలనొప్పి లేదా నరాల సంబంధిత లక్షణాలను జాగ్రత్తగా గమనించాలి.",
    warn_NeurologicalIssue: "మీకు హఠాత్తుగా గందరగోళం, స్పృహ తప్పడం లేదా తీవ్రమైన దృష్టి మార్పులు ఉంటే వెంటనే అత్యవసర సంరక్షణ పొందండి.",
    steps_NeurologicalIssue: [
      "ప్రశాంతమైన, చీకటి గదిలో విశ్రాంతి తీసుకోండి.",
      "ప్రకాశవంతమైన స్క్రీన్లు (మొబైల్/టీవీ) మరియు పెద్ద శబ్దాలను నివారించండి.",
      "వీలైతే మీ రక్తపోటును (BP) తనిఖీ చేయండి.",
      "హైడ్రేటెడ్గా ఉండండి మరియు క్రమబద్ధమైన నిద్రను కొనసాగించండి.",
      "తలనొప్పి మీ సాధారణ నమూనా కంటే భిన్నంగా ఉంటే డాక్టర్ను సంప్రదించండి."
    ],

    cond_SkinUrinary: "చర్మం / మూత్రనాళ చికాకు",
    summ_SkinUrinary: "మీరు చర్మం లేదా మూత్రనాళ చికాకుకు సంబంధించిన లక్షణాలను కలిగి ఉన్నారు.",
    warn_SkinUrinary: "మీకు అధిక జ్వరం, తీవ్రమైన నొప్పి ఉన్నా లేదా దద్దుర్లు వేగంగా వ్యాప్తి చెందుతున్నా డాక్టర్ను చూడండి.",
    steps_SkinUrinary: [
      "ప్రేగులు మరియు మూత్రనాళం క్లీన్ అవ్వడానికి పుష్కలంగా నీరు తాగండి.",
      "ప్రభావిత ప్రాంతంలో ఘటైన సబ్బులు లేదా రసాయనాలను వాడకండి.",
      "వదులుగా ఉండే కాటన్ దుస్తులను ధరించండి.",
      "సలహా లేకుండా క్రీములు లేదా యాంటీబయాటిక్స్ వాడకండి.",
      "లక్షణాలు ఎప్పుడు ప్రారంభమయ్యాయో మరియు దేనివల్ల వచ్చాయో గమనించండి."
    ]
  }
};
