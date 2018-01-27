function totalAccumulatedValue(input) {
    let principalSum = input[0];
    let interestRate = input[1];
    let compoundingPeriod = 12 / input[2];
    let totalTimeSpan = input[3];

    let totalAccumulatedValue = principalSum * Math.pow(1 + ((interestRate / 100) / compoundingPeriod), compoundingPeriod * totalTimeSpan);

    return totalAccumulatedValue.toFixed(2);
}