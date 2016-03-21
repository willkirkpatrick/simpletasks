

//Objective 1
document.addEventListener("DOMContentLoaded", function() {
    var newDiv = document.createElement("div");
    newDiv.id = "Objective-1";
    var list = document.getElementById("Objectives");
    list.insertBefore(newDiv, list.childNodes[0]);
    var heading = document.createElement("h3");
    newDiv.appendChild(heading);
    heading.innerHTML = "Objective 1";
    
    var newButton = document.createElement("button");
    document.getElementById("Objective-1").appendChild(newButton);
    newButton.innerHTML = "Click Me";
    var sayHello = function() {
        alert("It Works!");
    }
    newButton.addEventListener("click", sayHello);

//Objective 2

//Objective 3
var chng = function() {
    event.target.style.backgroundColor = "green";
}

var chngback = function() {
    event.target.style.backgroundColor = "yellow";
}
document.getElementById("Objective-3").addEventListener("mouseover", chng);
document.getElementById("Objective-3").addEventListener("mouseout", chngback);

//Objective 4

var changeColor = function() {
    
    for (var i = 0; i < 3; i++) {
      
        var n1 = Math.floor(Math.random() * 3);
        var num1 = n1.toString();
        var n2 = Math.floor(Math.random() * 6);
        var num2 = n2.toString();
        var n3 = Math.floor(Math.random() * 6);
        var num3 = n3.toString();
        
        if (i == 0) {
            if (num1 == 0) {
                var red = num2 + num3;
            } else {
                var red = num1 + num2 + num3;
            }
        }

        if (i == 1) {
            if (num1 == 0) {
                var green = num2 + num3;
            } else {
                var green = num1 + num2 + num3;
            }
        }

        if (i == 2) {
            if (num1 == 0) {
                var blue = num2 + num3;
            } else {
                var blue = num1 + num2 + num3;
            }
        }
    }
    var newColor = "rgb" + "(" + red + "," + green + "," + blue + ")";
    document.getElementById("objfour").style.color = newColor;
}
document.getElementById("objfour").addEventListener("click", changeColor);

//Objective 5

var div5 = document.createElement("div");
document.getElementById("Objectives").appendChild(div5);
div5.id = "Objective-5";
var heading = document.createElement("h3");
document.getElementById("Objective-5").appendChild(heading);
heading.id = "div5heading";
document.getElementById("div5heading").innerHTML = "Objective 5";
document.getElementById("Objective-5").setAttribute("style", "width:100px; height:100px; background-color:aqua; border:2px solid black; display:inline-block; text-align:center;");
var button5 = document.createElement("button");
document.getElementById("Objective-5").appendChild(button5);
button5.id = "button5";
document.getElementById("button5").innerHTML = "Click It";
var addName = function() {
    
    var s = document.createElement("SPAN");
    var n = document.createTextNode("Will Kirkpatrick");
    var myName = s.appendChild(n);
    document.getElementById("Objective-5").appendChild(myName);
}
document.getElementById("button5").addEventListener("click", addName);



//Objective 6

var friends = ["deNay", "Sam", "Susan", "John", "Jason", "Bill", "Jerry", "Sharon", "Joe", "Jimbo", "Lulu" ];
var addFriend = function() {
    for(var i = 0; i < friends.length; i++) {
    var newli = document.createElement("li");
    newli.innerHTML = friends[i];
    // var nextFriend = friends[i];
    // var newFriend = nextFriend.appendChild(newli);
    document.getElementById("objsix").appendChild(newli);
    }
}
document.getElementById("buttonsix").addEventListener("click", addFriend);

});