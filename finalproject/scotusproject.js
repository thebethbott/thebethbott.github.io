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

            
    var div = d3.select("body").append("div")	
        .attr("class", "tooltip")				
        .style("opacity", 0);

    var rectIssueFrequency = svg.selectAll("rect")
        .data(groupIssue);

    var groupIssueBarEnter = rectIssueFrequency.enter().append("rect");

    groupIssueBarEnter
        .attr("class", "rect")
        .attr("fill", "saddlebrown")
        .attr("stroke-width", "1.25")
        .attr("x", "202")
        .attr("height", 13)
        .attr("width", function(d) {
            console.log(d)
            return xScale(d.values.length) - 200;
        })
        .attr("y", function(d, i) { 
            return i * 28 + 77})        
      .on("mouseover", function(d) {		
          div.transition()		
              .duration(200)		
              .style("opacity", .9);		
          div	.html(d.values.length)	
              .style("left", (d3.event.pageX) + "px")		
              .style("top", (d3.event.pageY - 28) + "px");	
          })					
      .on("mouseout", function(d) {		
          div.transition()		
              .duration(500)		
              .style("opacity", 0);
        });
        //more text in tool tips (catagory and cases)
        //img inline with text
        //fix inline text formatting

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
        .text( function (d) { 
            return d.issue; })
        .attr("y", function(d, i) { 
            console.log(d)
            return i * 28 + 77; 
        })
        .attr("dy", "10px");

    var grid = d3.axisBottom(xScale)
      .tickSize(-440)
      .tickFormat("");
    d3.select("#x-Grid").call(grid)
      .attr("transform", "translate(0,480)");

    });

    
d3.csv("scotusdatabyissue2.16.19.csv", function(error, data) {
    var groupIssue = d3.nest()
        .key(function(d) { return d.issueArea; })
        .entries(data);

var width = 500;
var height = 300;
var margin = 50;
var duration = 250;

var lineOpacity = "0.25";
var lineOpacityHover = "0.85";
var otherLinesOpacityHover = "0.1";
var lineStroke = "1.5px";
var lineStrokeHover = "2.5px";

var circleOpacity = '0.85';
var circleOpacityOnLineHover = "0.25"
var circleRadius = 3;
var circleRadiusHover = 6;

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

/* Format Data */
var parseDate = d3.timeParse("%Y");
groupIssue.forEach(function(d) { 
  d.values.forEach(function(d) {
    d.date = parseDate(d.term);
    d.issue = +d.issue;    
  });
});


/* Scale */
var xScale = d3.scaleTime()
  .domain(d3.extent(groupIssue[0].values, d => d.date))
  .range([0, width-margin]);

var y_domain = d3.max(groupIssue, function(d) { return d.values.length; });
    
var yScale = d3.scaleLinear()
    .domain([0, y_domain]) 
    .range([height-margin, 0]);

var color = d3.scaleOrdinal(d3.schemeCategory10);

/* Add SVG */
var svg = d3.select("#chart").append("svg")
  .attr("width", (width+margin)+"px")
  .attr("height", (height+margin)+"px")
  .append('#vizTwo')
  .attr("transform", `translate(${margin}, ${margin})`);


/* Add line into SVG */
var line = d3.line()
  .x(d => xScale(d.date))
  .y(d => yScale(d.issue));

let lines = svg.append('g')
  .attr('class', 'lines');

lines.selectAll('.line-group')
  .data(groupIssue).enter()
  .append('#vizTwo')
  .attr('class', 'line-group')  
  .on("mouseover", function(d, i) {
      svg.append("text")
        .attr("class", "title-text")
        .style("fill", color(i))        
        .text(d.name)
        .attr("text-anchor", "middle")
        .attr("x", (width-margin)/2)
        .attr("y", 5);
    })
  .on("mouseout", function(d) {
      svg.select(".title-text").remove();
    })
  .append('path')
  .attr('class', 'line')  
  .attr('d', d => line(d.values))
  .style('stroke', (d, i) => color(i))
  .style('opacity', lineOpacity)
  .on("mouseover", function(d) {
      d3.selectAll('.line')
					.style('opacity', otherLinesOpacityHover);
      d3.selectAll('.circle')
					.style('opacity', circleOpacityOnLineHover);
      d3.select(this)
        .style('opacity', lineOpacityHover)
        .style("stroke-width", lineStrokeHover)
        .style("cursor", "pointer");
    })
  .on("mouseout", function(d) {
      d3.selectAll(".line")
					.style('opacity', lineOpacity);
      d3.selectAll('.circle')
					.style('opacity', circleOpacity);
      d3.select(this)
        .style("stroke-width", lineStroke)
        .style("cursor", "none");
    });


/* Add circles in the line */
lines.selectAll("circle-group")
  .data(groupIssue).enter()
  .append("#vizTwo")
  .style("fill", (d, i) => color(i))
  .selectAll("circle")
  .data(d => d.values).enter()
  .append("#vizTwo")
  .attr("class", "circle")  
  .on("mouseover", function(d) {
      d3.select(this)     
        .style("cursor", "pointer")
        .append("text")
        .attr("class", "text")
        .text(`${d.issue}`)
        .attr("x", d => xScale(d.date) + 5)
        .attr("y", d => yScale(d.issue) - 10);
    })
  .on("mouseout", function(d) {
      d3.select(this)
        .style("cursor", "none")  
        .transition()
        .duration(duration)
        .selectAll(".text").remove();
    })
  .append("circle")
  .attr("cx", d => xScale(d.date))
  .attr("cy", d => yScale(d.price))
  .attr("r", circleRadius)
  .style('opacity', circleOpacity)
  .on("mouseover", function(d) {
        d3.select(this)
          .transition()
          .duration(duration)
          .attr("r", circleRadiusHover);
      })
    .on("mouseout", function(d) {
        d3.select(this) 
          .transition()
          .duration(duration)
          .attr("r", circleRadius);  
      });


/* Add Axis into SVG */
var xAxis = d3.axisBottom(xScale).ticks(5);
var yAxis = d3.axisLeft(yScale).ticks(5);

svg.append("#vizTwo")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${height-margin})`)
  .call(xAxis);

svg.append("#vizTwo")
  .attr("class", "y axis")
  .call(yAxis)
  .append('text')
  .attr("y", 15)
  .attr("transform", "rotate(-90)")
  .attr("fill", "#000")
  .text("Total values");
});