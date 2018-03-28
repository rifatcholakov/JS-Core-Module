function loadCommits() {
    let username = $("#username");
    let repository = $("#repo");
    let list = $("#commits");

    const URL = `https://api.github.com/repos/${username.val()}/${repository.val()}/commits`;

    $.get(URL).then(getCommits).catch(err);
    
    function getCommits(repo) {
        list.empty();

        for (let obj of repo) {
            let li = `<li>${obj.commit.author.name}: ${obj.commit.message}</li>`;
            list.append(li);
        }

        clearInput();
    }

    function err(error) {
        list.empty();

        let li = `<li>Error: ${error.status} (${error.statusText})</li>`;
        list.append(li);

        clearInput();
    }

    function clearInput() {
        username.val("");
        repository.val("");
    }
}