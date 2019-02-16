console.log ("Welcome to data land")

d3.text("data/textData.txt", function(error,data) {
    console.log("error:", error);
    console.log("text:", data);
});

d3.csv("data/csvData.csv", function(error,data) {
    console.log("error:", error);
    console.log("csv:", data);
    data.forEach(function(d) {
        console.log(d);
            //parseFloat takes csv numbers and turns them into fuctional numbers
            d.export = parseFloat(d.export);
    });
});

d3.json("data/jsData.json", function(error,data) {
    console.log("error:", error);
    console.log("json:", data);
});

console.log("END OF THE LINE")