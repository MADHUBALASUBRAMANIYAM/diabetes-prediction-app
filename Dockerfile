# Use an official Python runtime as the base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port for Streamlit (default is 8501)
EXPOSE 8501

# Command to run Streamlit app
CMD ["streamlit", "run", "PredWeb.py"]
