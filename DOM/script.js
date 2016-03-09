

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
    console.log("good");
    var sayHello = function() {
        console.log("step 1");
        alert("It Works!");
    }
    newButton.addEventListener("click", sayHello);

//Objective 2

//Objective 3
var chng = function() {
    event.target.style.backgroundColor = "green";
}

var chngback = function() {
    console.log("step 1");
    event.target.style.backgroundColor = "yellow";
}
document.getElementById("Objective-3").addEventListener("mouseover", chng);
document.getElementById("Objective-3").addEventListener("mouseout", chngback);


});