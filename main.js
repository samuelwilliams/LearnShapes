

function getCoordinates(n_sides) {
    var coords = [];

    for (var n = 0; n < n_sides; n++) {
        var x = Math.cos(n * 2 * Math.PI / n_sides) + 1;
        var y = Math.sin(-n * 2 * Math.PI / n_sides) + 1;

        coords.push([x, y]);
    }

    return coords;
}

function polygonPoints(coords, magnitude) {
    var Points = '';
    coords.forEach(function (coord) {
        Points += parseInt(Math.round(coord[0]*magnitude)) + ',' + parseInt(Math.round(coord[1]*magnitude)) + ' ';
    });

    return Points;
}

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