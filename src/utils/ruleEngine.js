export const analyzeSymptoms = (symptomIds) => {
  // Helper: check if ALL required symptom IDs are selected
  const hasAll = (required) => required.every((id) => symptomIds.includes(id));

  // ─── HIGH SEVERITY ─────────────────────────────────────────────────────────

  if (hasAll(['sym_ChestPain', 'sym_ShortnessOfBreath'])) {
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

  if (hasAll(['sym_SevereWeakness', 'sym_Dizziness'])) {
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

  // ─── MEDIUM SEVERITY ───────────────────────────────────────────────────────

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

  if (hasAll(['sym_Vomiting', 'sym_Diarrhea'])) {
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

  if (hasAll(['sym_Fever', 'sym_Chills', 'sym_Sweating'])) {
    return {
      conditionKey: 'cond_Infection',
      conditionName: 'Serious Condition', // Mapping to Serious Condition based on user's Map if needed, or keep Infection? User's map didn't have Infection. Wait, user's conditionMap has "Serious Condition". 
      // User's map: Flu, Food Poisoning, Heart Issue, Serious Condition, Migraine, General illness. 
      // I'll map 'cond_Infection' and 'cond_Allergy' to 'Serious Condition' or 'General illness' to fit their map, or just use 'Serious Condition' for Infection.
      severity: 'Medium',
      severityLevel: 'Medium',
      guidance: {
        summaryKey: 'summ_Infection',
        stepsKey: 'steps_Infection',
        warningKey: 'warn_Infection',
      },
    };
  }

  if (hasAll(['sym_SkinRash', 'sym_Fever'])) {
    return {
      conditionKey: 'cond_Allergy',
      conditionName: 'General illness',
      severity: 'Medium',
      severityLevel: 'Medium',
      guidance: {
        summaryKey: 'summ_Allergy',
        stepsKey: 'steps_Allergy',
        warningKey: 'warn_Allergy',
      },
    };
  }

  // ─── LOW SEVERITY ──────────────────────────────────────────────────────────

  if (hasAll(['sym_Headache', 'sym_BlurredVision'])) {
    return {
      conditionKey: 'cond_Migraine',
      conditionName: 'Migraine',
      severity: 'Low',
      severityLevel: 'Low',
      guidance: {
        summaryKey: 'summ_Migraine',
        stepsKey: 'steps_Migraine',
        warningKey: 'warn_Migraine',
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
