function initMap() {
  var lakeDistrict = {lat: 54.458065, lng: -3.064270};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: lakeDistrict
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Lake District</h1>'+
      '<div id="bodyContent">'+
      '<p class="contentStringText">Lake District, also known as the Lakes or Lakeland, is a large ' +
      ' mountainous region in North West England. '+
      'A popular holiday destination, it is famous for its lakes, forests and mountains (or fells),'+
      'and its associations with William Wordsworth and other Lake Poets '+
      'and also with Beatrix Potter and John Ruskin. '+
      'The Lake District National Park was established in 1951'+
      'and covers an area of 2,362 square kilometres.' +
      '<p class="contentStringText2">Attribution: Lake District, <a href="https://en.wikipedia.org/wiki/Lake_District" target="_blank">https://en.wikipedia.org/wiki/Lake_District</a></p>'+
      '<div class="contentStringImageContainer"><img src="assets/images/wildmaps/lake1.jpg" class="contentStringImage">' +
      '<img src="assets/images/wildmaps/lake2.jpg" class="contentStringImage"><img src="assets/images/wildmaps/lake3.jpg" class="contentStringImage">'+
      '<img src="assets/images/wildmaps/lake4.jpg" class="contentStringImage"></div>'
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: lakeDistrict,
    map: map,
    title: 'Lake District'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}