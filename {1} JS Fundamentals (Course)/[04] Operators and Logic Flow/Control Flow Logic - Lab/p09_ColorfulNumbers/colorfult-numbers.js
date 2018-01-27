function colorfulNumbers(n) {
    let output = "<ul>\r\n";

    for (let i = 1; i <= n; i++) {
        if(i % 2 == 0) {
            output += `<li><span style='color:blue'>${i}</span></li>\r\n`;
        } else {
            output += `<li><span style='color:green'>${i}</span></li>\r\n`;
        }
    }

    output += "</ul>";

    return output;
}