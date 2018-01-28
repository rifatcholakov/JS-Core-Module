function matchMultiplication(text) {
    let regex = /[-+]?[0-9]+\s*\*\s*[-+]?[0-9]*\.?[0-9]+/g;

    let matches = text.match(regex);

    for (let match of matches) {
        let tokes = match.split("*");

        let num1 = Number(tokes[0].trim());
        let num2 = Number(tokes[1].trim());

        let result = num1 * num2;

        text = text.replace(match, result);
    }

    return text;
}