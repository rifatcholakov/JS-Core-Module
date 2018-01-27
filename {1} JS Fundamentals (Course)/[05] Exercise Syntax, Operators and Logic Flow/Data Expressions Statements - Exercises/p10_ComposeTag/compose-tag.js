function composeTag(image) {
    let fileLocation = image[0];
    let alternateText =image[1];

    return `<img src="${fileLocation}" alt="${alternateText}">`
}