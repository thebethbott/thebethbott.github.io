d3.csv("scotusdatabyissue2.16.19.csv", function(error, data) {
    var groupIssue = d3.nest()
        .key(function(d) { return d.issueArea; })
        .entries(data)
        .sort(function(a, b) { return b.values.length - a.values.length });

    var x_domain = d3.max(groupIssue, function(d) { return d.values.length; });

    var xScale = d3.scaleLinear()
        .domain([0, x_domain])
        .range([200, 750]);

    var svg = d3.select("#vizOne");

    var axis = d3.axisBottom(xScale);
    d3.select("#x-Axis").call(axis)
        .attr("transform", "translate(0,480)");

    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    var rectIssueFrequency = svg.selectAll("rect")
        .data(groupIssue);

    var groupIssueBarEnter = rectIssueFrequency.enter().append("rect");

    groupIssueBarEnter
        .attr("class", "rect")
        .attr("fill", "rgba(10,28,69,.9)")
        .attr("stroke-width", "1.25")
        .attr("x", "202")
        .attr("height", 13)
        .attr("width", function(d) {
            console.log(d)
            return xScale(d.values.length) - 200;
        })
        .attr("y", function(d, i) {
            return i * 28 + 77
        })
        .on("mouseover", function(d) {
            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html((d.issue) + "<br>" + (d.values.length) + " cases")
                .style("height", "auto")
                .style("width", "auto")
                .style("text-style", "bold")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });

    var issueMapping = {
        "1": "Criminal Procedure",
        "2": "Civil Rights",
        "3": "First Amendment",
        "4": "Due Process",
        "5": "Privacy",
        "6": "Legal or Government fees",
        "7": "Unions",
        "8": "Economic Activity",
        "9": "Judicial Power",
        "10": "Federalism",
        "11": "Interstate Relation",
        "12": "Federal Taxation",
        "13": "Other",
        "14": "Private Law",
    };

    groupIssue.forEach(function(d) {
        d.issue = issueMapping[d.key];
    });

    var labelIssueEnter = svg.selectAll(".label")
        .data(groupIssue)
        .enter()
        .append("text");

    labelIssueEnter
        .attr("class", "label")
        .attr("fill", "black")
        .attr("font-family", "Lato")
        .attr("font-size", "14px")
        .attr("text-anchor", "end")
        .attr("x", "190")
        .text(function(d) {
            return d.issue;
        })
        .attr("y", function(d, i) {
            console.log(d)
            return i * 28 + 77;
        })
        .attr("dy", "10px");

    var grid = d3.axisBottom(xScale)
        .tickSize(-440)
        .tickFormat("");
    d3.select("#x-Grid").call(grid)
        .attr("transform", "translate(0,480)")
        .style("fill", "rgba(150,190,212,1)");
});