function search() {
    let search = $("#searchText").val();
    let matches = 0;

    $("li").each((index, item) => {
        if(item.textContent.includes(search)) {
            $(item).css("font-weight", "bold");
            matches++
        } else {
            $(item).css("font-weight", "");
        }
    });

    $("#result").text(matches + " matches found.");
}