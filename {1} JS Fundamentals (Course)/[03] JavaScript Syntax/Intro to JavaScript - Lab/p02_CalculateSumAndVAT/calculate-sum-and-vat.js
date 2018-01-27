function sum (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log( sum );

    let vat = sum * 0.2;
    console.log(vat);

    let total = sum + vat;
    console.log(total);
}