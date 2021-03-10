// from data.js
var tableData = data;

//select unique datetimes from dataset
var datetimes = tableData.map(datetime => datetime.datetime);
var uniqueDatetimes = datetimes.filter((v, i, a) => a.indexOf(v) === i);

// print tableData to the console
console.log(tableData);

// Select the filter button
var buttonFilter = d3.select("#filter-btn");
var buttonClear = d3.select("#clear-btn");
//select form
var form = d3.select("#form");

// select inputs 
var inputElementDate = d3.select("#datetime");

// auto populate available filter days and add blank option to search without date filter
inputElementDate.append('option').text("");
uniqueDatetimes.forEach(date => {
    inputElementDate.append('option').text(date);
});

var inputElementCity = d3.select("#city");
var inputElementState = d3.select("#state");
var inputElementCountry = d3.select("#country");
var inputElementShape = d3.select("#shape");

// Create event handlers 
buttonFilter.on("click", filterData);
buttonClear.on("click", clearFilters);
form.on("change", filterData);

// select table tbody
var tbody = d3.select("tbody");

LF_PopulateTableData(tableData);

function filterData() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputValueDate = inputElementDate.property("value");
    var inputValueCity = inputElementCity.property("value").toLowerCase();
    var inputValueState = inputElementState.property("value").toLowerCase();
    var inputValueCountry = inputElementCountry.property("value").toLowerCase();
    var inputValueShape = inputElementShape.property("value").toLowerCase();

    var filteredData = tableData;
    
    if (inputValueDate !== "") {
        filteredData = filteredData.filter(sighting => sighting.datetime === inputValueDate);        
    }
    if (inputValueCity !== "") {
        filteredData = filteredData.filter(sighting => sighting.city === inputValueCity);
    }
    if (inputValueState !== "") {
        filteredData = filteredData.filter(sighting => sighting.state === inputValueState);
    }
    if (inputValueCountry !== "") {
        filteredData = filteredData.filter(sighting => sighting.country === inputValueCountry);
    }
    if (inputValueShape !== "") {
        filteredData = filteredData.filter(sighting => sighting.shape === inputValueShape);
    }

    console.log(filteredData);

    LF_PopulateTableData(filteredData);
}

//clear functionality
function clearFilters() {
    console.log("clearFilters");

    // Prevent the page from refreshing
    inputElementDate.property('value', "");    
    inputElementCity.property('value', "");    
    inputElementState.property('value', "");    
    inputElementCountry.property('value', "");    
    inputElementShape.property('value', "");

    LF_PopulateTableData(tableData);
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