var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function renderMap() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var location = new google.maps.LatLng(-19.925988, -43.947799);
  var mapOptions = {
    zoom: 16,
    center: location,
  scrollwheel: false
  };
  map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute(latitude, longitude) {
  var today = new Date();
  var request;
  var dest;

  var Digital=new Date()
  var hours=Digital.getHours()

  if (hours>=7&&hours<=12) 
    dest = '-19.938285, -43.999692';
  else 
    dest = '-19.913013, -43.913861';
  request = {
      origin: (latitude + ',' + longitude),
      destination: dest,
      travelMode: google.maps.TravelMode.DRIVING
  };
  
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

function renderGeolocationMap() {
  navigator.geolocation.getCurrentPosition(function(position) {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
      zoom: 17,
      center: location,
      scrollwheel: false
    };
    map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
  
    directionsDisplay.setMap(map);
  
    calcRoute(position.coords.latitude, position.coords.longitude);
  });
}

function initialize() {
  renderMap();
  if ('geolocation' in navigator) {
    renderGeolocationMap();
  } else {
    renderMap();
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
