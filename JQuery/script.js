
$(document).ready(function() {
    
    // objective 1
    var d = $("<div id='objective1'></div>");
    $("#objectives").prepend(d);
    $("#objective1").css({"width": "100px", "height": "100px", "background-color": "lightblue",
        "border": "2px solid black", "margin": "15px", "display": "inline-block"});
    var header = $("<h4>Objective 1</h4>");
    $("#objective1").append(header);
    var b = $("<input type='button' id='button1' value='CLICK ME'/>");
    $("#objective1").append(b);
    var message = function() {
        alert("Objective 1 Completed");
    }
    $("#button1").on("click", message);
    
    // objective 2
    var header2 = $("<h4>Objective 2</h4>");
    $("#objective2").prepend(header2);
    var $box2 = $("<input id='input2' placeholder='enter text' />");
    $("#objective2").append($box2);
    var message2 = function() {
        var $greeting = $("#input2").val();
        alert($greeting);
    }
    $("#button2").on("click", message2);
    
    // objective3
    var header3 = $("<h4>Objective 3</h4>");
    $("#objective3").append(header3);
    $("#objective3").on({mouseenter: function() {
        $(this).css("background-color", "red");
    },
    mouseleave: function() {
        $(this).css("background-color", "green");
    }
    });
    
    // objective 4
    $("#objective4").on("click", function() {
        var color = "#";
        for (k = 0; k < 3; k++) {
        color += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
        }
        $("#text4").css("color", color);
    });
    
    // objective 5
    var $div5 = $("<div id='objective5'><button id='button5'>CLICK ME</button></div>");
    $("#objective6").before($div5);
    $("#objective5").append("Objective 5");
    var $span5 = $("<span>Will Kirkpatrick</span>");
    $("#button5").on("click", function() {
        $("#objective5").append($span5);
    });
    
    // objective 6
    var classmates = ["Eduardo", "Jacob", "Audry", "Jessica", "Joel", "Lamonte", "Brian", "David", "Will", "James"];
    $("#button6").before("Objective 6");
    var listEm = function() {
        $.each(classmates, function(i, val) {
        var $person = $("<li>" + val + "</li>");
        $("#list6").append($person); 
        });
    }
    $("#button6").on("click", listEm);
    
    
   
    
});