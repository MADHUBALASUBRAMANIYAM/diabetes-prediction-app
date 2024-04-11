from flask import Flask, request, jsonify
from joblib import load  # Assuming you're using joblib for the model

# Load your trained model (replace with your actual file path)
model = load('trained_model.joblib')

app = Flask(__name__)

@app.route('/submit_data', methods=['POST'])
def submit_data():
  try:
    data = request.get_json()

    # Preprocess data if necessary (e.g., convert data types)
    processed_data = [float(x) for x in data.values()]  # Example conversion to floats

    # Make prediction using the loaded model
    prediction = model.predict([processed_data])[0]

    message = f"Predicted Diabetes Test Result: {prediction}"
    return jsonify({'message': message})
  except Exception as e:
    print(f"Error processing data: {e}")
    return jsonify({'error': 'An error occurred'}), 500  # Internal Server Error

if __name__ == '__main__':
  app.run(debug=True)
