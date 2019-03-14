d3.csv("scotusdatabyissue2.16.19.csv", data.forEach (function issueFrquency (d) {
    var groupIssue = d3.nest()
    .key(function(d) { return d.issue; })
    .rollup(function(v) { return v.frequency; })
    .entries(issues);

    var svg = d3.select("vizOne")  
    var rectIssueFrequency = svg.selectAll("rect")
        .data(groupIssue);

    var groupIssueBarEnter = rectIssueFrequency.enter().append("rect");

    groupIssueBarEnter
    .attr("class", "rect")
    .attr("fill", "black")
    .attr("y", 70)
    .attr("width", 10)
    .attr(function(d) {
        return d.rectIssueFrequency / 100;
    })
    .attr("x", function(d, i) { 
        return i * 100 + 30; 
    });

    //define issues: criminal procedure = 1, civil rights = 2, First Amendment = 3, due process = 4, privacy = 5, attorneys' or governmental officials' fees or compensation = 6, unions = 7, economic activity = 8, judicial power = 9, federalism = 10, interstate relation = 11, federal taxation = 12, miscellaneous = 13, and private law = 14

});

