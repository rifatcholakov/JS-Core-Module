function wordsUppercase(string) {
    return  string.toUpperCase().split(/\W+/).filter(word => word !== "").join(", ");
}