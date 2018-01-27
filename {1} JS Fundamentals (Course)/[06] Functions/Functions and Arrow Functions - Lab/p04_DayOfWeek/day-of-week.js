function dayOfWeek(day) {
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return daysOfWeek.indexOf(day) !== -1 ? daysOfWeek.indexOf(day) + 1 : "error";
}