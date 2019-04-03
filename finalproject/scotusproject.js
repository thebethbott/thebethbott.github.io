//Line Enter on D3 Attempt
//var starterData = [1,2,3,4,5,6,7,8,9];
//
//        var svg = d3.select("svg");

//        var line = svg.selectAll("line")
//            .data(starterData);
//
//        line.enter().append("line")
//            .attr("class", "line")
//            .attr("stroke", "grey")
//            .attr("stroke-width", "1.25")
//            .attr("y1", "80")
//            .attr("y2", "490")
//            .attr("x1", function(d.starterData) {
//            return i * 100 + 40;
//            })
//            .attr("x2", function(d,i) {
//            return i * 100 + 40;
//            });


d3.csv("scotusdatabyissue2.16.19.csv", function(error, data) {
    var groupIssue = d3.nest()
        .key(function(d) { return d.issueArea; })
        .entries(data);

    var x_domain = d3.max(groupIssue, function(d) { return d.values.length; });
        
    var xScale = d3.scaleLinear()
        .domain([0, x_domain]) 
        .range([200, 1000]);
    
    var svg = d3.select("#vizOne"); 
    
    var axis = d3.axisBottom(xScale);
        d3.select("#x-Axis").call(axis)
        .attr("transform", "translate(0,480)");

    //var yScale = d3.scale.linear()
        //.domain(y_domain).nice()
        //range([height, 0], 0.5, 0.2);

    //var yAxis = d3.svg.axis()
        //.orient("left")
        //.scale(yScale);

    var rectIssueFrequency = svg.selectAll("rect")
        .data(groupIssue);

    var groupIssueBarEnter = rectIssueFrequency.enter().append("rect");

    groupIssueBarEnter
        .attr("class", "rect")
        .attr("fill", "slategrey")
        .attr("stroke", "darkslategrey")
        .attr("stroke-width", "1.25")
        .attr("x", "202")
        .attr("height", 13)
        .attr("width", function(d) {
            console.log(d)
            return xScale(d.values.length) - 200;
        })
        .attr("y", function(d, i) { 
            return i * 28 + 87; 
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

    var labelIssueEnter = svg.selectAll("text")
        .data(groupIssue)
        .enter()
        .append("text");

    labelIssueEnter
        .attr("fill", "darkslategrey")
        .attr("font-family", "opensans")
        .attr("font-size", "14px")
        .attr("text-anchor", "end")
        .attr("x", "190")
        .text( function (d) { 
            return d.issue; })
        .attr("y", function(d, i) { 
            console.log(d)
            return i * 28 + 87; 
        })
        .attr("dy", "10px");
    });






    //center svg
    //x axis label numbers
    //clean y axis text (right align)
    //d3 for grey lines??
    //lorem ipsum
    //fix missing label