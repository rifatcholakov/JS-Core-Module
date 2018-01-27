function boxesAndBottles(bottles, capacity) {
    for (let i = 1; i <= bottles; i++) {
        if(capacity * i >= bottles) {
            return i;
        }
    }
}