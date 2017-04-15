/*
 * Heavily optimized version of the Harvesine formula
 * Calculates distance between two latlng positions 
 * Note that this formula assumes Earth is a perfect sphere (it's not)
 * That assumption can lead to errors of up to .5%
 */
function HARVESINE(lat1, lon1, lat2, lon2) {
    var pi = 0.017453292519943295; // Math.PI / 180
    var cos = Math.cos;
    var a = 0.5 - cos((lat2 - lat1) * pi) / 2 +
        cos(lat1 * pi) * cos(lat2 * pi) *
        (1 - cos((lon2 - lon1) * pi)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}