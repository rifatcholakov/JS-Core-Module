function ends(string, substring) {
    return string.substr(string.length - substring.length) === substring;
}