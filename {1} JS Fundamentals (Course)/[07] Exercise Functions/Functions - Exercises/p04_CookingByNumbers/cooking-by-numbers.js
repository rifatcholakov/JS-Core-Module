function cookingByNumbers(input) {
    let number = parseInt(input[0]);

    for (let i = 1; i < input.length; i++) {
        let currentOperation = input[i];

        let operations = {
            "chop": number / 2,
            "dice": Math.sqrt(number),
            "spice": number + 1,
            "bake": number * 3,
            "fillet": number - (number * 0.2)
        };

        number = operations[currentOperation];

        console.log(number);
    }
}