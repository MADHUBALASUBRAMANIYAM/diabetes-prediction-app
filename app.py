#app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle as pk
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the trained model 
pickle_file_path = "C:/Users/rithu/Downloads/ML/madhuflask/trained_model (1).sav"  # Update with the correct path to your model file
with open(pickle_file_path, 'rb') as f:
    loaded_model = pk.load(f)

# Prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_data = np.array([[data['Pregnancies'], data['Glucose'], data['BloodPressure'], data['SkinThickness'], data['Insulin'], data['BMI'], data['DiabetesPedigreeFunction'], data['Age']]])
    prediction = loaded_model.predict(input_data)
    result = "The person is diabetic." if prediction[0] == 1 else "The person is not diabetic."
    return jsonify({"result": result})

# Route for handling GET requests (optional, for documentation)
@app.route('/predict', methods=['GET'])
def documentation():
    return "This is the documentation for the /predict endpoint. Send a POST request with the required data to get predictions."

if __name__ == '__main__':
    app.run(debug=True)
