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

                if(song.songIMG){
                    card.style.backgroundImage = "url(" + song.songIMG + ")";

                }

          grid.appendChild(card);
        });
    }
};

xhttp.open("GET", "musicdata.JSON", true);
xhttp.send();

function openCity(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("defaultOpen").click();


 function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (song) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + song.song_name + "</div>" +
      "<div>Artist: " + song.artist+ "</div>" ;

      if(song.songIMG){
        card.style.backgroundImage = "url(" + song.songIMG + ")";

    }

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");}

  console.log("form script started");

// Safe load for form page (works even if script.js isn't loaded first)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
} else {
  data = [];
}

var form = document.querySelector("form");
var nameInput = document.querySelector("#name-input");
var artistInput = document.querySelector("#artist-input");
var imgInput = document.querySelector("#imageUrl-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    song_name: nameInput.value, 
artist: artistInput.value, 
songIMG: imgInput.value,
    
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  // Only render if grid exists on this page
  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});
