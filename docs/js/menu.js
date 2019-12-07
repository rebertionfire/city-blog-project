/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function ClearFields() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function hello(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    document.getElementById('nome').innerText = `${name}` 
    document.getElementById('mail').innerText = `${email}`
    document.getElementById('opacity').style.display='block'
    document.getElementById('popup').style.display = 'block'

}

function exitPopUp() {
    document.getElementById('popup').style.display = 'none'
    document.getElementById('opacity').style.display='none'
}




var mymap = L.map('mapid').setView([38.570571, -7.908909], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmViZXJ0aW9uZmlyZSIsImEiOiJjazN2amV1MXAwbWZnM2twaWcwZ3QwaWNqIn0.o9O9BaZyH0BuTm3dJZN4sg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicmViZXJ0aW9uZmlyZSIsImEiOiJjazN2amV1MXAwbWZnM2twaWcwZ3QwaWNqIn0.o9O9BaZyH0BuTm3dJZN4sg'
}).addTo(mymap);

L.marker([38.572758, -7.907294]).addTo(mymap)
    .bindPopup('Templo Romano <br> Évora.')


