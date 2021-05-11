mapboxgl.accessToken = 'pk.eyJ1Ijoic3VnaG9zaGR1cmciLCJhIjoiY2tvaGlheHBmMTZodTJvczltbTlsZndhcCJ9.MibpUWjA801h7RAVu_C1Tw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true})

function successLocation(position)
{
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])

}

function errorLocation ()
{
  setupMap([78.9629, 20.5937])

}

function setupMap(center) {
var map = new mapboxgl.Map(
    {
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: center,
zoom: 14
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric'
  });
  
  
  map.addControl(directions, 'top-left');

}
