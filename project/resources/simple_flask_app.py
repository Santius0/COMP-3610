from flask import Flask, request, jsonify
from joblib import load

app = Flask(__name__)

# Load the saved logistic regression model
model = load('iris_logistic_regression_model.joblib')


@app.route('/predict', methods=['POST'])
def predict():
    # Extract input features from the POST request
    data = request.get_json()
    features = data['features']

    # Make a prediction
    prediction = model.predict([features])

    # Send back the prediction
    return jsonify({'prediction': int(prediction[0])})


if __name__ == '__main__':
    app.run(debug=True)
