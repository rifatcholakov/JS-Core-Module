function buildAWall(numbers) {
    numbers = numbers.map(Number);

    let days = [];
    let elementsNumber = numbers.length;

    while (elementsNumber > 0) {
        let today = 0;

        for (let i = 0; i < numbers.length; i++) {
            if(numbers[i] === 30) {
                numbers.splice(i, 1);
                elementsNumber--;
                i--;
                continue;
            }

            today += 195;
            numbers[i] += 1;
        }

        if(today > 0) {
            days.push(today);
        }
    }

    let price = (days.reduce((a, b) => a + b)) * 1900;

    console.log(days.join(", "));
    console.log(price + " pesos");
}