//  Student: Steven E Andrade
//  Course: Grow with google
//  Project: Final -> Pixel Art Maker

// Store the table ID
var pxCanvas = $('#pixelCanvas');

// Store the color picker ID
var pxColor = $('#colorPicker');

// Storage for new color, default set
var newColor = pxColor.val();

// Set newColor when user picks a color

/*
function getColorValue(colorValue){
  $('pxColor').css("background-color", colorValue);
}
*/
pxColor.change(function(){
  newColor = $(this).val();
});



// Create the table rows and cols from input
function makeGrid(gridX, gridY) {
var x = 0;
 while(x < gridY)
     {
         // Start Row
         pxCanvas.append('<tr>');

         for(var y = 0; y < gridX; y++)
             {
                 // Fill row with desired cols
                 $('<td></td>').appendTo('tr:last');
             }
         x++;
     }

}

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit',function(e){

    // Prevent page from refreshing
    e.preventDefault();

    // Clear current table
    $('td').remove();
    $('tr').remove();

    // Acquire input from form
    var widthX = $('#inputWeight').val();
    var heightY = $('#inputHeight').val();


    //create the grid
    makeGrid(widthX, heightY);


});



pxCanvas.on('click', 'td', function(){
    $(this).css('background-color', newColor);
});
