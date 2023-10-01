"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


    



# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    # password = request.json.get("password", None)
    # if email != "test" or password != "test":
    #     return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():
    msg = {"message": "Hello from the backend!"}
    # return jsonify(msg)
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

# @api.route('/new-releases', methods=['GET'])
# def get_new_releases():
#     newComicReleases = NewComicRelease.query.all()
#     return jsonify({newComicReleases}), 200

   

@api.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    return jsonify(all_users), 200      

@api.route('/user/<int:id>', methods=['GET'])   
def get_user(id):   
    user = User.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    return jsonify(user.serialize()), 200

@api.route('/signup', methods=['POST'])
def create_user():
    body = request.get_json()
    user = User()
    if "email" not in body:
        raise APIException('You need to specify the email', status_code=400)
    if "password" not in body:
        raise APIException('You need to specify the password', status_code=400)
    user.email = body["email"]
    user.password = body["password"]
    user.is_active = True
    
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize()), 200


@api.route('/user/<int:id>', methods=['PUT'])
def update_user(id):
    body = request.get_json()
    user = User.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    if "email" in body:
        user.email = body["email"]
    if "password" in body:
        user.password = body["password"]
    if "is_active" in body:
        user.is_active = body["is_active"]
    db.session.commit()
    return jsonify(user.serialize()), 200   

@api.route('/user/<int:id>', methods=['DELETE'])    
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        raise APIException('User not found', status_code=404)
    db.session.delete(user)
    db.session.commit()
    return jsonify(user.serialize()), 200       

@api.route('/private', methods=['GET'])
@jwt_required()
def get_private():
    return jsonify({"msg": "This is a private endpoint, you need to be logged in to see it"}), 200

@api.route('/private-scoped', methods=['GET'])
@jwt_required()
def get_private_scoped():
    return jsonify({"msg": "This is a private endpoint with scope 'read:messages'. You need to be logged in and have a JWT with the appropriate scope to see it"}), 200

@api.route('/forgot-password', methods=['POST'])
def forgot_password():
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()
    if user is None:
        raise APIException('User not found', status_code=404)
    return jsonify(user.serialize()), 200

@api.route('/reset-password', methods=['POST'])
def reset_password():
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()
    if user is None:
        raise APIException('User not found', status_code=404)
    return jsonify(user.serialize()), 200

@api.route('/change-password', methods=['POST'])
def change_password():
    body = request.get_json()
    user = User.query.filter_by(email=body["email"]).first()
    if user is None:
        raise APIException('User not found', status_code=404)
    return jsonify(user.serialize()), 200

# @api.route('/change-email', methods=['POST'])
# def change_email():
#     body = request.get_json()
#     user = User.query.filter_by(email=body["email"]).first()
#     if user is None:
#         raise APIException('User not found', status_code=404)
#     return jsonify(user.serialize()), 200

# @api.route('/change-username', methods=['POST'])
# def change_username():
#     body = request.get_json()
#     user = User.query.filter_by(email=body["email"]).first()
#     if user is None:
#         raise APIException('User not found', status_code=404)
#     return jsonify(user.serialize()), 200

