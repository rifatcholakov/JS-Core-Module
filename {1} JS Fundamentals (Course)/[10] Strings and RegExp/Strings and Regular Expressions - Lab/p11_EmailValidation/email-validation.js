function emailValidation(email) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;

    if(regex.test(email)) {
        return "Valid";
    }

    return "Invalid";
}