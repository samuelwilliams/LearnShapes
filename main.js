/**
 * Draws a polygon of n sides about the origin
 *
 * @param n_sides
 * @param ϕ
 * @returns {Array}
 */
function getCoordinates(n_sides, ϕ) {
    var coordinates = [];
    ϕ = ϕ || Math.random() * Math.PI;

    for (var n = 0; n < n_sides; n++) {
        var x = Math.cos(ϕ + (n * 2 * Math.PI / n_sides));
        var y = Math.sin(ϕ + (n * 2 * Math.PI / n_sides));

        coordinates.push([x, y]);
    }

    return coordinates;
}

/**
 * Creates the points attribute for an SVG <polygon>
 *
 * @param n_sides Number of sides the polygon has
 * @param magnitude The size of the shape
 * @returns {string}
 */
function polygonPoints(n_sides, magnitude) {
    var coordinates = getCoordinates(n_sides);
    var Points = '';

    coordinates.forEach(function (P) {
        Points += parseInt(Math.round((P[0] + 1)*magnitude)) + ',' + parseInt(Math.round((P[1] + 1)*magnitude)) + ' ';
    });

    return Points;
}

/**
 * Names a polygon of n sides
 *
 * @param n_sides
 * @returns {*}
 */
function polygonName(n_sides) {
    var names = {
        1: "Point",
        2: "Line",
        3: "Triangle",
        4: "Square",
        5: "Pentagon",
        6: "Hexagon",
        7: "Heptagon",
        8: "Octagon",
        9: "Enneagon",
        10: "Decagon",
        11: "Hendecagon",
        12: "Dodecagon",
        13: "Triskaidecagon",
        14: "Tetrakaidecagon",
        15: "Pendedecagon",
        16: "Hexdecagon",
        17: "Heptdecagon",
        18: "Octdecagon",
        19: "Enneadecagon",
        20: "Icosagon"
    };

    if (n_sides > 20) {
        return n_sides + '-gon';
    }

    return names[n_sides];
}