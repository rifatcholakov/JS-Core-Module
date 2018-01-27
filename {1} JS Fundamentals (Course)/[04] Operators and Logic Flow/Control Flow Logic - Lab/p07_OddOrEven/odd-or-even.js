function oddOrEven(number) {
    if(number % 1 != 0) {
        console.log("invalid");
        return;
    }

    if(number % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}