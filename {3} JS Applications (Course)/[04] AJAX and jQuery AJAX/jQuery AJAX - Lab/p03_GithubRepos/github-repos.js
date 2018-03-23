function loadRepos() {
    $("#repos").empty();

    let url = `https://api.github.com/users/${$("#username").val()}/repos`;

    $.ajax({
        url,
        success,
        error
    });

    function success(repos) {
        for (let repo of repos) {
            let link = $("<a>").text(repo.full_name).attr("href", repo.html_url);

            $("#repos").append($("<li>").append(link));
        }
    }
    
    function error(err) {
        $("#repos").append($("<li>Error</li>"));
    }
}