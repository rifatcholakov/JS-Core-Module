function triangleOfDollars(number) {
    let triangle = "";

    for (let i = 1; i <= number; i++) {
        for (let j = 0; j < i; j++) {
            triangle += "$";
        }

        triangle += "\r\n";
    }

    return triangle;
}