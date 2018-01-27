function reposition(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let number = Number(arr[i]);

        if(number >= 0) {
            result.push(number);
        } else {
            result.unshift(number);
        }
    }

    return result.join("\n");
}