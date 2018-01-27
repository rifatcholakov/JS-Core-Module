function multiplicationTable(number) {
    let output = "";
    output += "<table border=\"1\">\r\n";

    for (let i = 1; i <= number + 1; i++) {
        if(i === 1) {
            output += "<tr><th>x</th>";

            for (let j = 1; j <= number; j++) {
                output += `<th>${j}</th>`
            }

            output += "</tr>\r\n";
        } else {
            for (let j = 1; j <= number; j++) {
                if(j === 1) {
                    output += `<tr><th>${i - 1}</th>`;
                    output += `<td>${j * (i - 1)}</td>`;
                } else {
                    output += `<td>${j * (i - 1)}</td>`;
                }
            }
            output += `</tr>\r\n`;
        }

    }
    output += "</table>";

    return output;
}