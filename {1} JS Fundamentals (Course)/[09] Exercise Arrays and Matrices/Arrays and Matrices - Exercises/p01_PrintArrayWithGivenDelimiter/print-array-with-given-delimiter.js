function printArrayWithGivenDelimiter(arr) {
    let delimiter = arr.pop();

    return arr.join(delimiter);
}