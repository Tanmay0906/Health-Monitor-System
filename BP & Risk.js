// functions/index.js
const functions = require("firebase-functions");
const { db } = require("./firebase-admin");

exports.calculateHealth = functions.database
  .ref("/patients/{patientId}")
  .onCreate((snapshot, context) => {
    const data = snapshot.val();
    
    // Simple BP Estimation (Replace with ML later)
    const hr = data.hr;
    const spo2 = data.spo2;
    const systolic = Math.round(100 + (hr * 0.3));
    const diastolic = Math.round(70 + (hr * 0.2));
    const risk = (hr > 100 || spo2 < 90) ? "High Risk" : "Normal";

    return snapshot.ref.update({
      bp: `${systolic}/${diastolic}`,
      risk: risk,
      timestamp: new Date().toISOString()
    });
  });