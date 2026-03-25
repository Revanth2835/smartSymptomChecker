export const analyzeSymptoms = (symptomIds) => {
  // Helpers
  const has = (id) => symptomIds.includes(id);
  const hasAll = (required) => required.every((id) => symptomIds.includes(id));
  const hasAny = (symptoms) => symptoms.some((id) => symptomIds.includes(id));
  const countIn = (list) => list.filter(id => symptomIds.includes(id)).length;

  // ─── STAGE 1: CRITICAL EMERGENCIES (HIGH PRIORITY) ──────────────────────────
  
  // Heart/Emergency Symptoms - Even a single one is High Priority
  if (has('sym_ChestPain') || has('sym_ShortnessOfBreath')) {
    return {
      conditionKey: 'cond_HeartIssue',
      conditionName: 'Heart Issue',
      severity: 'High',
      severityLevel: 'High',
      guidance: {
        summaryKey: 'summ_HeartIssue',
        stepsKey: 'steps_HeartIssue',
        warningKey: 'warn_HeartIssue',
      },
    };
  }

  // Other High Severity Signs (Immediate Medical Attention)
  if (hasAny(['sym_Confusion', 'sym_Seizures', 'sym_SevereWeakness', 'sym_Dizziness'])) {
    return {
      conditionKey: 'cond_SeriousCondition',
      conditionName: 'Serious Condition',
      severity: 'High',
      severityLevel: 'High',
      guidance: {
        summaryKey: 'summ_SeriousCondition',
        stepsKey: 'steps_SeriousCondition',
        warningKey: 'warn_SeriousCondition',
      },
    };
  }

  // ─── STAGE 2: SPECIFIC CONDITION MATCHES (MEDIUM PRIORITY) ─────────────────

  // Flu: Classic set
  if (hasAll(['sym_Fever', 'sym_Cough', 'sym_SoreThroat'])) {
    return {
      conditionKey: 'cond_Flu',
      conditionName: 'Flu',
      severity: 'Medium',
      severityLevel: 'Medium',
      guidance: {
        summaryKey: 'summ_Flu',
        stepsKey: 'steps_Flu',
        warningKey: 'warn_Flu',
      },
    };
  }

  // Food Poisoning: Digestive distress
  if (hasAll(['sym_Vomiting', 'sym_Diarrhea']) || (has('sym_StomachPain') && hasAny(['sym_Vomiting', 'sym_Diarrhea']))) {
    return {
      conditionKey: 'cond_FoodPoisoning',
      conditionName: 'Food Poisoning',
      severity: 'Medium',
      severityLevel: 'Medium',
      guidance: {
        summaryKey: 'summ_FoodPoisoning',
        stepsKey: 'steps_FoodPoisoning',
        warningKey: 'warn_FoodPoisoning',
      },
    };
  }

  // Infection: General infectious markers
  if (hasAll(['sym_Fever', 'sym_Chills', 'sym_Sweating'])) {
    return {
      conditionKey: 'cond_Infection',
      conditionName: 'Infection',
      severity: 'Medium',
      severityLevel: 'Medium',
      guidance: {
        summaryKey: 'summ_Infection',
        stepsKey: 'steps_Infection',
        warningKey: 'warn_Infection',
      },
    };
  }

  // Migraine: Specific Neurological
  if (has('sym_Headache') && hasAny(['sym_BlurredVision', 'sym_Nausea'])) {
    return {
      conditionKey: 'cond_Migraine',
      conditionName: 'Migraine',
      severity: 'Medium',
      severityLevel: 'Medium',
      guidance: {
        summaryKey: 'summ_Migraine',
        stepsKey: 'steps_Migraine',
        warningKey: 'warn_Migraine',
      },
    };
  }

  // ─── STAGE 3: CATEGORY CLUSTERS ─────────────────────────────────────────────

  // Respiratory Cluster
  const respiratoryList = ['sym_Cough', 'sym_SoreThroat', 'sym_RunnyNose', 'sym_ChestCongestion', 'sym_Wheezing'];
  if (countIn(respiratoryList) >= 2 || has('sym_Cough')) {
    return {
      conditionKey: 'cond_RespiratoryIssue',
      conditionName: 'Respiratory Issue',
      severity: 'Medium',
      severityLevel: 'Medium',
      guidance: {
        summaryKey: 'summ_RespiratoryIssue',
        stepsKey: 'steps_RespiratoryIssue',
        warningKey: 'warn_RespiratoryIssue',
      },
    };
  }

  // Digestive Cluster
  const digestiveList = ['sym_StomachPain', 'sym_Vomiting', 'sym_Diarrhea', 'sym_Nausea', 'sym_Bloating'];
  if (countIn(digestiveList) >= 2 || hasAny(['sym_StomachPain', 'sym_Vomiting', 'sym_Diarrhea'])) {
    return {
      conditionKey: 'cond_DigestiveIssue',
      conditionName: 'Digestive Issue',
      severity: 'Medium',
      severityLevel: 'Medium',
      guidance: {
        summaryKey: 'summ_DigestiveIssue',
        stepsKey: 'steps_DigestiveIssue',
        warningKey: 'warn_DigestiveIssue',
      },
    };
  }

  // Neurological Cluster
  const neuroList = ['sym_Headache', 'sym_BlurredVision', 'sym_Numbness'];
  if (countIn(neuroList) >= 2 || has('sym_Headache')) {
    return {
      conditionKey: 'cond_NeurologicalIssue',
      conditionName: 'Neurological Issue',
      severity: 'Low',
      severityLevel: 'Low',
      guidance: {
        summaryKey: 'summ_NeurologicalIssue',
        stepsKey: 'steps_NeurologicalIssue',
        warningKey: 'warn_NeurologicalIssue',
      },
    };
  }

  // Skin/Urinary Cluster
  if (hasAny(['sym_SkinRash', 'sym_BurningUrination', 'sym_WoundInfection'])) {
    return {
      conditionKey: 'cond_SkinUrinary',
      conditionName: 'Skin/Urinary Issue',
      severity: 'Low',
      severityLevel: 'Low',
      guidance: {
        summaryKey: 'summ_SkinUrinary',
        stepsKey: 'steps_SkinUrinary',
        warningKey: 'warn_SkinUrinary',
      },
    };
  }

  // ─── DEFAULT ───────────────────────────────────────────────────────────────
  return {
    conditionKey: 'cond_GeneralIllness',
    conditionName: 'General illness',
    severity: 'Low',
    severityLevel: 'Low',
    guidance: {
      summaryKey: 'summ_GeneralIllness',
      stepsKey: 'steps_GeneralIllness',
      warningKey: 'warn_GeneralIllness',
    },
  };
};
