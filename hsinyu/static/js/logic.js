// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

let street=L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

street.addTo(map);

// Icon options
var myfire = L.icon({
	iconUrl: '../static/images/free-fire-icon-8.jpg',
	iconSize: [20, 20]
});

// // load dataset with special fire markers optional slice rows
// d3.csv("../Resources/wildfireDataFinal.csv").then(function(data) {
// 	// data.forEach(function(item){
// 		// data.slice(0,200).forEach(function(item){
// 		data.forEach(function(item){
// 		L.marker([item.Latitude, item.Longitude],{icon:myfire}).addTo(map);
// 	})
// });
