from flask import Flask, request, abort, render_template, jsonify

app = Flask(__name__)

# Vistas del index
@app.route('/')
def index():
    print("Hey what's up?")