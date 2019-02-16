
d3.csv("scotusdatabyissue2.16.19.csv", function(error,data) {
    console.log("error:", error);
    console.log("csv:", data);
    data.forEach(function(d) {
        console.log(d);
            //parseFloat takes csv numbers and turns them into fuctional numbers
            d.export = parseFloat(d.export);
    });
});