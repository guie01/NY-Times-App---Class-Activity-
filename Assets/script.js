function generateArticle(articleTile){
    var article = articleTile;
    var apiKey = "RIZzSuGfJ2j7fKGm9a4y8FO9moxPTekQ";
    var queryURL = "https://www.omdbapi.com/?t=" + movie + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {});
}