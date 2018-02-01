function sumByTown(arr) {
    obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        let property = arr[i];
        let value = Number(arr[i + 1]);

        if(obj.hasOwnProperty(property)) {
            obj[property] += value;
        } else {
            obj[property] = value;
        }
    }

    return JSON.stringify(obj);
}

console.log(sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));