import joblib
from sklearn.pipeline import Pipeline

# Load the model
model = joblib.load('trained_model.sav')

# Re-save the model with the latest scikit-learn version
joblib.dump(model, 'updated_trained_model.sav')
