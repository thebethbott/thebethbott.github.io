console.log("hello");

var title = d3.select("#title");

title
    .attr("class", "big")
    .style("color", "red")
    .style("font-family", "Comic Sans MS");

    var circle = d3.select("svg");
    var circles = d3.selectAll(".dot");

function changeColor(color) {
        circles.attr("fill", color);
}

function dance() {
    circles.attr("cx", function() {
        return Math.random()*500;
    });
}

var starterData = [
    {name: "Dave", height:67},
    {name: "Matt", height: 68},
    {name: "May", height: 64},
    {name: "Thor", height: 87}
    ];

var svg = d3.select("svg")

function radius() {

    var newCircles = svg.selectAll(".dot")
        .data(starterData);

    //this is only for entering new circles
    newCircles.enter().append("circle")
        .attr("class", "dot")
        //dot see above - so when function enters second time, it idenfies already plotted circles
        .attr("cx", function () {
            return Math.random() * 200;
        })
        .attr("cy", 50)
        .attr("r", 20);

    //This is for the second time we run the function, only then does it apply the data
    newCircles.attr("r", function(d) {
        return d.height / 2;
    });

    //this clears unnecssary items
    newCircles.exit().remove()
}

