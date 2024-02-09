"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_mail import Mail, Message
from dotenv import load_dotenv
import secrets
#from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False
app.config["DEBUG"] = True

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.getenv('JWT_SECRET_KEY')  # Change this!
# app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)

# Configure Flask-Mail
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT']=587
app.config['MAIL_USERNAME']='worstconventionevercon@gmail.com' # this is test gmail account for email generate
app.config['MAIL_PASSWORD']='rustdustbust' # important for email generate
app.config['MAIL_USE_TLS']=True
mail = Mail(app)
mail.init_app(app)

if (db_url := os.getenv("DATABASE_URL")) is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


# @app.route('/calendar', methods=['GET'])
# def get_events():
#     # need to define events here
#     # events =
#     # return jsonify(events), 200
#     pass

# #Nelson Chang: ALSO: events are not defined
# @app.route('/calendar', methods=['GET'])
# def get_events():
#     #need to define events here 
#     #events = 
#     #return jsonify(events), 200
#     pass
# Nelson Chang: ALSO: events are not defined


@app.route('/calendar', methods=['GET'])
def get_events():
    # need to define events here
    # events =
    # return jsonify(events), 200
    pass


# def send_reset_email(email, token):
#      msg = Message('Password Reset', sender="worstconventionevercon@gmail.com", recipients=[email])
#      msg.body = f'click the link below to reset your password:\n {os.getenv("FRONTEND_URL")}/reset-password?token={token}&email={email}'
     
#      msg.send(mail)
#      return "Mail has sent"

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
