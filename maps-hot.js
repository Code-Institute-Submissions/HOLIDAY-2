function initMap(location) {
 var selectedLocation = location;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: { lat: 28.291565, lng: -16.629129 }
    });

   


    var marker = new google.maps.Marker({
        position: selectedLocation,
        map: map,
    });

    var locations = {
        tenerifeLoc: { lat: 28.291565, lng: -16.629129 },
        santoriniLoc: { lat: 36.393154, lng: 25.461510 },
        vinarosLoc: { lat: 40.471001, lng: 0.474740 },
        portoLoc: { lat: 41.157944, lng: -8.629105 },
    }

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Tenerife</h1>' +
        '<div id="bodyContent">' +
        '<p class="contentStringText">Tenerife is the island of a thousand experiences. ' +
        'You can get lost in nature, relax on the beach, climb Teide, ' +
        'go shopping, see a show, walk the old town cobbles, ' +
        'have fun at a theme park, play golf… ' +
        'take off paragliding or take a walk through a forest that dates back to the Tertiary Period. ' +
        "Or you can choose to really do nothing at all and simply lie back on a sun bed under the warm rays of the Island's sun." +
        '<p class="contentStringText2">Attribution: Tenerife, <a href="https://www.hellocanaryislands.com/tenerife/" target="_blank">https://www.hellocanaryislands.com/tenerife/</a></p>' +
        '<p class="contentStringText2">Attribution: Tenerife, <a href="https://www.webtenerife.co.uk/what-to-do/" target="_blank">https://www.webtenerife.co.uk/what-to-do/</a></p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var contentString2 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Santorini</h1>' +
        '<div id="bodyContent">' +
        '<p class="contentStringText">Santorini is the world-famous volcanic island located in the most southern part ' +
        'of the Cyclades group of islands in the Aegean Sea, in Greece. ' +
        'Enjoy the coast of Santorini, the rim of the caldera and the volcano aboard' +
        'one of the catamarans, sailing boats motor yachts or traditional boats. ' +
        'Visit the excavations of Akrotiri, walk in traditional settlements, watch the sunset from the famous Oia village ' +
        ' and discover the islands wineries trying along the way many different wines.' +
        '<p class="contentStringText2">Attribution: Santorini, <a href="https://www.santorini.net/" target="_blank">https://www.santorini.net/</a></p>' +
        '</div>' +
        '</div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });

    var contentString3 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Vinaròs</h1>' +
        '<div id="bodyContent">' +
        '<p class="contentStringText">The Mediterranean town of Vinaros is located on the Costa Azahar in the province of Castellon,' +
        'in the autonomous community of Valencia. ' +
        'The main beach is El Forti, which stretches out from the port; 800 metres of beautiful golden sand.' +
        'Here you can relax and enjoy the beautiful climate of the Costa de Azahar, or partake in a number of different water sport activities on offer.' +
        'There are also a number of divine unspoilt coves in the area, ' +
        "with beautiful crystal clear water and rocky seabeds, perfect for scuba diving excursions." +
        'Within the town is the 16th century church, the Shrine of our Lady of Mercy, the Torre de los Moros (the Moorish Tower) and the Torre de Sol del Riu.' +
        '<p class="contentStringText2">Attribution: Vinaròs, <a href="https://www.spain-holiday.com/Vinaros" target="_blank">https://www.spain-holiday.com/Vinaros</a></p>' +
        '<p class="contentStringText2">Photo Credit: <a href="http://www.catalonia-valencia.com/vinaros-spain-travel-guide.html" target="_blank">http://www.catalonia-valencia.com/vinaros-spain-travel-guide.html</a></p>' +
        '</div>' +
        '</div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });

    var contentString4 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Porto</h1>' +
        '<div id="bodyContent">' +
        '<p class="contentStringText">Porto is a fascinating and vibrant city that is rapidly becoming one of Western Europe’s most respected tourist destinations. ' +
        'The city boasts an extensive history, interesting tourist attractions, ' +
        'and a buzzing nightlife, and outstanding tourist facilities. ' +
        'Porto is situated along the Costa Verde, a dramatic coastline of rocky headlands, sandy beaches and powerful seas.' +
        'The region is famed for the production of Port, which is still stored and matured in ' +
        "the vast cellars that stretch along the banks of the Douro River. " +
        '<p class="contentStringText2">Attribution: Porto, <a href="https://porto-north-portugal.com/" target="_blank">https://porto-north-portugal.com/</a></p>' +
    '</div>' +
        '</div>';

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });


    marker.addListener('click', function () {
        if (selectedLocation.lat === locations.tenerifeLoc.lat) {
            infowindow.open(map, marker);
        } else if (selectedLocation.lat === locations.santoriniLoc.lat) {
            infowindow2.open(map, marker);
        } else if (selectedLocation.lat === locations.vinarosLoc.lat) {
            infowindow3.open(map, marker);
        } else if (selectedLocation.lat === locations.portoLoc.lat) {
            infowindow4.open(map, marker);
        } else {
            console.log("error");
        }
        console.log(selectedLocation.lat);

    });




}



