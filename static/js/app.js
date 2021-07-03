

// from data.js
//const tableData = data;

// get table references
var selectedstate=null;
var tbody = d3.select("fire_table");

function init() {
  d3.csv("Resources/wildfire_data_final_of_final.csv").then(function(data){
    
    var states_manu=[];
    var county_manu=[];
    
    data.forEach(function(row){
      
      if (states_manu.indexOf(row.State_name)<0){
        states_manu.push(row.State_name)
    }
      
      if (county_manu.indexOf(row.County)<0){
        county_manu.push(row.County)
    }      
  
  });

    states_manu.sort();
    county_manu.sort();

    states_manu.forEach(function (state){
      var stateselector = d3.select("#state");
      stateselector.append("option").text(state);
    });

    county_manu.forEach(function (county){
      var countyselector = d3.select("#county");
      countyselector.append("option").text(county);
    });

    // var select = document.getElementById("state"); 
    // for(var i = 0; i < states_manu.length; i++) {
    //   var opt = states_manu[i];
    //   var el = document.createElement("option");
    //   el.textContent = opt;
    //   el.value = opt;
    //   select.appendChild(el);
    // }
  });
};

init() 




function buildTable(state) {
  // First, clear out any existing data
  tbody.html("");
  var headers = { 'State': 'State', 'County': 'County', 'Fire Cause': 'Fire_Cause', 'Fire Size': 'Fire_Size','Discovery Month': 'Discovery_Month','Discovery Year': 'Discovery_Year'}; 
  var keys=Object.keys(headers);
  var thead=d3.select("thead");
  let header=tbody.append("tr");

  keys.forEach(function(key){
    let cell=header.append("td");
    cell.text(key);
  });

}


  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  // data.forEach((dataRow) => {
    // Append a row to the table body
    // let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
//     Object.values(dataRow).forEach((val) => {
//       let cell = row.append("td");
//       cell.text(val);
//     });
//   });
// }



// 1. Create a variable to keep track of all the filters as an object.
var filters={};

// 3. Use this function to update the filters. 
function updateFilters() {
    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    console.log("changedElement is",changedElement);
    // 4b. Save the value that was changed as a variable.
    let elementValue=changedElement.property("value");
    console.log(elementValue);
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId=changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue){
      filters[filterId]=elementValue;
    }
    else{
      delete filters[filterId];
    }
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
}
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData=tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([filterId,elementValue])=>{
      filteredData=filteredData.filter(element=>element[filterId]==elementValue);
    })


    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("select").on("change", updateFilters);
  
  // Build the table when the page loads
  // buildTable(tableData);

//}