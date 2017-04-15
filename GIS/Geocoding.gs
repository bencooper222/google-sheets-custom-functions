var SLEEP = 1000;

/*
 * Returns the latitude of a given address or location (try "White House")
 */
function GEO_LAT(input) {
    Utilities.sleep(SLEEP); // Google gets cranky about calling this service too often
    return Maps.newGeocoder().geocode(input).results[0].geometry.location.lat;
}

/*
 * Returns the longitude of a given address or location (try "White House")
 */
function GEO_LNG(input) {
    Utilities.sleep(SLEEP); // Google gets cranky about calling this service too often
    return Maps.newGeocoder().geocode(input).results[0].geometry.location.lng;
}

/*
 * Returns the full latlng string of a given address or location (try "White House")
 */
function GEOCODE(input) {
    var location = Maps.newGeocoder().geocode(input).results[0].geometry.location;
    Utilities.sleep(SLEEP); // Google gets cranky about calling this service too often
    return location.lat + " " + location.lng;
}