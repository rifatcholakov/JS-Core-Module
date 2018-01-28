function matchDates(arr) {
    let regex = /\b[0-9]{1,2}-[A-Z][a-z]{2}-[0-9]{4}\b/g;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        let test = regex.test(current);

        if (test) {
            let matches = current.match(regex);

            for (let match of matches) {
                let tokens = match.split('-');

                console.log(`${match} (Day: ${tokens[0]}, Month: ${tokens[1]}, Year: ${tokens[2]})`);
            }
        }
    }
}