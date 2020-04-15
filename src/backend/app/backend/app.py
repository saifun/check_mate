from flask import Flask
# Import the flask sqlalchemy library. If you haven't installed it yet, do it
# by the command: "pip install Flask-SQLAlchemy" (assuming you're using
# windows).
from flask_sqlalchemy import SQLAlchemy
#from blueprints.user import user

application = Flask(__name__)
#application.register_blueprint(user, url_prefix='/api/user')

# Configure the db.
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///checkmate_db.db'
db = SQLAlchemy(application)


# Each one of the following classes represents a table in the db.
class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    email = db.Column(db.String(20))
    age = db.Column(db.Integer)
    about = db.Column(db.String(300))


class Request(db.Model):
    request_id = db.Column(db.Integer, primary_key=True)
    first_user_id = db.Column(db.Integer)
    second_user_id = db.Column(db.Integer)


# Example of adding data to the db.
@application.route('/<name>/<age>')
def add_to_db_test(name, age):
    user = User(name=name, age=age)
    db.session.add(user)
    db.session.commit()
    return "I've added a new user!"


# Example of retrieving data from the db.
@application.route('/<name>')
def get_data_from_db_test(name):
    user = User.query.filter_by(name=name).first()
    return 1
 #   return f'{ user.name } is { user.age } years old.'


@application.route('/')
def welcome():
    return 'WELCOME TO CHECK MATE!'

if __name__ == '__main__':
    # Initialize db and all of it's tables defined above.
    db.create_all()
    application.run(host='127.0.0.1', port=8080, debug=True)