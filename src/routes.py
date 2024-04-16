from flask import Blueprint, render_template

page_bp = Blueprint("page_routes", __name__, 
    template_folder="templates", 
    static_folder="static"
)

@page_bp.route("/")
def index():
    return render_template("index.html")

@page_bp.route("/storage-layer")
def storage_layer():
    return render_template('storage-layer.html')

@page_bp.route("/compute-layer")
def compute_layer():
    return render_template('compute-layer.html')

@page_bp.route("/database-layer")
def database_layer():
    return render_template('database-layer.html')

@page_bp.route("/vpc")
def vpc():
    return render_template('vpc.html')

@page_bp.route("/iam")
def iam():
    return render_template('iam.html')

@page_bp.route("/elastic")
def elastic():
    return render_template('elastic.html')

@page_bp.route("/automation")
def automation():
    return render_template('automation.html')
