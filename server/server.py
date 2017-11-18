from flask import Flask, request
from controllers.open_bus_emt_mad import OPEN_BUS_EMT_MAD

app = Flask(__name__) # create the application instance

app.register_blueprint(OPEN_BUS_EMT_MAD)

if __name__ == '__main__':
    app.run(debug=True)
