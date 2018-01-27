function biggestNumber(numbers) {
    return numbers.reduce(function (a, b) {
        return Math.max(a, b);
    });
}