function restaurantBill(arr) {
    let products = [];
    let totalSum = 0;

    for (let index in arr) {
        if(index % 2 === 0) {
            products.push(arr[index]);
        } else {
            totalSum += Number(arr[index]);
        }
    }

    return `You purchased ${products.join(", ")} for a total sum of ${totalSum}`;
}