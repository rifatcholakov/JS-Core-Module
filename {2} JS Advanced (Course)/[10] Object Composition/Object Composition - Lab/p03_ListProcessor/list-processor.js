function listProcessor(arr) {
    let list = [];

    let commands = {
        add: (string) => list.push(string),
        remove: (string) => list = list.filter(element => element !== string),
        print: () => console.log(list.join(","))
    };

    for (let item of arr) {
        let [command, string] = item.split(" ");
        commands[command](string);
    }
}