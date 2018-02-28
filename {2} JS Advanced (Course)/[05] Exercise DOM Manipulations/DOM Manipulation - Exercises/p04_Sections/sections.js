function create(sentences) {
    let content = document.getElementById("content");

    for (let sentence of sentences) {
        let div = document.createElement("div");
        let p = document.createElement("p");

        p.textContent = sentence;

        p.style.display = "none";
        div.addEventListener("click", show);

        div.appendChild(p);

        content.appendChild(div);

        function show() {
            p.style.display = "block";
        }
    }
}