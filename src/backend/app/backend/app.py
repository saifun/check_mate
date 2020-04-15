from flask import Flask
from .blueprints.user import user

application = Flask(__name__)

application.register_blueprint(user, url_prefix='/api/user')

@application.route('/')
def welcome():
    return 'WELCOME TO CHECK MATE!'

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=8080, debug=True)
