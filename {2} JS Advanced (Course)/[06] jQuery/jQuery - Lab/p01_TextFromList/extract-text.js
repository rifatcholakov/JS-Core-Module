function extractText() {
    let liItems = $("li")
        .toArray()
        .map(li => li.textContent)
        .join(", ");

    $("#result").text(liItems);
}