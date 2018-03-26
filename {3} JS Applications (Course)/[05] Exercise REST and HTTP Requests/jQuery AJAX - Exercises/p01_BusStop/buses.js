function getInfo() {
    let stopId = $("#stopId").val();

    const URL = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    $.get(URL).then(displaySchedule).catch(error);
    
    function displaySchedule(response) {
        $("#buses").empty();

        $("#stopName").text(response.name);

        for (let bus in response.buses) {
            let li = $("<li>").text(`Bus ${bus} arrives in ${response.buses[bus]} minutes`);
            $("#buses").append(li);
        }
    }

    function error() {
        $("#buses").empty();

        $("#stopName").text("Error");
    }
}