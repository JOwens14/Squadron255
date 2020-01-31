

function gameOverScene(canvas, context) {
    Promise.all([
      loadScene('GameOverScreen')
  ])
  .then(([gameOver]) => {

    
    //restart button 
    restartButton = new Button('Restart');
    restartButton.centerPos();
    restartButton.move(restartButton.pos.x, restartButton.pos.y + 200);
    gameOver.addButton(restartButton);



  
    //Timer for the Start Screen
    masterTimer.update = function update(deltaTime) {
        gameOver.update(deltaTime);
        gameOver.comp.draw(context);
        MOUSE.draw(context, MouseX,MouseY);


        //draw final score
        CTX.font = "50px Comic Sans MS";
        CTX.fillStyle = "red";
        CTX.textAlign = "left";
        CTX.fillText(SCORE, WINDOW_WIDTH/2 + 25 , WINDOW_HEIGHT/2 - 60);

        if (restartButton.hovered && MouseClicked) {
            //restarts game
            gameScene(canvas, context);  
        }

    }

        




    });
  
  
  
  }
  