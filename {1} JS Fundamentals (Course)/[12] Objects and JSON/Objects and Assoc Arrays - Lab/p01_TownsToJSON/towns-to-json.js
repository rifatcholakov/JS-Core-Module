function townsToJSON(arr) {
    let [town, latitude, longitude] = arr[0].split(/\s*\|\s*/).filter(x => x !== "");

    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let currentObject = {};

        let values = arr[i].split(/\s*\|\s*/).filter(x => x !== "");

        currentObject[town] = values[0];
        currentObject[latitude] = Number(values[1]);
        currentObject[longitude] = Number(values[2]);

        result.push(currentObject);
    }

    console.log(JSON.stringify(result));
}