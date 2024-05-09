from flask import Flask, jsonify
import temp
import logging

# Set up basic logging
logging.basicConfig(level=logging.INFO)

def create_app():
    """Function to create and configure the Flask app."""
    app = Flask(_name_)

    @app.route('/temperature')
    def get_temperature():
        """Endpoint to get the current temperature."""
        try:
            temperature = temp.read_temp()  # Assuming read_temp() is the function you've implemented
            if temperature is not None:
                return jsonify({'temperature': temperature})
            else:
                logging.error("Failed to retrieve temperature.")
                return jsonify({'error': 'Temperature data not available'}), 500
        except Exception as e:
            logging.error(f"Error in get_temperature: {e}")
            return jsonify({'error': 'Internal server error'}), 500

    return app

if _name_ == '_main_':
    app = create_app()
    app.run(host='0.0.0.0', port=5000, debug=True)