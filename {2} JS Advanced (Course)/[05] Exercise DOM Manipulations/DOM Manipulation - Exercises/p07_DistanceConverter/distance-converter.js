function attachEventsListeners() {
    let btn = document.getElementById("convert");

    btn.addEventListener("click", function () {
    let inputDistance = document.getElementById("inputDistance").value;

    let firstSelect = document.getElementById("inputUnits");
    let inputUnit = firstSelect.options[firstSelect.selectedIndex].value;

    let secondSelect =  document.getElementById("outputUnits");
    let outputUnit = secondSelect.options[secondSelect.selectedIndex].value;

    let meters = 0;
    let output = 0;

        switch (inputUnit) {
            case "m":
                meters = inputDistance;
                break;

            case "km":
                meters = inputDistance * 1000;
                break;

            case "cm":
                meters = inputDistance / 100;
                break;

            case "mm":
                meters = inputDistance / 1000;
                break;

            case "mi":
                meters = inputDistance * 1609.344;
                break;

            case "yrd":
                meters = inputDistance * 0.9144;
                break;

            case "ft":
                meters = inputDistance * 0.3048;
                break;

            case "in":
                meters = inputDistance * 0.0254;
                break;
        }

        switch (outputUnit) {
            case "m":
                output = meters;
                break;

            case "km":
                output = meters / 1000;
                break;

            case "cm":
                output = meters * 100;
                break;

            case "mm":
                output = meters * 1000;
                break;

            case "mi":
                output = meters / 1609.344;
                break;

            case "yrd":
                output = meters / 0.9144;
                break;

            case "ft":
                output = meters / 0.3048;
                break;

            case "in":
                output = meters / 0.0254;
                break;
        }

        document.getElementById("outputDistance").value = output;
    });
}