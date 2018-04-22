function thePyramidOfKingDjoser(base, increment) {
    let cycle = base;

    if (base % 2 !== 0) {
        cycle++;
    }

    cycle /= 2;

    let stone = 0, marble = 0, lapis = 0, gold = 0;

    for (let i = 1; i <= cycle; i++) {
        if (i !== cycle) {
            stone += ((base - 2) * (base - 2)) * increment;


            if (i % 5 === 0) {
                lapis += ((base * 4) - 4) * increment;
            } else {
                marble += ((base * 4) - 4) * increment;
            }
        }

        if (i === cycle) {
            gold = (base * base) * increment;
        }

        base -= 2;
    }

    let totalHeight = cycle * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}