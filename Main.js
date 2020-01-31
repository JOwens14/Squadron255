/*
* Squadron 255
* Set up all things
*/

//Time
const deltaTime = 1/60; //FPS timer --- 1/60 is 60fps
const masterTimer = new Timer(deltaTime);

//Defaults
var WINDOW_WIDTH = 1280;
var WINDOW_HEIGHT = 720;

//Context
var CTX;

//hitbox debug!
var HITBOXES = false;

//Mouse
var MouseX;
var MouseY;
var MouseClicked = false;
var MOUSE;

//Paused
var isPaused = false;

//Sound enabled
var soundEnabled = false;


//Lets Begin
window.onload = function() {
  const canvas = document.getElementById('gameWorld');
  const context = canvas.getContext('2d');

  //set globe context
  CTX = context;

  //gets mouse cords
  canvas.addEventListener("mousemove", getMouseCords);
  //mouse button down 
  canvas.addEventListener("mousedown", onMouseDown);
  //mouse button up
  canvas.addEventListener("mouseup", onMouseUp);

  MOUSE = new Mouse();


  //------------------------------------start of fullscreen resizing -----------------------------
  function resize() {
  	// Our canvas must cover full height of screen regardless of the resolution
  	var height = window.innerHeight;
  	// So we need to calculate the proper scaled width that should work well with every resolution
  	var ratio = canvas.width/canvas.height;
  	var width = height * ratio;
  	canvas.style.width = width+'px';
  	canvas.style.height = height+'px';
  }
  window.addEventListener('load', resize, false);
  window.addEventListener('resize', resize, false);
  //------------------------------------end of fullscreen resizing ------------------------------

  //start timer
  masterTimer.start();
  resize();
  window.focus();
  
  //start the Game
  startScene(canvas, context);

}
