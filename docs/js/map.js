var mymap = L.map('mapid').setView([38.570571, -7.908909], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmViZXJ0aW9uZmlyZSIsImEiOiJjazN2amV1MXAwbWZnM2twaWcwZ3QwaWNqIn0.o9O9BaZyH0BuTm3dJZN4sg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicmViZXJ0aW9uZmlyZSIsImEiOiJjazN2amV1MXAwbWZnM2twaWcwZ3QwaWNqIn0.o9O9BaZyH0BuTm3dJZN4sg'
}).addTo(mymap);

L.marker([38.572758, -7.907294]).addTo(mymap)
    .bindPopup('<a href="theCity.html#text_modal_temple_diana">Templo Romano (Templo de Diana)  <br> Évora.</a>');
    
L.marker([38.573068, -7.909193]).addTo(mymap)
    .bindPopup('<a href="theCity.html">Arco Romano <br> Dona Isabel</a>');

L.marker([38.571877, -7.906994]).addTo(mymap)
    .bindPopup('<a href="theCity.html">Catedral (Sé) de Évora</a>');  

L.marker([38.571061, -7.909677]).addTo(mymap)
    .bindPopup('<a href="theCity.html"> Praça de Giraldo</a>');