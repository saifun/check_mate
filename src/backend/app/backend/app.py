from flask import Flask

application = Flask(__name__)

application.register_blueprint(user, url_prefix='/api/user')

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=8080, debug=True)