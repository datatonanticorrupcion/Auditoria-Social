import * as express from 'express';

const myHtmlPage = "<!DOCTYPE html><html><body><h1>My First Google Map</h1><div id='googleMap' style='width:50%;height:500px; margin: 10%; text-align: center;'></div><script>function myMap(pos){var crd=pos.coords;console.log('Latitude : ' + crd.latitude);console.log('Longitude: ' + crd.longitude);center=new google.maps.LatLng(crd.latitude,crd.longitude);mrkpos=new google.maps.LatLng(19.35, -99.16);var mapProp={center:new google.maps.LatLng(crd.latitude,crd.longitude),zoom:14,};var map=new google.maps.Map(document.getElementById('googleMap'),mapProp);drawMarker(map, center, 'Descripcion 1');drawMarker(map, mrkpos, 'Descripcion 2');}var drawMarker=function(map, position, description){var marker=new google.maps.Marker({map: map, position: position, title: description,}); var infowindow=new google.maps.InfoWindow({content:description});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});}</script><script>var options={enableHighAccuracy: true,timeout: 5000,maximumAge: 0};function success(pos){var crd=pos.coords;console.log('Your current position is:');console.log('Latitude : ' + crd.latitude);console.log('Longitude: ' + crd.longitude);console.log('More or less ' + crd.accuracy + ' meters.');};function error(err){console.warn('ERROR(' + err.code + '): ' + err.message);};navigator.geolocation.getCurrentPosition(myMap, error, options);</script><script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBib2niP-3BLotbC45M6JynE9UehNbX4aA&callback=myMap'></script></body></html>";
export default express
  .Router()
  .get('/', () => {
    console.log('Getting page');
    return myHtmlPage;
  });
