function startScene(canvas, context) {
  Promise.all([
    loadScene('StartScreen')
])
.then(([StartScene]) => {

    //setUpControllers();

    //sound
    mainMusic = new sound('./Sound/Theme.wav');
    mainMusic.sound.volume = .1; //main theme volume
    mainMusic.sound.loop = true; //loops the main theme

    //doesnt work currently
    if (soundEnabled) {
      mainMusic.play(); //plays the main theme
    }

    //start button 
    startButton = new Button('Start_Button');
    startButton.move(startButton.pos.x, startButton.pos.y + 100);
    StartScene.addButton(startButton);
 


    //Timer for the Start Screen
    masterTimer.update = function update(deltaTime) {
      StartScene.update(deltaTime);
      StartScene.comp.draw(context);
      MOUSE.draw(context, MouseX,MouseY);

      if (startButton.hovered && MouseClicked) {
        nextScene();
      }
    }

    // next screen --------------------
    function nextScene() {
      //delete scene ---------------------------------------------------
      mainMusic.stop(); //stops the main music
      StartScene.clearScene();
      //----------------------------------------------------------------
      
      //----------------------------------------------------------------
      //display next scene
      gameScene(canvas, context);
      //----------------------------------------------------------------  
    }

    });



}
