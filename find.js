var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var body = document.getElementsByTagName("full");

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var xpow = Math.pow((x1 - x0), 2);
  var ypow = Math.pow((y1 - y0), 2);
  return Math.sqrt(xpow + ypow);
};

var findIt = function(e) {
  var x = event.clientX;
  var y = event.clientY;
  var dist = Math.floor(distance(targetX, targetY, x, y));
  document.body.style.backgroundColor = "rgb(" + dist + "," + dist + "," + dist + ")";
};

box.addEventListener("mousemove", findIt);