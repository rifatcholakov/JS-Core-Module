function attachEvents() {
    $("#btnLoadTowns").on("click", renderTowns);
    
    function renderTowns() {
        let towns = $("#towns")
            .val()
            .split(",")
            .map(el => ({
                town: el.trim()
            }))
            .filter(el => el.town !== "");

        loadTowns(towns);
    }
    
    async function loadTowns(towns) {
        let source = await $.get("towns-template.hbs");
        let compiled = Handlebars.compile(source);
        let template = compiled({
            towns
        });

        $("#root").html(template);
    }
}