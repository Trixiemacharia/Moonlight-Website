# Start from official Python image
FROM python:3.11-slim

# Install system dependencies needed for mysqlclient
RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    pkg-config \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Set working directory inside the container
WORKDIR /app

# Copy requirements first (so Docker caches this layer)
COPY requirements.txt .

# Install Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code
COPY . .

# Expose port 8000 for Django
EXPOSE 8000

# Command to run when container starts
CMD ["gunicorn", "moonlight.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]