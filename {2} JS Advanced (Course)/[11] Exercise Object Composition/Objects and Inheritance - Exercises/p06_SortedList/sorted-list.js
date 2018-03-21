function sortedList() {
    let list = [];

    return {
        add: function (element) {
            list.push(element);
            list.sort((a, b) => a - b);
            this.size++;
        },

        remove: function (index) {
            isOutOfRange(this.size, index);
            list.splice(index, 1);
            this.size--;
        },

        get: function (index) {
            isOutOfRange(this.size, index);
            return list[index];
        },

        size: 0
    };
    
    function isOutOfRange(listSize, index) {
        if(listSize < index || index < 0 || listSize === 0) {
            throw Error("The index is out of range or the list is empty");
        }
    }
}