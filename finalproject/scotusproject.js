d3.csv("scotusdatabyissue2.16.19.csv", data.forEach (function issueFrquency (d) {
    var groupIssue = d3.nest()
    .key(function(d) { return d.caseIssuesId; })
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
    
});