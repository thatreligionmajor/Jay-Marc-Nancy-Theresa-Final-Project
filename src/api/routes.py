"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from simyan.comicvine import Comicvine
from simyan.sqlite_cache import SQLiteCache

import requests

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


api = Blueprint('api', __name__)


    



    # return jsonify(response_body), 200

@api.route("/api/comics/publishers", methods=["GET"])
def get_publishers():
    """
    GET: <url>/api/comics/publishers?limit=<int>&offset=<int>
    """
    query = request.args
    session = Comicvine(api_key="95a8680d433d9ff13c2e5dd7eb480ff23089772d", cache=SQLiteCache())
    results = session.list_publishers(
        max_results=int(query.get("limit", 25)),
        params={
        "offset": int(query.get("offset", 0)),
        }
    )
    print(results)
    publishers = []
    for pub in results:
        #  https://simyan.readthedocs.io/en/latest/simyan/schemas/publisher/
        publishers.append({
            "name": pub.name,
            "site_url": pub.site_url
        })
    return jsonify(results=publishers), 200

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
    if "first_name" not in body:
        raise APIException('You need to specify the first name', status_code=400)
    if "last_name" not in body:
        raise APIException('You need to specify the last name', status_code=400)
    if "email" not in body:
        raise APIException('You need to specify the email', status_code=400)
    if "password" not in body:
        raise APIException('You need to specify the password', status_code=400)
    user.first_name = body["first_name"]
    user.last_name = body["last_name"]    
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


