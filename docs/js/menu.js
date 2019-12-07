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

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();