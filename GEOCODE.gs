var SLEEP = 1000;

/*
* Returns the latitude of a given address or location (try "White House")
*/
function GEO_LAT(input) {
    return Maps.newGeocoder().geocode(input).results[0].geometry.location.lat;
    Utilities.sleep(SLEEP); // Google gets cranky about calling this service too often
}

/*
* Returns the longitude of a given address or location (try "White House")
*/
function GEO_LNG(input) {
    return Maps.newGeocoder().geocode(input).results[0].geometry.location.lng;
    Utilities.sleep(SLEEP); // Google gets cranky about calling this service too often
}

/*
* Returns the full latlng string of a given address or location (try "White House")
*/
function GEOCODE(input) {
    var location = Maps.newGeocoder().geocode(input).results[0].geometry.location;
    Utilities.sleep(SLEEP); // Google gets cranky about calling this service too often
    return location.lat + " " + location.lng;
}
