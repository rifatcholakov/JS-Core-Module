function distanceOverTime(elements) {
    let object1 = {
        speed: elements[0],
        distance: 0
    };

    let object2 = {
        speed: elements[1],
        distance: 0
    };

    let time = elements[2] / 3600;

    object1.distance = object1.speed * time;
    object2.distance = object2.speed * time;

    return Math.abs(object1.distance - object2.distance) * 1000;
}