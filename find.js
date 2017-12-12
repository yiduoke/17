var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var body = document.getElementsByTagName("full");

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;

var setBackground = function(dist) {
  var att = document.createAttribute("style");
  att.value = "red";
  body.setAttributeNode(att);

}

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var xpow = Math.pow((x1 - x0), 2);
  var ypow = Math.pow((y1 - y0), 2);
  return Math.sqrt(xpow + ypow);
};


var findIt = function(e) {
  /* YOUR IMPLEMENTATION */
};

/*
your OTHER FXNS
<body style = "red">
  <style>
  
*/
