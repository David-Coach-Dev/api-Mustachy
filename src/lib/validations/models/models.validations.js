//===========
// Imports
//===========
import { model } from "mongoose";

//=====================
// Class Field Error
//=====================
class FieldError extends Error {}

//==========================
// Validate keys in model
//==========================
export const validateKeysInMongooseModel = (modelName, validateObject) => {
  const modelFields = loadModelFields(modelName);
  const errors = [];
  const validKeys = {};
  Object.keys(validateObject).forEach((key) => {
    if (modelFields.has(key)) {
      validKeys[key] = validateObject[key];
    } else {
      errors.push(
        `The ${key} field does not belong to the ${modelName} model.`
      );
    }
  });
  if (errors.length > 0) {
    throw new FieldError(errors.join(", ") + ".");
  }
  return validKeys;
};

//=====================
// Load Model Fields
//=====================
const loadModelFields = (modelName) => {
  const fields = Object.keys(model(modelName).schema.paths);
  return new Set(fields);
};

//==========================
// Save Date to UTC 0
//==========================
export const toUTCDate = (v) => {
  const date = v instanceof Date ? v : new Date(v);
  return date.toISOString();
};

//==========================
// Get System Region
//==========================
export const toLocalDate = (utcDate) => {
  const systemTimeZone = getSystemRegion();
  return systemTimeZone;
};

//==========================
// Get System Region
//==========================
const getSystemRegion = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
