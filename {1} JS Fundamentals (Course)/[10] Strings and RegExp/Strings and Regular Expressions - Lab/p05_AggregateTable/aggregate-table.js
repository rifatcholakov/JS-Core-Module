function aggregateTable(arr) {
    let towns = [];
    let incomeSum = 0;

    for (let index in arr) {
        let args = arr[index].split("|");

        towns.push(args[1].trim());
        incomeSum += Number(args[2]);
    }

    console.log(towns.join(", ") + "\n" + incomeSum);
}