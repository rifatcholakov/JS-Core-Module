function domSearch(selector, caseSensitive) {
    selector = $(selector);

    let addControls, searchControls, resultControls, ul;

    (function generateAddControls() {
        addControls = $("<div>");
        addControls.addClass("add-controls");

        let label = $("<label>");
        label.text("Enter text:");

        let input = $("<input>");
        label.append(input);

        let anchor = $("<a>Add</a>");
        anchor.addClass("button");
        anchor.on("click", function () {
            let deleteBtn = $("<a>X</a>");
            deleteBtn.addClass("button");
            deleteBtn.on("click", function () {
               $(this).parent().remove();
            });

            let text = input.val();

            let li = $("<li>");
            li.html(deleteBtn);
            li.append(`<strong>${text}</strong>`)
            li.addClass("list-item");

            ul.append(li);
            input.val("");
        });

        addControls
            .append(label)
            .append(anchor);
    }());
    
    (function generateSearchControls() {
        searchControls = $("<div>");
        searchControls.addClass("search-controls");

        let label = $("<label>");
        label.text("Search:");

        let input = $("<input>");

        input.on("change", function () {
            let matches = $("li").css("display", "block");
            matches.each((index, element) => {
                element = $(element);
                let currentEl = $(element).text();
                let inputVal = input.val();

                if(!caseSensitive) {
                    currentEl = currentEl.toLowerCase();
                    inputVal = inputVal.toLowerCase();
                }

                if(!(currentEl.indexOf(inputVal) >= 0)) {
                    element.css("display", "none");
                }
            });
        });

        label.append(input);

        searchControls.append(label);
    }());

    (function generateResultControls() {
        resultControls = $("<div>");
        resultControls.addClass("result-controls");

        ul = $("<ul>");
        ul.addClass("items-list");

        resultControls.append(ul);
    }());

    selector
        .append(addControls)
        .append(searchControls)
        .append(resultControls);
}