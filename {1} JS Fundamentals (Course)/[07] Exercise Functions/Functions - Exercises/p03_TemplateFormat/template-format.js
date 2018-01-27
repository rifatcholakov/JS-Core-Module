function templateFormat(input) {
    let html = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<quiz>\n";

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];

        code("question", question);
        code("answer", answer);
    }

    return html += "</quiz>";

    function code(tag, type) {
            html += `<${tag}>\n`;
            html += type + "\n";
            html += `</${tag}>\n`;
    }
}