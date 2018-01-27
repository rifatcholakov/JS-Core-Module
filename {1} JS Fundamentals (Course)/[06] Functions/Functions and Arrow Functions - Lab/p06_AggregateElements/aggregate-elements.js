function aggregateElements(arr) {
    aggregate(0, (a, b) => {return a + b});
    aggregate(0, (a, b) => {return a + 1 / b});
    aggregate("", (a, b) => {return a + b});

    function aggregate(initalValue, arrowFunction) {
        for (let i = 0; i < arr.length; i++) {
            initalValue = arrowFunction(initalValue, arr[i]);
        }

        console.log(initalValue);
    }
}