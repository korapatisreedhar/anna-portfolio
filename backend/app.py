from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from datetime import datetime

app = Flask(__name__)
CORS(app)
DB = "portfolio.db"

def init_db():
    with sqlite3.connect(DB) as con:
        con.execute("""
        CREATE TABLE IF NOT EXISTS contacts(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT,
            message TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
        """)

@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "Ramesh Portfolio API"})

@app.post("/api/contact")
def contact():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    subject = data.get("subject", "").strip()
    message = data.get("message", "").strip()

    if not name or not email or not message:
        return jsonify({"message": "Name, email and message are required."}), 400

    with sqlite3.connect(DB) as con:
        con.execute(
            "INSERT INTO contacts(name,email,subject,message,created_at) VALUES(?,?,?,?,?)",
            (name, email, subject, message, datetime.now().isoformat(timespec="seconds"))
        )
    return jsonify({"message": "Thanks! Your message has been received."})

if __name__ == "__main__":
    init_db()
    app.run(host="0.0.0.0", port=5000, debug=True)
