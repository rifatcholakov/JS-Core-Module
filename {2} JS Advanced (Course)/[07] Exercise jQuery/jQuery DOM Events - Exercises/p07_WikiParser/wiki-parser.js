function wikiParser(selector) {
    let container = $(selector);
    let text = container.text();

    let headingsRegex = /(=+)(.+?)(=+)/;
    let boldRegex = /'''(.+?)'''/;
    let italicRegex = /''(.+?)''/;
    let linksRegex =  /(\[\[)([A-Za-z0-9 |]+?)(]])/g;

    while (headingsRegex.test(text)) {
        text = text.replace(headingsRegex, header)
    }

    while (boldRegex.test(text)) {
        text = text.replace(boldRegex, bold);
    }

    while (italicRegex.test(text)) {
        text = text.replace(italicRegex, italic);
    }

    while (linksRegex.test(text)) {
        text = text.replace(linksRegex, links);
    }

    container.html(text);

    function header(match, group1, group2, group3) {
        if(group1.length === 1) {
            group1 = "<h1>";
            group3 = "</h1>";
        } else if(group1.length === 2) {
            group1 = "<h2>";
            group3 = "</h2>";
        } else if(group1.length === 3) {
            group1 = "<h3>";
            group3 = "</h3>";
        }

        return group1 + group2 + group3;
    }

    function bold(match, group1) {
        return "<b>" + group1 + "</b>";
    }

    function italic(match, group1) {
        return "<i>" + group1 + "</i>";
    }
    
    function links(match, group1, group2, group3) {
        let args = group2.split("|");

        group1 = `<a href="/wiki/${args[0]}">`;
        group3 = "</a>";

        if(args.length > 1) {
            group2 = args[1];
        } else {
            group2 = args[0];
        }

        return group1 + group2 + group3;
    }
}