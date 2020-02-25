function initMap(location) {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: { lat: 54.458065, lng: -3.064270 }
    });

    var selectedLocation = location;


        var marker = new google.maps.Marker({
        position: selectedLocation,
        map: map,
    });

    }
    


