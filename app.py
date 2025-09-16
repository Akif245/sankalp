from flask import Flask, request, jsonify, send_from_directory
import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load .env file
load_dotenv()

app = Flask(__name__, static_folder="static")

# Serve index.html
@app.route("/")
def home():
    return send_from_directory(".", "index.html")

# Course generation endpoint
@app.route("/generate_course", methods=["POST"])
def generate_course():
    data = request.get_json()
    topic = data.get("topic", "")

    if not topic:
        return jsonify({"error": "No topic provided"}), 400

    try:
        # Configure Gemini
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
        model = genai.GenerativeModel("gemini-1.5-flash")

        response = model.generate_content(f"Create a simple, structured course outline for: {topic}")
        return jsonify({"course": response.text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
