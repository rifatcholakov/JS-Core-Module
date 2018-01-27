function addAndRemoveElements(commands) {
    let arr = [];

    for (let i = 1; i <= commands.length; i++) {
        switch (commands[i - 1]) {
            case "add":
                arr.push(i);
                break;

            case "remove":
                arr.pop();
                break;
        }
    }

    if(arr.length === 0) {
        return "Empty";
    }

    return arr.join("\n");
}