function attachEvents() {
    $("#items li").on("click", select);

    function select() {
        let li = $(this);
        if(li.attr("data-selected")) {
            li.removeAttr("data-selected");
            li.css("background", "");
        } else {
            li.attr("data-selected", true);
            li.css("background", "#DDD");
        }
    }

    $("#showTownsButton").on("click", extractTowns);
    
    function extractTowns() {
        let selLi = $("#items li[data-selected=true]");
        let towns = selLi
            .toArray()
            .map(li => li.textContent).join(", ");

        $("#selectedTowns").text("Selected towns: " + towns);
    }
}