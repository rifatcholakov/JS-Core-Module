function distance(coordinates) {
    let point1 = {
        x: coordinates[0],
        y: coordinates[1],
        z: coordinates[2]
    };

    let point2 = {
        x: coordinates[3],
        y: coordinates[4],
        z: coordinates[5]
    };

    return distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2) + Math.pow(point1.z - point2.z, 2));
}