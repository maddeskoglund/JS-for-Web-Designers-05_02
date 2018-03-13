var gMapAPIKey = "AIzaSyBjjttF0bWASIiGeqMWnvL_u8z0Z57YugE"


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('hplus-map'), {
    "center" : {lat: 59.6558442, lng: 16.9027197},
    "zoom" : 11,
    "mapTypeId" : google.maps.MapTypeId.ROADMAP,
    "draggable" : false,
    "scrollwheel" : false
  });

    var popupContent = "H+ Sport <br>";
        popupContent += "1750 Vine St <br>";
        popupContent += "Los Angeles, CA";

  var infowindow = new google.maps.InfoWindow ({
    "content" : popupContent
});

  var marker = new google.maps.Marker({
    "position" : {lat: 59.6558442, lng: 16.9027197},
    "map" : map,
    "title" : 'This is me!'
  });

  marker.addListener("click", function() {
      infowindow.open(map, marker);
  });



}

