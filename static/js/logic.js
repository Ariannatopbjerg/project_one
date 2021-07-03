
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.778259, -119.417931], 4);


let street=L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

street.addTo(map);


// Read wildfire dataset for map
// d3.csv("Resources/wildfire_data_final.csv").then(function(data) {
	// console.log(data)
// 	data.slice(0,10).forEach(function(item){
// 		var marker = L.marker([item.Latitude, item.Longitude]).addTo(map);
// 	})
// });

// Fremont
var marker1 = L.marker([37.548271, -121.988571]).addTo(map).bindPopup("Hsinyu in Fremont",{closeOnClick: false, autoClose: false});
// Sunnyvale
var marker2 = L.marker([37.368832, -122.036346]).addTo(map).bindPopup("Jen in Sunnyvale",{closeOnClick: false, autoClose: false});
// Pacifica
var marker3= L.marker([37.6138, -122.4869]).addTo(map).bindPopup("Natalie in Pacifica ",{closeOnClick: false, autoClose: false});
// Albany
var marker4 = L.marker([37.886870, -122.297748]).addTo(map).bindPopup("Arianna in Albany",{closeOnClick: false, autoClose: false});

// var popup1 = L.popup()
//     .setLatLng([37.548271, -121.988571])
//     .setContent("Hsinyu")
//     .openOn(map)

// var popup2 = L.popup()
//     .setLatLng([37.368832, -122.036346])
//     .setContent("Jen")
//     .openOn(map)

// var popup3 = L.popup()
//     .setLatLng([37.6138, -122.4869])
//     .setContent("Natalie")
//     .openPopup()

// var popup4 = L.popup()
//     .setLatLng([37.886870, -122.297748])
//     .setContent("Arianna")
//     .openPopup()
// d3.csv("../Resources/wildfire_data_final.csv").then(function(data) {
//     // console.log(data)    
//     // data.forEach(function(item){
//         data.slice(0,200).forEach(function(item){
//         L.marker([item.Latitude, item.Longitude],{icon:myfire}).addTo(map);
//     })
// });

// Icon options
// var myfire = L.icon({
//     iconUrl: 'free-fire-icon-8.jpg',
//     iconSize: [20, 20]
// });
// load dataset with special fire markers, slice rows
// d3.csv("Resources/wildfire_data_final.csv").then(function(data) {
//     // console.log(data)    
//     // data.forEach(function(item){
//         data.slice(0,200).forEach(function(item){
//         L.marker([item.Latitude, item.Longitude],{icon:myfire}).addTo(map);
//     });
// });