var title = d3.select("#title");

title
    .attr("class", "big")
    .style("color", "black")
    .style("text-decoration", "underline");

    var sq = d3.select("svg");
    var sqs = d3.selectAll(".pt");

var bosData = [
    {name: "Boston", population: 685094},
    {name: "Cambridge", population: 11630},
    {name: "Somerville", population: 81360},
    ];

var nyData = [
    {name: "New York", population: 323000},
    {name: "Newark", population:  285154},
    {name: "Jersey City", population: 270753},
    {name: "Stamford", population: 130824}
    ];

var svg = d3.select("svg")

//button
function bosSqs () {
    var newSqs = svg.selectAll(".pt")
        .data(bosData);

    //this is for entering new squares
    newSqs.enter().append("sq")
        .attr("class", "pt")
        .attr("x", function(d, i) { return i * 100 + 30; })
        .attr("y", "70px")

    //This is for the second time we run the function, only then does it apply the data
    newSqs.attr("height", function(d) {
            return d.population / 10000;
        })
        .attr("x", function(d, i) { 
            return i * 100 + 30; 
        })

    //this clears unnecssary items
    newSqs.exit().remove()
}

//button
function nySqs () {
    var newSqs = svg.selectAll(".pt")
        .data(nyData);

    //this is for entering new squares
    newSqs.enter().append("sq")
    .attr("class", "pt")
    .attr("y", "70px")

    //This is for the second time we run the function, only then does it apply the data
    newSqs
    .attr("height", function(d) {
        return d.population / 10000;
    })
    .attr("x", function(d, i) { 
        return i * 100 + 30; 
    })

    //this clears unnecssary items
    newSqs.exit().remove()
}