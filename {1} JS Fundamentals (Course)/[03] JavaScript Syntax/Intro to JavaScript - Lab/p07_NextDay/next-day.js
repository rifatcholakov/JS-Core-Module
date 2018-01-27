function nextDay(year, month, day) {
    let currentDate = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(currentDate.getTime() + oneDay);

    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate();
}