var GAME
var PLAYER
var GAMEOVER = false;
var SCORE = 0;

var elapsedTime = 0;

var GAMESPEED = 1;

function gameScene(canvas, context) {
    Promise.all([
      loadScene('Game')
  ])
  .then(([game]) => {
  
      //setUpControllers();

      GAME = game;

      SCORE = 0;

      //game background sound
      themeSound = new sound('./Sound/Theme.wav');
      themeSound.sound.loop = true;
      themeSound.play();

      PLAYER = new Player();
      PLAYER.setColor('clear');
      
      const input = setupKeyboard(PLAYER);
      game.entities.add(PLAYER);
      
      
      EnemySpawn = new EnemeySpawner();

  
      //Timer for the Start Screen
      masterTimer.update = function update(deltaTime) {
        game.update(deltaTime);
        game.comp.draw(context);
        MOUSE.draw(context, MouseX,MouseY);
        EnemySpawn.update();

        game.entities.forEach(entity => {
          checkCollisions(entity);
        });


        //speed the spawn rate 
        if (spawnRate > 10) {
          spawnRate -= GAMESPEED / 200;
        }

        if (GAMESPEED < 100) {
          GAMESPEED += 0.01;
        } else {
        }

        elapsedTime++;
        //increases score every 2 seconds
        if (elapsedTime > 120) {
          SCORE += 10;
          elapsedTime = 0;
        }
        //updates the score drawing
        scoreUpdate();

        if (GAMEOVER) {
          //cleanup and reset
          game.clearScene();
          themeSound.stop();
          resetGame();

          //display game over scene
          gameOverScene(canvas, context);
        }
      }




    });
  
  
  
  }


  function resetGame() {
    GAMEOVER = false;
    elapsedTime = 0;
    GAMESPEED = 1;
    spawnRate = 50;
  }
  