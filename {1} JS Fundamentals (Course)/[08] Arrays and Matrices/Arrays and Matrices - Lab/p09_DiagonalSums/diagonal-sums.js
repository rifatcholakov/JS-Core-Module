function diagonalSums(matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    return firstDiagonalSum + " " + secondDiagonalSum;
}