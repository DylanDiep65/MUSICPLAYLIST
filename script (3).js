console.log("js console");

let data;
let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        data = JSON.parse(xhttp.responseText);
       console.log(data);

        data.forEach(function(song){ 
            let card = document.createElement("div");
                card.classList.add("card");

                let textData =
                "<div class='song_name'>" + "Song: "+ song.song_name + "</div>" +
                "<span>" + 
                "Artist: " +" "+ song.artist +
                "</span>";

                card.innerHTML = textData;

                if(song.songIMG){
                    card.style.backgroundImage = "url(" + song.songIMG + ")";

                }
          grid.appendChild(card);
        });
    }
};

xhttp.open("GET", "musicdata.JSON", true);
xhttp.send();