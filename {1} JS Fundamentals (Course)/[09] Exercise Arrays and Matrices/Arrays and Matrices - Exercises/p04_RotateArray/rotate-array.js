function rotateArray(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations % arr.length; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    return arr.join(" ");
}