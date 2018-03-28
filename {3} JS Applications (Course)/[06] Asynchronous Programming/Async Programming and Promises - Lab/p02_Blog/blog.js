function attachEvents() {
    const URL = "https://baas.kinvey.com/appdata/kid_HJN33ItcM";
    const USERNAME = "Peter";
    const PASSWORD = "p";
    const BASE_64_AUTH = btoa(USERNAME + ":" + PASSWORD);
    const AUTH_HEADERS = {"Authorization": "Basic " + BASE_64_AUTH};

    $("#btnLoadPosts").on("click", loadPosts);
    $("#btnViewPost").on("click", showPost);

    let select = $("#posts");
    let postTitle = $("#post-title");
    let postBody = $("#post-body");
    let postComments = $("#post-comments");

    let savedPosts = {};

    function loadPosts() {
        $.ajax({
            url: URL + "/posts",
            headers: AUTH_HEADERS,
            success,
            error
        });

        function success(posts) {
            select.empty();

            for (let post of posts) {
                let option = `<option value="${post._id}">${post.title}</option>`;

                select.append(option);

                savedPosts[post._id] = post.body;
            }
        }
    }

    function showPost() {
        let selectedPost = select.find("option:selected");
        let title = selectedPost.text();
        let body = savedPosts[selectedPost.val()];

        (function loadComments() {
            $.ajax({
                url: URL + `/comments/?query={"post_id":"${selectedPost.val()}"}`,
                headers: AUTH_HEADERS,
                success,
                error,
            });

            function success(comments) {
                postComments.empty();

                postTitle.text(title);
                postBody.text(body);

                for (let comment of comments) {
                    let currentComment = $("<li>").text(comment.text);

                    postComments.append(currentComment);
                }
            }
        }());
    }

    function error() {
        document.writeln("Error");
    }
}

attachEvents();