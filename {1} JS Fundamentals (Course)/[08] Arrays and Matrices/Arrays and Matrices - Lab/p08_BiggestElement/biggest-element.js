function biggestElement(matrix) {
    return matrix.map(arr => arr.sort((a, b) => a < b)[0])
        .sort((a, b) => a < b)[0];
}