from flask import Blueprint, jsonify

user = Blueprint('user', __name__)

@user.route('<username>')
def getUserDetails(username):
    return jsonify({
        'username': username,
        'matches': ['Johnathan', 'Elmer'],
        'courses': ['NLP', 'OS', 'Combinatorics']
    })
