//ubicamos el mapa en Buenos Aires
var map = L.map('map').setView([-34.595597, -58.371119], 8);

//añadimos el mapa de openstreet
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//latirud y longitud random
function positionRandom() {
   min = -90;
   max = 90;

   myLatLng = {
      lat: Math.random() * (max - min) + min,
      lng: Math.random() * (max - min) + min
   }
   return myLatLng;
}

// añadimos el marcador
function addMarker(e) {
   e.preventDefault();
   let description = document.getElementById("description").value;
   let myLatLng = positionRandom();
   L.marker(myLatLng).addTo(map)
      .bindPopup(description + "</br>Latitud: " + myLatLng.lat + "</br>Longitud: " + myLatLng.lng);
}