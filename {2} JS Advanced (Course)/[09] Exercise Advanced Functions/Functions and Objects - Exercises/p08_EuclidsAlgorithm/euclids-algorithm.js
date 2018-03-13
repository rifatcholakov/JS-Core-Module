function greatestCommonDivisor () {
    return gcd(arguments[0], arguments[1]);

    //EUCLID'S ALGORITHM
    function gcd (n, m) {
        let r = n % m;
        while(r > 0) {
            n = m;
            m = r;
            r = n % m;
        }

        return m;
    }
}