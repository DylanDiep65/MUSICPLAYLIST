console.log("js console");

let data;
let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readySate == 4 && this.status == 200){
        data = JSON.parse(xhttp.responseText);
        HTMLFormControlsCollection.log(data);

        data.forEach(function(song){ 
            let card = document.createElement("div");
                card.classList.add("card");

                let textData =
                "<div class='song_name'>" + song.song_name + "</div>" +
                "<span>" + 
                "artist" + song.artist +
                "</span>";

                card.innerHTML = textData;

                if(game.imgSrc){
                    card.style.backgroundImage = "url(" + game.imgSrc + ")";
                    
                }



        })
    }
}