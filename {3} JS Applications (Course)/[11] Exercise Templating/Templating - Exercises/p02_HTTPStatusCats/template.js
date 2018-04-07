$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let source = await $.get("cat-template.hbs");
        let compiled = Handlebars.compile(source);
        let template = compiled({
            cats: window.cats
        });
        $("body").append(template);

        $(".btn-primary").on("click", function (ev) {
            let targetBtn = $(ev.target);
            let infoDiv = targetBtn.next();

            let text = targetBtn.text();
            if(text.includes("Show")) {
                targetBtn.text(text.replace("Show", "Hide"));
            } else {
                targetBtn.text(text.replace("Hide", "Show"));
            }

            infoDiv.toggle();
        });
    }

});
