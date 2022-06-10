var data;
function getname(q) {
  $.get(
    "https://www.omdbapi.com/?t=" + q + "&apikey=b958bc89",
    function (rawdata) {
      var rawstring = JSON.stringify(rawdata);
      data = JSON.parse(rawstring);

      var title = data.Title;
      var year = data.Year;
      var imdburl = "https://www.imdb.com/title/" + data.imdbID + "/";
      var posterurl = data.Poster;
      var genre = data.Genre;

      document.getElementById("answer").innerHTML =
        "<hr><h1> Title: " +
        title +
        "</h1> <img src= '" +
        posterurl +
        "'><br><p> Tip: <strong>" +
        genre +
        "</strong><br> Year: <strong>" +
        year +
        "</strong></p><p> IMDB page: <a href='" +
        imdburl +
        "'target='_blank'>" +
        imdburl +
        "</a></p>";
    }
  );
}
