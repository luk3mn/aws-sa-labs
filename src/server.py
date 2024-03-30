from flask import Flask
from src.routes import page_bp

app = Flask(__name__)
app.register_blueprint(page_bp)