function orderRectangles(matrix) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        let rectangle = createRectangle(matrix[i][0], matrix[i][1]);
        result.push(rectangle)
    }

    result.sort((a, b) => a.compareTo(b));

    return result;

    function createRectangle(width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: () => rectangle.width * rectangle.height,
            compareTo: (otherRectangle) => {
                let result = otherRectangle.area() - rectangle.area();

                return result || (otherRectangle.width - rectangle.width);
            }
        };

        return rectangle;
    }
}