function expedition(primaryMatrix, secondaryMatrix, overlayCoordinates, startingCoordinates) {
    let steps = 1;

    let primaryMatrixRows = primaryMatrix.length;
    let primaryMatrixCols = primaryMatrix[0].length;
    let secondaryMatrixRows = secondaryMatrix.length;
    let secondaryMatrixCols = secondaryMatrix[0].length;

    for (let pair of overlayCoordinates) {
        modifyPrimaryMatrix(pair);
    }
    
    function modifyPrimaryMatrix(coordinates) {
        let row = Number(coordinates[0]);
        let col = Number(coordinates[1]);

        for (let i = 0; i < secondaryMatrixRows; i++) {
            if(i + row < primaryMatrixRows) {
                for (let j = 0; j < secondaryMatrixCols; j++) {
                    if(primaryMatrix[i + row][j + col] !== undefined && secondaryMatrix[i][j] === 1) {
                        primaryMatrix[i + row][j + col] = primaryMatrix[i + row][j + col] === 0 ? 1 : 0;
                    }
                }
            }
        }
    }

    let currentPosition = [startingCoordinates[0], startingCoordinates[1]];
    let previousDirection;

    while (true) {
        if (currentPosition[0] + 1 < primaryMatrixRows && primaryMatrix[currentPosition[0] + 1][currentPosition[1]] === 0 && previousDirection !== "up") {
            currentPosition = [currentPosition[0] + 1, currentPosition[1]];
            previousDirection = "down";
        } else if (currentPosition[1] + 1 < primaryMatrixCols && primaryMatrix[currentPosition[0]][currentPosition[1] + 1] === 0 && previousDirection !== "left") {
            currentPosition = [currentPosition[0], currentPosition[1] + 1];
            previousDirection = "right";
        } else if (currentPosition[0] > 0 && primaryMatrix[currentPosition[0] - 1][currentPosition[1]] === 0 && previousDirection !== "down") {
            currentPosition = [currentPosition[0] - 1, currentPosition[1]];
            previousDirection = "up";
        } else if (currentPosition[1] > 0 && primaryMatrix[currentPosition[0]][currentPosition[1] - 1] === 0 && previousDirection !== "right") {
            currentPosition = [currentPosition[0], currentPosition[1] - 1];
            previousDirection = "left";
        } else {
            break;
        }
        steps++;
    }

    console.log(steps);
    definePosition(currentPosition);
    
    function definePosition(currentPosition) {
        let currentRow = currentPosition[0];
        let currentCol = currentPosition[1];

        if(currentRow === 0) {
            console.log("Top");
        } else if(currentRow === primaryMatrixRows - 1) {
            console.log("Bottom");
        } else if(currentCol === 0) {
            console.log("Left");
        } else if(currentCol === primaryMatrixCols - 1) {
            console.log("Right");
        } else if(currentRow < primaryMatrixRows / 2 && currentCol >= primaryMatrixCols / 2) {
            console.log("Dead end 1");
        } else if(currentRow < primaryMatrixRows / 2 && currentCol < primaryMatrixCols / 2) {
            console.log("Dead end 2");
        } else if(currentRow >= primaryMatrixRows / 2 && currentCol < primaryMatrixCols / 2) {
            console.log("Dead end 3");
        } else if(currentRow >= primaryMatrixRows / 2 && currentCol >= primaryMatrixCols / 2) {
            console.log("Dead end 4");
        }
    }
}