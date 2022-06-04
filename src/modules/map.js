// Initialize and add the map
function initMap(lat, lng) {
    // The location
    const location = { lat, lng };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: location,
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
  window.initMap = initMap;
  
  export default initMap;