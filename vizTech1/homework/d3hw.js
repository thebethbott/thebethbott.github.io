var title = d3.select("#title");

title
    .attr("class", "big")
    .style("color", "black")
    .style("text-decoration", "underline");

var bosData = [
    {name: "Boston", population: 685094},
    {name: "Cambridge", population: 11630},
    {name: "Somerville", population: 81360},
    ];

var nyData = [
    {name: "New York", population: 3623000},
    {name: "Hoboken", population: 55131},
    {name: "Newark", population:  285154},
    {name: "Stamford", population: 130824},
    ];

function bosSqs () {
    var svg = d3.select("svg");    
    var rectBos = svg.selectAll("rect")
        .data(bosData);

    //this is for entering new squares
    var rectBosEnter = rectBos.enter().append("rect");

    rectBosEnter
    .attr("class", "rect")
    .attr("fill", "black")
    .attr("x", 330)
    .attr("y", 70)
    .attr("width", 10)
    .attr("height", 20);

    rectBosEnter
    .attr("height", function(d) {
        return d.population / 10000;
    })
    .attr("x", function(d, i) { 
        return i * 100 + 30; 
    });

    //This is for the second time we run the function, only then does it apply the data
    rectBos.attr("height", function(d) {
        return d.population / 10000;
    })
    .attr("x", function(d, i) { 
        return i * 100 + 30; 
    });

    //this clears unnecssary items
    rectBos.exit().remove();


    console.log("Boston, Cambridge, Somerville");

}

function nySqs () {
    var svg = d3.select("svg");    
    var rectNy = svg.selectAll("rect")
        .data(nyData);

    //this is for entering new squares
    var rectNyEnter = rectNy.enter().append("rect");

    rectNyEnter
    .attr("class", "rect")
    .attr("fill", "black")
    .attr("x", 330)
    .attr("y", 70)
    .attr("width", 10)
    .attr("height", 20)
    .attr("stroke", "rgb(86, 101, 115)")
    .attr("stroke-width", ".75px");

    rectNyEnter
    .attr("height", function(d) {
        return d.population / 10000;
    })
    .attr("x", function(d, i) { 
        return i * 100 + 30; 
    });

    //This is for the second time we run the function, only then does it apply the data
    rectNy.attr("height", function(d) {
        return d.population / 10000;
    })
    .attr("x", function(d, i) { 
        return i * 100 + 30; 
    });

    //this clears unnecssary items
    rectNy.exit().remove();
    
    console.log("NYC, Hoboken, Newark, Stamford");
}