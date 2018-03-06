let createBook;
//Submit to judge from the next line
createBook = (function generateHTML() {
    let num = 1;

     return (selector, title, author, isbn) => {
        let selectorEl = $(selector);

        let div = $("<div>");
        div.attr("id", "book" + num);

        let titleEl = $("<p>");
        titleEl.addClass("title");
        titleEl.text(title);

        let authorEl = $("<p>");
        authorEl.addClass("author");
        authorEl.text(author);

        let isbnEl = $("<p>");
        isbnEl.addClass("isbn");
        isbnEl.text(isbn);

        let selectBtn = $("<button>Select</button>");
        selectBtn.on("click", function () {
           div.css("border", "2px solid blue")
        });

        let deselectBtn = $("<button>Deselect</button>");
        deselectBtn.on("click", function () {
           div.css("border", "none");
        });


        div.append(titleEl)
            .append(authorEl)
            .append(isbnEl)
            .append(selectBtn)
            .append(deselectBtn);

        selectorEl.append(div);

        num++;
    }
}());