function exactSubsequence(arr) {
    arr.map(x => Number(x));

    let currentNum = Number(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        if(currentNum <= arr[i]) {
            currentNum = arr[i];

            console.log(currentNum);
        }
    }
}