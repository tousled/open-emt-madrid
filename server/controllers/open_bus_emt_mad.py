import requests
from flask import Flask, Blueprint, request, jsonify
from utils.utils import Utils
from utils.constants import URL_OPENBUS, URL_OPENGEO, ENDPOINTS_BUS, ENDPOINTS_GEO
from utils.config import PARAMS

OPEN_BUS_EMT_MAD = Blueprint('open_bus_emt_mad', __name__)


class OpenBusEmtMad(object):

    @OPEN_BUS_EMT_MAD.route('/geo/stop/<int:idStop>', methods=['GET'])
    def get_times_lines(idStop = None):
        request_params = {'idStop': idStop}
        return jsonify(OpenBusEmtMad.wrapper('get_arrive_stop', **request_params))

    @staticmethod
    def wrapper(endpoint, **kwargs):
        req = requests.Session()
        url = URL_OPENGEO + ENDPOINTS_GEO[endpoint]
        kwargs['idClient'] = PARAMS['USERNAME']
        kwargs['passKey'] = PARAMS['SECRET_KEY']
        return req.post(url, data=kwargs, verify=True).json()
