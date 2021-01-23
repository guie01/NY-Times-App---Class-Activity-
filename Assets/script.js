function generateArticle(articleTile){
    var article = articleTile;
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=RIZzSuGfJ2j7fKGm9a4y8FO9moxPTekQ";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

      });
}