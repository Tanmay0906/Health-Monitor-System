const axios = require("axios");

exports.mlPrediction = functions.database
  .ref("/patients/{patientId}")
  .onCreate(async (snapshot) => {
    const data = snapshot.val();
    const response = await axios.post("https://your-flask-api/predict-bp", {
      hr: data.hr,
      spo2: data.spo2
    });
    return snapshot.ref.update(response.data);
  });