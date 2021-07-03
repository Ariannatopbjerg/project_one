// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


let street=L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

street.addTo(map);



// Read wildfire dataset for map
d3.csv("../wildfire_data_final.csv").then(function(data) {
	// console.log(data)
	data.forEach(function(item){
		var marker = L.marker([item.Latitude, item.Longitude]).addTo(map);
	})
});



    
    

  
<!-- <div class="container-fluid">

<div class="row">
	<div class="col-md-3">
		<form class="bg-dark">
			<p>Filter Search</p>
			<ul class="list-group bg-dark">
				<li class="list-group-item bg-dark">
					<label for="state"> Enter a State </label>
					<input type="text" placeholder="ca" id="state" />
				</li>
			</ul>
		</form>
	</div>
	<div class="col-md-9">
		<table class="table table-striped">
			<thead>
				<tr>
				  <th>State</th>
				  <th>State Full</th>
				  <th>Year</th>
				  <th>Resident Population</th>
				  <th>Percent Change in Resident Population</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
	</div>
</div> -->
<!-- </div> -->





