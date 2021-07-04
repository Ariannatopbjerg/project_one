// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

let street=L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	// attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

street.addTo(map);

// Icon options
var myfire = L.icon({
	iconUrl: 'free-fire-icon-8.jpg',
	iconSize: [20, 20]
});

// load dataset with special fire markers, slice rows
d3.csv("../Resources/wildfireDataFinal.csv").then(function(data) {
	// console.log(data)	
	// data.forEach(function(item){
		// data.slice(0,200).forEach(function(item){
		data.forEach(function(item){
		L.marker([item.Latitude, item.Longitude],{icon:myfire}).addTo(map);
	})
});

// wildfire dataset for map using original markers
// d3.csv("../Resources/wildfire_data_final.csv").then(function(data) {
// 	console.log(data)	
// 	data.forEach(function(item){
// 			var marker = L.marker([item.Latitude, item.Longitude]).addTo(map);
// 	})
// });

