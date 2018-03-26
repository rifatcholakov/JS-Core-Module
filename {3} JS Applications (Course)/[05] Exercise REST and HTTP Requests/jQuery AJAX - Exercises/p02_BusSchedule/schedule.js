function solve() {
    let currentStopName = "depot", nextStopName;

    function depart() {
        let URL = `https://judgetests.firebaseio.com/schedule/${currentStopName}.json`;

        $.get(URL).then(updateInformation).catch(error);
        
        function updateInformation(response) {
            $("#depart").attr("disabled", "disabled");
            $("#arrive").removeAttr("disabled");

            currentStopName = response.name;
            nextStopName = response.next;

            $("#info > span").text(`Next stop ${currentStopName}`)
        }

        function error() {
            $("#info > span").text(`Error`);

            $("#arrive").attr("disabled", "disabled");
            $("#depart").attr("disabled", "disabled");
        }
    }
    
    function arrive() {
        $("#arrive").attr("disabled", "disabled");
        $("#depart").removeAttr("disabled");

        $("#info > span").text(`Arriving at ${currentStopName}`);

        currentStopName = nextStopName;
    }
    
    return {
        depart,
        arrive
    };
}

let result = solve();