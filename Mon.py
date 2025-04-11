# app.py
from flask import Flask, request, jsonify
import numpy as np
import joblib  # For your trained ML model

app = Flask(__name__)

@app.route('/predict-bp', methods=['POST'])
def predict_bp():
    data = request.json
    hr = data['hr']
    spo2 = data['spo2']
    
    # Load your ML model 
    model = joblib.load('bp_model.pkl')
    # prediction = model.predict([[hr, spo2]])
    
    # For demonstration, let's assume the model predicts BP based on HR and SpO2
    
    return jsonify({
        "bp": f"{100 + int(hr*0.3)}/{70 + int(hr*0.2)}",
        "risk": "High" if hr > 100 else "Normal"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)