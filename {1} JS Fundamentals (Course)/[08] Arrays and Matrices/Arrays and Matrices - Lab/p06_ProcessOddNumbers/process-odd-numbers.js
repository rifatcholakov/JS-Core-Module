function processOddNumbers(arr) {
    return arr.map(x => Number(x))
        .filter((el, i) => {
        return i % 2 !== 0;
    })
        .map(x => x * 2)
        .reverse();
}