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


    var issueMapping = {
        "1": "Criminal Procedure",
        "2": "Civil Rights",
        "3": "First Amendment",
        "4": "Due Process",
        "5": "Privacy",
        "6": "Legal or Government fees or compensation",
        "7": "Unions",
        "8": "Economic Activity",
        "9": "Judicial Power",
        "10": "Federalism",
        "11": "Interstate Relation",
        "12": "Federal Taxation",
        "13": "Other",
        "14": "Private Law"
        };
          
    data.forEach(function(d) {
        d.issue = issueMapping[d.key];
        });

    
        var labelIssueEnter = svg.selectAll("text")
        .data(groupIssue)
        .enter()
        .append("text");

        labelIssueEnter
        .attr("fill", "darkslategrey")
        .attr("font-family", "opensans")
        .attr("font-size", "14px")
        .attr("x", 50)
        .text( function (d) { 
            return d.issue; })
        .attr("y", function(d, i) { 
            return i * 28 + 90; 
        });
    });