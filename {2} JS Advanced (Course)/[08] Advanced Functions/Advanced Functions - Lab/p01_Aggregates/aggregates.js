function calcAggregates(arr) {
    console.log(`Sum = ${arr.reduce((a, b) => a + b)}`);
    console.log(`Min = ${Math.min(...arr)}`);
    console.log(`Max = ${Math.max(...arr)}`);
    console.log(`Product = ${arr.reduce((a, b) => a * b)}`);
    console.log(`Join = ${arr.reduce((a, b) => "" + a + b)}`);
}