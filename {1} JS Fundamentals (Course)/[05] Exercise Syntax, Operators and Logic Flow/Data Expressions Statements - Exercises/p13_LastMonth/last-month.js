function lastMonth(date) {
    let currentDate = new Date(date[2], date[1] - 1, date[0]);

    let lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

    return lastMonth.getDate();
}