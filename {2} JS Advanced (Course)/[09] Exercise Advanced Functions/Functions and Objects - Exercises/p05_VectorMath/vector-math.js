(function vectorMath() {
    function add(vec1, vec2) {
        let [x1, y1] = vec1;
        let [x2, y2] =vec2;
        let result = [];
        result.push(x1 + x2);
        result.push(y1 + y2);

        return result;
    }

    function multiply(vec1, scalar) {
        let [x1, y1] = vec1;
        let result = [];

        result.push(x1 * scalar);
        result.push(y1 * scalar);

        return result;
    }

    function length(vec1) {
        let [x1, y1] = vec1;

        return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    }

    function dot(vec1, vec2) {
        let [x1, y1] = vec1;
        let [x2, y2] = vec2;

        return x1 * x2 + y1 * y2;
    }
    
    function cross(vec1, vec2) {
        let [x1, y1] = vec1;
        let [x2, y2] = vec2;

        return x1 * y2 - y1 * x2;
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
}());