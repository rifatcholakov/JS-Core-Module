function attachEvents() {
    const URL = "https://messenger-9e4bd.firebaseio.com/messenger.json";

    let submitBtn = $("#submit");
    let refreshBtn = $("#refresh");

    refreshBtn.on("click", refresh);
    submitBtn.on("click", postMessage);

    let chatBox = $("#messages");

    function refresh() {
        $.get(URL).then(getContent).catch(error);

        let chatBoxText = "";

        function getContent(messages) {
            for (let message in messages) {
                chatBoxText += `${messages[message].author}: ${messages[message].content}\n`;
            }

            chatBox.text(chatBoxText);
        }
    }

    function postMessage() {
        let author = $("#author");
        let content = $("#content");

        let message = {
            author: author.val(),
            content: content.val(),
            timestamp: Date.now()
        };

        $.post(URL, JSON.stringify(message)).then(refresh).catch(error);

        author.val("");
        content.val("");
    }

    function error() {
        $("#messages").text("Error").css("color", "red").css("text-align", "center");
    }
}

attachEvents();