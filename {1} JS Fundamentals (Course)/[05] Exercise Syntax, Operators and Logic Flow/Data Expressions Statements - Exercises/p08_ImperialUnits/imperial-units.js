function unitConversion(inches) {
    let feet = Math.floor(inches / 12);
    let inchesRemaining = inches % 12;

    return feet + "'" + "-" + inchesRemaining + "\"";
}