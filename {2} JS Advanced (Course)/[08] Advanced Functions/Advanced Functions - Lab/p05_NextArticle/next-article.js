function getArticleGenerator(articles) {
    let contentHolder = $("#content");
    
    return function () {
        if(articles.length > 0) {
            let articleEl = $("<article>");
            articleEl.append($(`<p>${articles.shift()}</p>`));
            contentHolder.append(articleEl);
        }
    }
}