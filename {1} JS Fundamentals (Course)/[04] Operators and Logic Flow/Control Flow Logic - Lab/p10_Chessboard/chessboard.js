function chessboard(n) {
    let output = "<div class=\"chessboard\">\r\n";

    let previousColor = "black";

    if(n % 2 !== 0) {
        previousColor = "white";
    }

    for (let i = 0; i < n; i++) {
        output += "<div>\r\n";

        for (let j = 0; j < n; j++) {
            if(j === 0) {
                if(n % 2 !== 0) {
                    if(previousColor === "white") {
                        previousColor = "black";
                    } else {
                        previousColor = "white";
                    }
                }
            } else {
                if (previousColor === "white") {
                    previousColor = "black";
                } else {
                    previousColor = "white";
                }
            }

            output += `<span class="${previousColor}"></span>\r\n`;
        }

        output += "</div>\r\n";
    }

    output += "</div>";

    return output;
}