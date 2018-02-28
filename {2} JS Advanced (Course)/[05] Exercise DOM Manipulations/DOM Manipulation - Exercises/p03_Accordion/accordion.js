function toggle() {
    let btn = document.getElementsByTagName("span")[0];

    let text = document.getElementById("extra");

    if(btn.textContent === "More") {
        btn.textContent = "Less";
        text.style.display = "block";
    } else {
        btn.textContent = "More";
        text.style.display = "none";
    }
}