mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 11 // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: "red" })
.setLngLat(coordinates)
.setPopup(new mapboxgl.Popup({offset:25}).setHTML("<p>Location of the place</p>"))
.addTo(map);