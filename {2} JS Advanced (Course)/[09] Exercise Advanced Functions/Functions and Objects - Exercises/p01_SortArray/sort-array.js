function sortArray(array, type) {
    let sortCriteria = {
        "asc": sortAscending,
        "desc": sortDescending
    };

    function sortAscending(a, b) {
        return a - b;
    }

    function sortDescending(a, b) {
        return b - a;
    }

    return array.sort(sortCriteria[type]);
}