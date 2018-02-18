function extract(elementId) {
    let text = document.getElementById(elementId).textContent;
    let elements = [];
    let regex = /\(([^)]+)\)/g;

    let match = regex.exec(text);

    while (match) {
        elements.push(match[1]);

        match = regex.exec(text);
    }

    return elements.join("; ");
}