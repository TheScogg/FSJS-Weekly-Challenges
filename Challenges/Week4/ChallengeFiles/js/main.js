//Implement function to automate clicking nav buttons

function openBlock (id, listID) {
    //console.log(listID);
    var block = document.getElementById(id);
    //console.log(typeof block);


    var blocks = document.getElementById("main_content").getElementsByTagName("div");
    for (var y = 0; y < blocks.length; y++) {
        blocks[y].style.display = "none";
    }
    block.style.display = "block";
    //document.getElementById("about").style.display = "block";


    $("menu").css("display", "block");
    // TODO: remove the "active" class from all of the li elements inside the menu
    $("#menu").children("li").removeClass("active");
    // TODO: add the "active" class to the li element that contains the link that was clicked
    var activeLi = document.getElementById(listID);
    $(activeLi).parent("li").addClass("active");
}

// TODO: add the "hover" class to the menu items when you hover over them
$("#menu").find("a").hover(function () {
    //console.log(this);
    $(this).addClass("hover");
}, function () {
    //console.log("out");
    $(this).removeClass("hover");
});

// TODO: set up the tooltip plugin on all of the links in the menu
$('#menu a').tooltip({
    "delay" : "1000"
});

