function leapYear(year) {
    let isLeap = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

    if(isLeap) {
        return "yes";
    } else {
        return "no";
    }
}