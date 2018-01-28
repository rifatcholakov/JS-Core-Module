function usernames(arr) {
    let result = [];

    for (let email of arr) {
        let username = email.split("@")[0] + ".";
        let domain = email.split("@")[1].split(".");

        for (let string of domain) {
            username += string[0];
        }

        result.push(username);
    }

    return result.join(", ");
}