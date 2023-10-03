import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
# from eralchemy import render_er
import datetime

from flask_sqlalchemy import SQLAlchemy

# Base=declarative_base()

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # user_favs = db.relationship('Favorites')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name
            # do not serialize the password, its a security breach
        }

class Magic(db.Model):
    __tablename__ = 'Magic'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False),
    type = db.Column(db.String(80), unique=False, nullable=False),
    description = db.Column(db.String(120), unique=False, nullable=False),
    level = db.Column(db.String(80), unique=False, nullable=False),
    # image = db.Column(db.String(80), unique=False, nullable=False),
    # magic_favs = db.relationship('Favorites')
    # user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)
    # favorites = db.relationship(Favorites)
    # user = db.relationship(User)

    def __repr__(self):
        return f'<Magic {self.id}>'
        
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "description": self.description,
            "level": self.level,
            "image": self.image
        }

class Favorites(db.Model):
    __tablename__ = 'Favorites'  
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), nullable=False)  
    magic_id = db.Column(db.Integer, db.ForeignKey('Magic.id'), nullable=False)  
    # magic = db.relationship('Magic', backref='Favorites')
    # events = db.relationship('Events', backref='favorites')
    # events_id = db.Column(db.Integer, db.ForeignKey('events.id'))
    # name = db.Column(db.String(80), unique=False, nullable=False)
    name = db.relationship(Magic, backref='favorites')
    user = db.relationship(User, backref='favorites')
    # magic = relationship(Magic)
    # name = relationship(Events, backref='favorites')    

    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            # "magic_name": self.magic_name,  
            "magic_id": self.magic_id,          
            # "magic": self.magic.serialize(),
            # "events": self.events.serialize()   
            # # "events_id": self.events_id,         
            
        }
    


# class Events(db.Model):
#     __tablename__ = 'Events'
#     id = db.Column(db.Integer, primary_key=True)
#     event_name = db.Column(db.String(80), unique=False, nullable=False)
#     event_date = db.Column(db.String(80), unique=False, nullable=False)
#     event_time = db.Column(db.String(80), unique=False, nullable=False)
#     event_location = db.Column(db.String(80), unique=False, nullable=False)
#     event_description = db.Column(db.String(80), unique=False, nullable=False)
#     event_image = db.Column(db.String(80), unique=False, nullable=False)
#     favorites = db.relationship('Favorites', backref='events')
#     user = relationship(User, backref='events')

#     def __repr__(self):
#         return f'<Events {self.event_name}>'
    
#     def serialize(self):
#         return {
#             "id": self.id,
#             "event_name": self.event_name,
#             "event_date": self.event_date,
#             "event_time": self.event_time,
#             "event_location": self.event_location,
#             "event_description": self.event_description,
#             "event_image": self.event_image
#         }