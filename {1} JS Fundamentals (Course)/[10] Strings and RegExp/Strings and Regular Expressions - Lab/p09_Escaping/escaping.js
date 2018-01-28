function escape(arr) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g , "&quot;")
            .replace("/'/g", "&#39;");
    };

    let html = "<ul>\n";

    for (let string of arr) {
        html += `<li>${string.htmlEscape()}</li>\n`;
    }

    html += "</ul>";

    return html;
}