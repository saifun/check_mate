from flask import Blueprint, jsonify

user = Blueprint('user', name)


@user.route('/get/<user_id>')
def get_user(user_id):
    return {
        "name": "ido",
        "age": "29"
    }


@user.route('<username>')
def getUserDetails(username):
    return jsonify({
        'username': username,
        'matches': ['Johnathan', 'Elmer'],
        'courses': ['NLP', 'OS', 'Combinatorics']
    })
