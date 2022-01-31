let img; // Declare variable 'img'.
let img2;
let playing = false;
let messing;
let button;

function setup() {
  createCanvas(1200, 400);
  img = loadImage('flamingoviking.jpg'); // Load the image
  img2 = loadImage('messing1.png'); // Load the image
  
 messing = createVideo(['messing.mp4']);
 button = createButton('play');
  button.position(0,30);
  button.size(50,50);
  button.mousePressed(toggleVid); // attach button listener
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  image(img2, 400, 0);
  
  fill(255, 0, 0);
  text("Den rå støbning. Lang vej endnu", 600, 50);
  
}
// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    messing.pause();
    button.html('play');
  } else {
    messing.loop();
    button.html('pause');
  }
  playing = !playing;
}
