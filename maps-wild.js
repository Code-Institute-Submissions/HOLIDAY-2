function initMap() {

    // MARKER VARIABLES

    var lakeDistrict = { lat: 54.458065, lng: -3.064270 };
    var yorkDale = { lat: 54.196270, lng: -2.163206 };
    var cairngorms = { lat: 57.003131, lng: -3.547580 };
    var broads = { lat: 52.610484, lng: 1.631813 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: lakeDistrict
    });

    // LAKE DISTRICT NATIONAL PARK MARKER 

    var marker = new google.maps.Marker({
        position: lakeDistrict,
        map: map,
        title: 'Lake District'
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Lake District</h1>' +
        '<div id="bodyContent">' +
        '<p class="contentStringText">Lake District, also known as the Lakes or Lakeland, is a large ' +
        ' mountainous region in North West England. ' +
        'A popular holiday destination, it is famous for its lakes, forests and mountains (or fells),' +
        'and its associations with William Wordsworth and other Lake Poets ' +
        'and also with Beatrix Potter and John Ruskin. ' +
        'The Lake District National Park was established in 1951' +
        'and covers an area of 2,362 square kilometres.' +
        '<p class="contentStringText2">Attribution: Lake District National Park, <a href="https://en.wikipedia.org/wiki/Lake_District" target="_blank">https://en.wikipedia.org/wiki/Lake_District</a></p>' +
        '<p class="contentStringText2">Photo Credit: <a href="https://www.lakedistrict.gov.uk/visiting/webcams-videos-and-photos/freephotos" target="_blank">https://www.lakedistrict.gov.uk/visiting/webcams-videos-and-photos/freephotos</a></p>' +
        '<div class="contentStringImageContainer"><img src="assets/images/wildmaps/lakeDistrict/lake1.jpg" class="contentStringImage">' +
        '<img src="assets/images/wildmaps/lakeDistrict/lake2.jpg" class="contentStringImage"><img src="assets/images/wildmaps/lakeDistrict/lake3.jpg" class="contentStringImage">' +
        '<img src="assets/images/wildmaps/lakeDistrict/lake4.jpg" class="contentStringImage"></div>'
    '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // YORKSHIRE DALES NATIONAL PARK MARKER

    var marker2 = new google.maps.Marker({
        position: yorkDale,
        map: map,
        title: 'Yorkshire Dales'
    });

    marker2.addListener('click', function () {
        infowindow2.open(map, marker2);
    });

    var contentString2 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Yorkshire Dales</h1>' +
        '<div id="bodyContent">' +
        '<p class="contentStringText">The Yorkshire Dales has many moods; it can be wild and windswept or quietly tranquil. ' +
        'It includes some of the finest limestone scenery in the UK, from crags and pavements ' +
        'to an underground labyrinth of caves.' +
        'Stone-built villages sit amongst traditional farming landscapes of field barns, ' +
        'drystone walls and flower-rich hay meadows, and show how the area has ' +
        'has been shaped over thousands of years by the people who have lived and worked here.' +
        'Spectacular waterfalls and ancient broadleaved woodland contrast with the scattered remains of former mine workings' +
        'and other rural industries which remind us of the area’s rich industrial heritage. ' +
        '<p class="contentStringText2">Attribution: Yorkshire Dales National Park, <a href="https://www.yorkshiredales.org.uk/about/about-the-dales/" target="_blank">https://www.yorkshiredales.org.uk/about/about-the-dales/</a></p>' +
        '<p class="contentStringText2">Photo Credit: <a href="https://photos.yorkshiredales.org.uk/" target="_blank">https://photos.yorkshiredales.org.uk/</a></p>' +
        '<div class="contentStringImageContainer">' +
        '<img src="assets/images/wildmaps/yorkdales/strid.jpg" class="contentStringImage">' +
        '<p class="contentString2">Image Credit: Strid by Andy Kay </p>' +
    '<img src="assets/images/wildmaps/yorkdales/barn.jpg" class="contentStringImage">' +
        '<p class="contentString2">Image Credit: Barn by Andy Kay </p>' +
    '<img src="assets/images/wildmaps/yorkdales/meadow.jpg" class="contentStringImage">' +
        '<p class="contentString2">Image Credit: Meadow by Andy Kay </p>' +
    '<img src="assets/images/wildmaps/yorkdales/malham.jpg" class="contentStringImage"></div>' +
    '<p class="contentString2">Image Credit: Malham_Tarn by Dan Cook </p>' +
    '</div>' +
        '</div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });

    // CAIRNGORMS NATIONAL PARK MARKER

    var marker3 = new google.maps.Marker({
        position: cairngorms,
        map: map,
        title: 'Cairngorms'
    });

    marker3.addListener('click', function () {
        infowindow3.open(map, marker3);
    });

    var contentString3 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Cairngorms</h1>' +
        '<div id="bodyContent">' +
        '<p class="contentStringText">he Cairngorms is part of an international family of National Parks ' +
        'and is the largest in the UK, at 4,528 sq km (1,748 sq miles). ' +
        '49 per cent of the park has been recognised as being of international importance for nature,' +
        'and is protected by European Law. There are 19 Areas of Conservation, 12 Special Protection' +
        'Areas and 46 Sites of Special Scientific Interest within the Park. ' +
        "The Cairngorms National Park is home to one-quarter of Scotland's native forest," +
        'has more breeding waders than the whole of Wales and a quarter of the rare and endangered species in the UK!' +
        '<p class="contentStringText2">Attribution: Cairngorms National Park, <a href="https://cairngorms.co.uk/discover-explore/facts-figures/" target="_blank">https://cairngorms.co.uk/discover-explore/facts-figures/</a></p>' +
        '<p class="contentStringText2">Photo Credit: <a href="https://cairngorms.co.uk/photo-posts/map/" target="_blank">https://cairngorms.co.uk/photo-posts/map/</a></p>' +
        '<div class="contentStringImageContainer"><img src="assets/images/wildmaps/cairngorms/cairn1.jpg" class="contentStringImage">' +
        '<img src="assets/images/wildmaps/cairngorms/cairn2.jpg" class="contentStringImage"><img src="assets/images/wildmaps/cairngorms/cairn3.jpg" class="contentStringImage">' +
        '<img src="assets/images/wildmaps/cairngorms/cairn4.jpg" class="contentStringImage"></div>'
    '</div>' +
        '</div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });

    // THE BROADS MARKER

    var marker4 = new google.maps.Marker({
        position: broads,
        map: map,
        title: 'The Broads'
    });

    marker4.addListener('click', function () {
        infowindow4.open(map, marker4);
    });

    var contentString4 = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">The Broads</h1>' +
        '<div id="bodyContent">' +
        '<p class="contentStringText">The Broads is home to a huge variety of the rarest wildlife - greater ' +
        'than any other national park in Britain - and has become a ‘must-see’ for nature lovers. ' +
        'Our stunning landscape is home to more than a quarter of the rarest' +
        'species in the country, including several that are unique to the area.' +
        'Britain’s largest butterfly, The Swallowtail, and the Norfolk hawker dragonfly are found only here. ' +
        "With 25 percent of the park receiving international designation for its biodiversity," +
        'conservation of the Broads is incredibly important to the biodiversity of the UK. In fact it is Britain’s largest protected wetland.' +
        '<p class="contentStringText2">Attribution: The Broads National Park, <a href="https://www.visitthebroads.co.uk/discover-the-broads/about-the-broads" target="_blank">https://www.visitthebroads.co.uk/discover-the-broads/about-the-broads</a></p>' +
        '<p class="contentStringText2">Photo Credit: Broads Authority, <a href="https://www.broads-authority.gov.uk/news/photo-gallery" target="_blank">https://www.broads-authority.gov.uk/news/photo-gallery</a></p>' +
        '<div class="contentStringImageContainer"><img src="assets/images/wildmaps/broads/broads1.jpg" class="contentStringImage">' +
        '<img src="assets/images/wildmaps/broads/broads2.jpg" class="contentStringImage"><img src="assets/images/wildmaps/broads/broads3.jpg" class="contentStringImage">' +
        '<img src="assets/images/wildmaps/broads/broads4.jpg" class="contentStringImage"></div>'
    '</div>' +
        '</div>';

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });







}
