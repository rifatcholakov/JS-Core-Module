function argumentsInfo() {
    let summery = {};

    for (let arg of arguments) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if(!summery.hasOwnProperty(type)) {
            summery[type] = 0;
        }

        summery[type]++;
    }

    let sortedTypes = [];
    for (let currentType in summery) {
        sortedTypes.push([currentType, summery[currentType]]);
    }

    sortedTypes.sort((a, b) => b[1] - a[1]);

    for (let kvp of sortedTypes) {
        console.log(`${kvp[0]} = ${kvp[1]}`);
    }
}