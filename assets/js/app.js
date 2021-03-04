// from data.js
var tableData = data;

// print tableData to the console
console.log(tableData);

// Select the filter button
var buttonFilter = d3.select("#filter-btn");

// Create event handlers 
buttonFilter.on("click", filterData);

// select table tbody
var tbody = d3.select("tbody");

LF_PopulateTableData(tableData);

function filterData() {
    // select inputDate datetime text
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue)

    // check if value is not null or blank
    // check if value is valid datetime
    
    // filter() uses the custom function as its argument
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    LF_PopulateTableData(filteredData);
}

function LF_PopulateTableData(p_tableData) {

    // remove any children from the table
    tbody.html("");

    //loop through each data d
    p_tableData.forEach(d => { 
        // Use d3 to append one table row `tr` for each weather report object    
        var row = tbody.append("tr");

        // add td cells and text
        Object.entries(d).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
}

// @TODO add clear functionality

// @TODO add calendar picker extender

// @TODO rething filter position

// @TODO auto populate available filter days ?

// @TODO Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:
// date/time
// city
// state
// country
// shape