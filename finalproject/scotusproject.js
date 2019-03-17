d3.csv("scotusdatabyissue2.16.19.csv", function(error, data) {
    var groupIssue = d3.nest()
        .key(function(d) { return d.issueArea; })
        // .rollup(function(v) { return v.frequency; })
        .entries(data);

    var svg = d3.select("#vizOne") 

    var rectIssueFrequency = svg.selectAll("rect")
        .data(groupIssue);

    var groupIssueBarEnter = rectIssueFrequency.enter().append("rect");

    groupIssueBarEnter
    .attr("class", "rect")
    .attr("fill", "slategrey")
    .attr("stroke", "darkslategrey")
    .attr("stroke-width", "1.25")
    .attr("x", 150)
    .attr("height", 13)
    .attr("width", function(d) {
        console.log(d)
        return d.values.length / 3;
    })
    .attr("y", function(d, i) { 
        return i * 28 + 90; 
    });

    //var labelIssueFrequency = svg.selectAll("rect")
        //.data(labelIssue);

    //var labelIssueEnter = labelIssueFrequency.enter().append("text");

    //labelIssueEnter
        //.attr("class", "text")
        //.attr("color", "darkslategrey")
        //.attr("font", "opensans")
        //.attr("stroke-width", "1.25")
        //.attr("x", 50)
        //.attr("text", function(d) {
            //return d.key
                //.attr(i + 1 = var issue)
        //})
        //.attr("y", function(d, i) { 
            //return i * 28 + 90; 
        //});

    // var data = [{"issue":"Criminal Procedure","frequency":1},
        //{"issue":"Civil Rights","code":2},
        //{"issue":"First Amendment","code":3},
        //{"issue":"Due Process","code":4},
        //{"issue":"Privacy","code":5},
        //{"issue":"Legal or Government fees or compensation","code":6},
        //{"issue":"Unions","code":7},
        //{"issue":"Economic Activity","code":8},
        //{"issue":"Judicial Power","code":9},
        //{"issue":"Federalism","code":10},
        //{"issue":"Interstate Relation","code":11},
        //{"issue":"Federal Taxation","code":12},
        //{"issue":"Other","code":13},
        //{"issue":"Private Law","code":14}]
});
