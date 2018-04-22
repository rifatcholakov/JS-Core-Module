function spiceMustFlow(startingYield) {
    startingYield = Number(startingYield);

    let daysMineOperated = 0;
    let extractedYield = 0;

    while (startingYield >= 100) {
        extractedYield += startingYield;
        extractedYield -= 26;
        startingYield -= 10;
        daysMineOperated++;
    }

    if(daysMineOperated >= 1) {
        extractedYield -= 26;
    }

    console.log(daysMineOperated);
    console.log(extractedYield);
}