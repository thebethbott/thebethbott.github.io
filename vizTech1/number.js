document.getElementById("title").innerHTML = "Welcome Javascript";


var mynumber=42;
mynumber = mynumber +10;
console.log (mynumber*100);

var username = "Beth";
console.log (username + "123" );

var bignumber = mynumber > 100;
console.log (bignumber);

var users = ["Beth", "Betty", "Bob"];
console.log (users[1]);

var complexUser = {
    name:"Betty",
    color:"pink",
    zip: 02027,
    dog: true,
    greet: function(greeting) {
        console.log(greeting + "Beth");
    }
};

//console.log(greeting)

console.log(complexUser.color);

var sayHello = function (name) {
    console.log("oh heck" + name);
}

var plusTen = function(num){
    return num + 10;
}

var newNum = plusTen(20);
console.log(newNum);

sayHello(complexUser.name);

if(newNum > 100) {
    console.log ("wow! big number");
}
else if(newNum > 20) {
    console.log ("eh");
}
else {
    console.log ("Not so big");
}

var greaterThanTen = function(num) {
    if (num > 10) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
    return num > 10
}
var checkNumber = greaterThanTen(20);
console.log(checkNumber);