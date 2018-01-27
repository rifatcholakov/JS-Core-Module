function figureOfSquares(number) {
    let n = 0;

    let even = 0;
    let odd = 0;

    if(number % 2 === 0) {
        n = number - 1;
        even = 1;
    } else {
        n = number;
        odd = 2;
    }

    let output = "";

    for (let i = 1; i <= n; i++) {
        if(i === 1 || i === n || i === Math.ceil(n / 2)) {
            output += "+";

            for (let j = 0; j < n - odd - even; j++) {
                output += "-";
            }

            output += "+";

            for (let k = 0; k < n - odd - even; k++) {
                output += "-";
            }

            output += "+\r\n";
        } else {
            output += "|";

            for (let j = 0; j < n - odd - even; j++) {
                output += " ";
            }

            output += "|";

            for (let k = 0; k < n - odd - even; k++) {
                output += " ";
            }

            output += "|\r\n";
        }
    }

    return output;
}