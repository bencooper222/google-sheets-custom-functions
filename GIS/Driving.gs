/*
 * Returns the distance (in meters) of the drive between two locations
 * Automatically geocodes the locations
 * Make sure to be precise with locations to ensure accurate geocoding
 * Has some sort of rate limiting - documentation for what exactly not available
 */
function DRIVE_DISTANCE(location1, location2) {

    var directions = Maps.newDirectionFinder()
        .setOrigin(location1)
        .setDestination(location2)
        .setMode(Maps.DirectionFinder.Mode.DRIVING)
        .getDirections();

    if (directions.status == "OVER_QUERY_LIMIT") {
        return "OVER QUOTA";
    } else {
        return JSON.stringify(directions.routes[0].legs[0].distance.value);
    }
}

/*
 * Returns the time (in minutes) of the drive between two locations
 * Automatically geocodes the locations
 * Make sure to be precise with locations to ensure accurate geocoding
 * Has some sort of daily rate limiting - documentation for what not available
 */
function DRIVE_TIME(location1, location2) {

    var directions = Maps.newDirectionFinder()
        .setOrigin(location1)
        .setDestination(location2)
        .setMode(Maps.DirectionFinder.Mode.DRIVING)
        .getDirections();

    if (directions.status == "OVER_QUERY_LIMIT") {
        return "OVER QUOTA";
    } else {

        return JSON.stringify(directions.routes[0].legs[0].duration.value);
    }
}