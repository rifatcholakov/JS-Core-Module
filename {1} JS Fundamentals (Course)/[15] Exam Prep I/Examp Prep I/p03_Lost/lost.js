function lost(keyword, text) {
    let pattern = /(north|east)\D*(\d{2}).*?,\D*(\d{6})/gi;
    let messageReg = new RegExp(keyword + "(.*?)" + keyword);
    let message = messageReg.exec(text)[1];

    let match = pattern.exec(text);

    while (match) {
        if(match[1].toLowerCase() === "north") {
            var latOutput = `${match[2]}.${match[3]} N`;
        } else {
            var longOutput = `${match[2]}.${match[3]} E`;
        }

        match = pattern.exec(text);
    }

    console.log(latOutput + "\n" + longOutput + "\n" + "Message: " + message);
}
