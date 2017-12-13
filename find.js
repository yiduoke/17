var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var body = document.getElementsByTagName("full");

//hardcode target as center
//randomize later
// var targetX = boxWidth / 2;
// var targetY = boxHeight / 2;

var targetX = Math.floor(Math.random() * boxWidth);
var targetY = Math.floor(Math.random() * boxHeight);

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var xpow = Math.pow((x1 - x0), 2);
  var ypow = Math.pow((y1 - y0), 2);
  return Math.sqrt(xpow + ypow);
};


var findIt = function(event) {
  var x = event.clientX;
  var y = event.clientY;
  var dist = Math.floor(distance(targetX, targetY, x, y));
  console.log(dist);
  if (dist > 255) {
    dist = 255;
  }
  document.body.style.backgroundColor = "rgb(" + (255 - dist) + "," + (255 - dist) + "," + (255 - dist) + ")";
  if (dist < 25) {
    document.body.style.backgroundColor = "rgb(0,125,0)"
    window.alert("You found it!");
  }
};

var checkFound = function(event) {
  var x = event.clientX;
  var y = event.clientY;
  var dist = Math.floor(distance(targetX, targetY, x, y));
  if (dist < 25) {
    document.body.style.backgroundColor = "rgb(0,255,0)"
  }
}

box.addEventListener("mousemove", findIt);
box.addEventListener("click", checkFound)
