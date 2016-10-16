$(document).ready(function () {

    //Create Box Object Function
    function Box(height, width, volume) {
        this.height = height;
        this.width = width;
        this.volume = volume;
    }

    //Create Box Object
    var myBox = new Box(0, 0, 0);

    //When you click a button in the table div...
    $("table button").on('click', function () {
        console.log(this.id);
        //Conditionals for determining which values to increment, and where to display said increments
        if (this.id === "HeightIncrease") {
            //Increase height by 1, then reprint value to corresponding cell (#height)
            myBox.height++;
            $("#height").html("Height: \n" + myBox.height);
        } else if (this.id === "HeightDecrease" && myBox.height > 0) {
            myBox.height--;
            $("#height").html("Height: \n" + myBox.height);
        } else if (this.id === "WidthIncrease") {
            myBox.width++;
            $("#width").html("Width: \n" + myBox.width);
        } else if (this.id === "WidthDecrease" && myBox.width > 0) {
            myBox.width--;
            $("#width").html("Width: \n" + myBox.width);
        } else if (this.id === "VolumeIncrease") {
            myBox.volume++;
            $("#volume").html("Volume: \n" + myBox.volume);
        } else if (this.id === "VolumeDecrease" && myBox.volume > 0) {
            myBox.volume--;
            $("#volume").html("Volume: \n" + myBox.volume);
        } else if (this.id === "Print") {
            //Compile height, width, volume into #output
            $("#output").html("Height: " + myBox.height + "<br>" + "Width: " + myBox.width + "<br>" + "Volume: " + myBox.volume);
        }
    });


    //$("#HeightDecrease").on('click', function () {
    //
    //});
    //
    //$("#WeightIncrease").on('click', function () {
    //
    //});
    //
    //$("#WeightDecrease").on('click', function () {
    //
    //});
    //
    //$("#VolumeIncrease").on('click', function () {
    //    console.log("Height Increased");
    //});


});



//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume