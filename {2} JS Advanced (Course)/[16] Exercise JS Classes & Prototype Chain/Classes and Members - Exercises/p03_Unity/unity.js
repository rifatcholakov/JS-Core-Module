class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    getRats() {
        return this.unitedRats;
    }

    unite(otherRat) {
        if(otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    toString() {
        let otherRats = '';

        for (let rat of this.unitedRats) {
            otherRats += '##' + rat.name + '\n';
        }

        return this.name + '\n' + otherRats;
    }
}