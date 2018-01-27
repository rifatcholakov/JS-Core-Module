function findLetterOccurrences(word, letter) {
    let count = 0;

    let letters = word.toLowerCase().split("");

    for (let i = 0; i < letters.length; i++) {
        if(letters[i] === letter) {
            count++;
        }
    }

    console.log(count);
}