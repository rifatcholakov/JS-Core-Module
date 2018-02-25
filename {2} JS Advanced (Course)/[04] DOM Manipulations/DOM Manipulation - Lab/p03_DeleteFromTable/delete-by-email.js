function deleteByEmail() {
    let emailToBeDeleted = document.getElementsByName("email")[0].value;
    let emails = document.querySelectorAll("td:nth-child(2)");

    for (let td of emails) {
        if(td.textContent === emailToBeDeleted) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById("result").textContent = "Deleted";

            return;
        }

        document.getElementById("result").textContent = "Not found.";
    }
}