function equalNeighbors(matrix) {
    let counter = 0;

    function horizontalNrighbors(col, row) {
        if (col + 1 < matrix[row].length) {
            if (matrix[row][col] === matrix[row][col + 1]) {
                counter++;
            }
        }
    }

    function verticalNeighbors(col, row) {
        if (row + 1 < matrix.length) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                counter++;
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            horizontalNrighbors(col, row);
            verticalNeighbors(col, row);
        }
    }

    return counter
}