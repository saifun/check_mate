from flask import Blueprint, jsonify

user = Blueprint('user', __name__)

@user.route('/get_data')
def get_data():

    new_user = {
        'name': 'אביב צנזור',
        'img_src': '/censor-profile.png',
        'age': 46,
        'semester': 7,
        'faculty': "מתמטיקה",
        'about': 'מלמד מתמטיקה, חובב כלבים וריצות '
                 'ארוכות. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג לית'
                 ' גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ. '
                 'עמחליף קולורס מונפרד צוט ומעיוט - לפתיעם ברשג.',
        'times': ["יום א' 20:00-22:00",
                "יום ב' 20:00-22:00",
                "יום ב' 20:00-22:00",
                "יום ב' 20:00-22:00",
                "יום ב' 20:00-22:00",
                "יום ב' 20:00-22:00",
                "יום ב' 20:00-22:00"],
        'effort': 3,
        'work_partition': 'עובדים ביחד'
    }

    return jsonify(new_user)

