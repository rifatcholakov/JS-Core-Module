function air(textMatrix, elements) {
    let matrix = [];

    for (let i = 0; i < textMatrix.length; i++) {
        let currentRow = textMatrix[i]
            .split(" ")
            .map(Number);

        matrix.push(currentRow);

    }

    for (let i = 0; i < elements.length; i++) {
        let force = elements[i].split(" ")[0];
        let index = Number(elements[i].split(" ")[1]);

        if (force == "breeze") {
            for (let j = 0; j < matrix[index].length; j++) {
                matrix[index][j] -= 15;
                if (matrix[index][j] < 0) {
                    matrix[index][j] = 0;
                }
            }
        } else if (force == "gale") {
            for (let j = 0; j < matrix.length; j++) {
                matrix[j][index] -= 20;
                if (matrix[j][index] < 0) {
                    matrix[j][index] = 0;
                }
            }
        } else {
            for (let j = 0; j < matrix.length; j++) {
                for (let g = 0; g < matrix.length; g++) {
                    matrix[j][g] += index;
                }
            }
        }
    }

    let bool = false;
    let res = "";
    for (let j = 0; j < matrix.length; j++) {
        for (let g = 0; g < matrix.length; g++) {
            if (matrix[j][g] >= 50) {
                bool = true;
                res += "[" + j + "-" + g + "], ";
            }
        }
    }

    if (bool) {
        res = res.substr(0, res.length - 2);
        res = "Polluted areas: " + res;
    } else {
        res = "No polluted areas";
    }
    console.log(res);
}