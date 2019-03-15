d3.csv("scotusdatabyissue2.16.19.csv", data.forEach (function issueFrquency (d) {
    var groupIssue = d3.nest()
    .key(function(d) { return d.issueArea; })
    .rollup(function(v) { return v.frequency; })
    .entries(issues);

    var svg = d3.select("vizOne") 
        .attr ("width", svgWidth)
        .attr ("height", svgHeight)

    var rectIssueFrequency = svg.selectAll("rect")
        .data(groupIssue);

    var groupIssueBarEnter = rectIssueFrequency.enter().append("rect");

    groupIssueBarEnter
    .attr("class", "rect")
    .attr("fill", "blue")
    .attr("y", 90)
    .attr("height", 10)
    .attr("width", function(d) {
        return d.rectIssueFrequency / 100;
    })
    .attr("y", function(d, i) { 
        return i * 100 + 30; 
    });

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
}),)
