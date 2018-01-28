function censorship(text, censoredWords) {
    for (let word of censoredWords) {
        let regex = new RegExp(word, "g");

        if(text.indexOf(word) > -1) {
            text = text.replace(regex, "-".repeat(word.length))
        }
    }

    return text;
}