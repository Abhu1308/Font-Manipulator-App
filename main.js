function preload() {

}

function setup() {
   canvas = createCanvas(500,500);
   canvas.position(700,250);
   camera = createCapture(VIDEO);
   camera.position(50,250);
   camera.size(500,500);
}

function draw() {
   background("grey")
}