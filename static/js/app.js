// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

// Build table
function buildTable(data){
  // Clear existing data
  tbody.html("");
  // Loop through data
  data.forEach((dataRow) => {
    let row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      let elem = row.append("td");
      elem.text(val);
    });
  })
}

// Trigger when clicked
function clicked(){
  d3.event.preventDefault();
  let date = d3.select("#datetime").property("value");
  let filterData = tableData;

  // Check date input and filter data by date input
  if(date){
    filterData = filterData.filter((row)=>row.datetime === date);
  }

  // Build table with filter date data
  buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", clicked);

buildTable(tableData);
