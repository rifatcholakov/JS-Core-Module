function formFiller(username, email, phone ,arr) {
    for (let str of arr) {
        let usernameRegex = /<![A-Za-z]+!>/g;
        let emailRegex = /<@[A-Za-z]+@>/g;
        let phoneRegex = /<\+[A-Za-z]+\+>/g;

        str = str.replace(usernameRegex, username)
            .replace(emailRegex, email)
            .replace(phoneRegex, phone);

        console.log(str);
    }
}