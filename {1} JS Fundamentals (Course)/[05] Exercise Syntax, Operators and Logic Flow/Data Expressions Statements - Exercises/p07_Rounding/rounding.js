function round(numbers) {
    let number = numbers[0];
    let precision = numbers[1];

    if(precision > 15) {
        precision = 15;
    }

    let digitsAfterDecimalPoint = number.toString().split(".");
    let digitsAfterDecimalPointLength = digitsAfterDecimalPoint[1].length;

    if(digitsAfterDecimalPointLength < precision) {
        return number;
    }

    return number.toFixed(precision);
}