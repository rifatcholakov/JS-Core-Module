function processCommands(commands) {
    let commandProcessor = (function () {
        let text = "";

        return {
            append: (newText) => text += newText,
            removeStart: (n) => text = text.slice(n),
            removeEnd: (n) => text = text.slice(0, text.length - n),
            print: () => console.log(text)
        }
    }());

    for (let command of commands) {
        [commandName, argument] = command.split(" ");
        commandProcessor[commandName](argument);
    }
}