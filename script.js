console.log('js console');

var xhttp  = new MLHttpRequest();

xhttp.onreadystatechange = function () {
    if (xhttp.eadyState === 4 && xhttp.status === 200)
{let songs = JSON.parse(xhttp.responseText);
    console.log(songs[0].title);
}
};

xhttp.open("GET", "gamebata.json", true);
xhttp.send();