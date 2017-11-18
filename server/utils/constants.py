# API URLs
URL_OPENBUS = 'https://openbus.emtmadrid.es:9443/emt-proxy-server/last/'
URL_OPENGEO = 'https://openbus.emtmadrid.es:9443/emt-proxy-server/last/'
URL_PARKING = 'https://servicios.emtmadrid.es:8443/infoParking/infoParking.svc/json/'


# JSON endpoints
ENDPOINTS_BUS = {
    'get_calendar'           : 'bus/GetCalendar.php',
    'get_groups'             : 'bus/GetGroups.php',
    'get_list_lines'         : 'bus/GetListLines.php',
    'get_nodes_lines'        : 'bus/GetNodesLines.php',
    'get_route_lines'        : 'bus/GetRouteLines.php',
    'get_route_lines_route'  : 'bus/GetRouteLinesRoute.php',
    'get_times_lines'        : 'bus/GetTimesLines.php',
    'get_timetable_lines'    : 'bus/GetTimeTableLines.php'
}

ENDPOINTS_GEO = {
    'get_arrive_stop'        : 'geo/GetArriveStop.php',
    'get_arrive_client'      : 'geo/GetArriveClient.php',
    'get_groups'             : 'geo/GetGroups.php',
    'get_info_line'          : 'geo/GetInfoLine.php',
    'get_info_line_extended' : 'geo/GetInfoLineExtend.php',
    'get_poi'                : 'geo/GetPointsOfInterest.php',
    'get_poi_types'          : 'geo/GetPointsOfInterestTypes.php',
    'get_route_lines_route'  : 'geo/GetRouteLinesRoute.php',
    'get_stops_from_stop'    : 'geo/GetStopsFromStop.php',
    'get_stops_from_xy'      : 'geo/GetStopsFromXY.php',
    'get_stops_line'         : 'geo/GetStopsLine.php',
    'get_street'             : 'geo/GetStreet.php',
    'get_street_from_xy'     : 'geo/GetStreetFromXY.php'
}

ENDPOINTS_PARKING = {
    'detail_parking'          : 'detailParking/{id_client},{passkey}',
    'detail_poi'              : 'detailPOI/{id_client},{passkey}',
    'icon_description'        : 'iconDescription/{id_client},{passkey}',
    'info_parking_poi'        : 'infoParkingPoi/{id_client},{passkey}',
    'list_features'           : 'listFeatures/{id_client},{passkey}',
    'list_parking'            : 'listFeatures/{id_client},{passkey},{lang}',
    'list_street_poi_parking' : 'listStreetPoisParking/{id_client},{passkey},{address},{lang}',
    'list_types_poi'          : 'listTypesPOIs/{id_client},{passkey},{lang}'
}