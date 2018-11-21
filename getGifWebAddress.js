function myfunction() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var response = request.response;
      var list = JSON.parse(request.response);
      var gifURL2 = list.data.embed_url;
      document.getElementById("gifWebAddress").src=gifURL2;
    }
  }
  request.open('GET', "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny&rating=g",true);
  request.send();
}
