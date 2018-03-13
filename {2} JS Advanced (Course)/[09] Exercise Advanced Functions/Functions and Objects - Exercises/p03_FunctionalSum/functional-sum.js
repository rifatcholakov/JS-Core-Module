let add =
    //Submit to Judge from the next line
    (function () {
    let sum = 0;

    return function addAgain(num) {
        sum += num;
        addAgain.toString = () => sum;

        return addAgain;
    }
})();