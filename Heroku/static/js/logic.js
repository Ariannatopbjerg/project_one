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
d3.csv("../Resources/wildfire_data_final.csv").then(function(data) {
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



// function get_states() {
// 	d3.csv("../Resources/wildfire_data_final.csv").then(function (data) {
//   var states = [];
//   data.forEach(function (d) {
// 	if (states.indexOf(d.State) < 0) {
// 		  states.push(d.State);
// 	}
//   });
//   states.sort();
//   states.forEach(function(s) {
// 	$("#state").append("<option>" + s + "</option>");
//   });
//   console.log("csv states data", states);
// });

// }

// function filter_state(state) {
//    $("#fire_table").empty();
//    var headers = { 'State': 'State', 'Fire Cause': 'Fire_Cause', 'Fire Size': 'Fire_Size', 'Latitude': 'Latitude', 'Longitude': 'Longitude' }; 
//    var keys = Object.keys(headers);
//    //console.log("keys", keys);
//    var thead = d3.select("thead");
//    let header = tbody.append("tr");
//    keys.forEach(function(key) {
// 	 let cell = header.append("th");
// 	 cell.text(key);
// });
//    d3.csv("../Resources/wildfire_data_final.csv").then(function (data) {
//  datafilter = data.filter(holder => holder.State == state);
// 	 datafilter.forEach((dataRow) => {
// 			 let row = tbody.append("tr");
// 		 console.log("dataRow", dataRow);
// 		 keys.forEach(function(key) {
// 		   let cell = row.append("td");
// 		   cell.text(dataRow[headers[key]]);
// 		 });
// 	 });
//    });
// }

//  $(document).ready(function() {
// //grab the states from postgres or from csv
// var states = get_states();
// $("#state").on('change', function() {
//  var val = $("#state").val();
// 	 console.log("state value = ", val);
//  filter_state(val);
// });
// });


// // const tableData = data;

// var tbody = d3.select("tbody");

// // First, clear out any existing data
// tbody.html("");

// // d3.csv("../Resources/wildfire_data_final.csv").then(function (data) {
// // 	console.log(data)
// // 	datafilter = data.filter(holder => holder.State == "CA");

// // 	// let row = tbody.append("tr");
// // 	// Object.values(datafilter).forEach((valuel) => {
// // 	// // td = data, tr = row
// // 	// // let cell = row.append("td");
// // 	// console.log(datafilter)
// // 	// // cell.text(valuel);

// // 	datafilter.forEach((dataRow) => {
// // 		let row = tbody.append("tr");
// // 		Object.values(dataRow).forEach((val) => {
// // 		  let cell = row.append("td");
// // 		  cell.text(val);
// // 		  }
// // 		);
// // 	  });
// // });

// // 1. Create a variable to keep track of all the filters as an object.
// var filters = {};

// // 3. Use this function to update the filters. 
// function updateFilters() {

// 	// 4a. Save the element that was changed as a variable.
// 	let chgElement = d3.select(this);
// 	console.log("see data", chgElement)

// 	// 4b. Save the value that was changed as a variable.
// 	let elementValue = chgElement.property("value");
// 	console.log(elementValue);

// 	// 4c. Save the id of the filter that was changed as a variable.
// 	let filterId = chgElement.attr("id");
// 	console.log(filterId);

// 	// 6. Call function to apply all filters and rebuild the table
// 	filterTable();
// }

// // 7. Use this function to filter the table when data is entered.
// function filterTable() {

// 	// 8. Set the filtered data to the tableData.
// 	let filteredData = tableData;

// 	// 9. Loop through all of the filters and keep any data that
// 	// matches the filter values
// 	Object.entries(filters).forEach(([key, value]) => {
// 		if (filters[key] == value) {
// 			filteredData = filteredData.filter(row => row[key] === value);
// 		}
// 	})

// 	Object.entries(filters).forEach(([key, value]) => {
// 		if (filters[key] !== "") {
// 			filteredData = filteredData.filter(row => row[key] === value);
// 		}
// 	})

// 	// 10. Finally, rebuild the table using the filtered data
// 	buildTable(data);
// }

// // 2. Attach an event to listen for changes to each filter
// d3.selectAll("input").on("change", updateFilters);


