const table = document.getElementById('pixelCanvas');
let draw = false;
/**
  * @description change backgroundcolor of selected cell
  * @param element e -clicked/selected cell 
  * @param rgb $color - selected color
*/
function colorCell(e) {
  "use strict"
  var color = document.getElementById('colorPicker').value;
  e.style.backgroundColor = color;
  }
/**
  * @description create a grid of squares 
  * @param int $width - number of squares representing the width of the grid
  * @param int $height - number of squares representing the height of the grid
*/
function makeGrid() {
  "use strict"
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  table.innerHTML='';
  for (var i = 0 ; i < height ; i++) {
    let r = table.insertRow(i);
    table.appendChild(r);
    for (var j = 0 ; j < width ; j++) {
      let c = r.insertCell(j);
      c.addEventListener('mouseover', function() {
        if(!draw) return ;
        colorCell(this);
      });
      c.addEventListener('mousdown', function() {
        colorCell(this);
      });
      c.addEventListener('click', function() {
        colorCell(this);
      });
      r.appendChild(c);
    }
  }
}
window.addEventListener("mousedown", function() {
  draw = true;
});
window.addEventListener("mouseup", function() {
  draw = false;
});
// When size is submitted by the user, call makeGrid
button=document.querySelector('[type=submit]'); 
button.addEventListener('click',function(e) {
  e.preventDefault();
  makeGrid();
});