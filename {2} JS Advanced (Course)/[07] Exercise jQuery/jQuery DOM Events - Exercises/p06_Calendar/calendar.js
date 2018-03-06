function calendar(arr) {
    let date = new Date(arr[2], arr[1] - 1, arr[0]);

    let today = date.getDate();
    let month = date.toLocaleString("en-us", {month: "long"});
    let year = date.getFullYear();

    let daysInThisMonth = new Date(year, arr[1], 0).getDate();

    let table = $("<table>");
    let caption = $(`<caption>${month} ${year}</caption>`);
    let tbody = $("<tbody>");
    let dayNames = $("<tr>");

    //Generate table heading(days of the week)
    for (let i = 1; i <= 7; i++) {
        let dayName = new Date(2018, 0, i).toLocaleString("en-us", { weekday: "long"}).substr(0, 3);

        let th = $(`<th>${dayName}</th>`);

        dayNames.append(th);
    }

    tbody.append(dayNames);

    //Fill the calendar with dates
    let firstDayOfMonth = new Date(year, arr[1] - 1, 1).getDay();

    if(firstDayOfMonth === 0) {
        firstDayOfMonth = 7;

    }

    let currentDate = 1;

    while (currentDate <= daysInThisMonth) {
        let tr = $("<tr>");

        for (let k = 0; k < 7; k++) {
            let td = $("<td>");

            if(today === currentDate) {
                td.addClass("today");
            }

            if(currentDate === 1 && firstDayOfMonth > 1) {
                tr.append(td);
                firstDayOfMonth--;
            } else {
                if(currentDate <= daysInThisMonth) {
                    td.text(currentDate);
                } else {
                    tr.append(td)
                }

                currentDate++
            }

            tr.append(td);
        }

        tbody.append(tr);
    }

    //Combining the table items together
    table
        .append(caption)
        .append(tbody);

    //Appending the table to the html
    $("#content").append(table);
}