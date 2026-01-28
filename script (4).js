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
let form = document.querySelector("#setting-form")

  form.addEventListener("submit", function(e) {
e.preventDefault();
let name = song.song_name;
let artist = song.artist;
let imgSrc = song.songIMG
let newObj = {
"id" :getNextId(),
"name": name,
"artist": artist,
"imgSrc": imgSrc};
submitData(newObj);
form.reset();
 });