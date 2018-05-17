class Stringer {
    constructor(string, length) {
        this.string = string;
        this.length = Number(length);
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.length += length;
        this.innerLength += length
    }

    decrease(length) {
        this.length -= length;
        this.innerLength -= length;

        if (this.length < 0 || this.innerLength < 0) {
            this.length = 0;
            this.innerLength = 0;
        }
    }

    toString() {
        let dots = '';

        if ((this.string).length > this.length) {
            dots = '...';
        }

        return (this.string).substring(0, this.length) + dots;
    }
}