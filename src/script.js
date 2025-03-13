function initMap() {
  const location = { lat: -11.6877, lng: 27.5026 }; // Exemple : Lubumbashi
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 13,
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Emplacement",
  });
}
