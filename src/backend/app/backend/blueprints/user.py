from flask import Blueprint, jsonify

user = Blueprint('user',name)

@user.route('/get/<user_id>')
def get_user(user_id):
    return {
      "name": "ido",
      "age": "29"
    }