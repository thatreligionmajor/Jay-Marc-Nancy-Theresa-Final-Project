from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    # login_method = db.Column(db.String(80), unique=False, nullable=True)
    phone = db.Column(db.String(20), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, server_default='true')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            # "login_method": self.login_method,
            "phone": self.phone,
        }

class Magic(db.Model):
    __tablename__ = 'Magic'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    type = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    level = db.Column(db.String(80), unique=False, nullable=False)

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

class Events(db.Model):
    __tablename__ = 'Events'
    id = db.Column(db.Integer, primary_key=True)
    event_name = db.Column(db.String(80), unique=False, nullable=False)
    event_date = db.Column(db.String(80), unique=False, nullable=False)
    event_time = db.Column(db.String(80), unique=False, nullable=False)
    event_location = db.Column(db.String(80), unique=False, nullable=False)
    event_description = db.Column(db.String(80), unique=False, nullable=False)
    # event_image = db.Column(db.String(80), unique=False, nullable=False)
    # favorites = db.relationship('Favorites', backref='events')
    # user = db.relationship(User, backref='events')

    def __repr__(self):
        return f'<Events {self.event_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "event_name": self.event_name,
            "event_date": self.event_date,
            "event_time": self.event_time,
            "event_location": self.event_location,
            "event_description": self.event_description,
            # "event_image": self.event_image
        }

class Favorites(db.Model):
    __tablename__ = 'Favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    magic_id = db.Column(db.Integer, db.ForeignKey('Magic.id'), nullable=False)
    magic_name = db.Column(db.String(80), unique=False, nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('Events.id'), nullable=False)
    event_name = db.Column(db.String(80), unique=False, nullable=False)
    name = db.relationship(Magic)
    user = db.relationship(User)
    event = db.relationship(Events)

    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "magic_id": self.magic_id,
            "magic_name": self.magic_name,
        }