function createBackgroundLayer(level, sprites) {
    const buffer = document.createElement('canvas');
    buffer.width = 1280;
    buffer.height = 720;

    const context = buffer.getContext('2d');

    return function drawBackgroundLayer(context) {
        drawBackgroundImage(level.levelName, context);
        context.drawImage(buffer, 0, 0);
    };
}



function drawBackgroundImage(name, context) {
    var img = new Image();
    img.onload = function () {
    context.drawImage(img, 0, 0);
    }
    img.src = `./Enviroment/${name}.gif`;
}



function createSpriteLayer(entities) {
    return function drawSpriteLayer(context) {
        entities.forEach(entity => {
            entity.draw(context);
        });
    };
}

function createSceneBackgroundLayer(scene) {
    //console.log(scene);
    const buffer = document.createElement('canvas');
    buffer.width = 1280;
    buffer.height = 720;
    const context = buffer.getContext('2d');

    return function drawSceneBackgroundLayer(context) {
        drawSceneBackgroundImage(scene.SceneName, context);   ///set up for jpg backgrounds only
        context.drawImage(buffer, 0, 0);
    };
}

function drawSceneBackgroundImage(scene, context) {
    var img = new Image();
    img.onload = function () {
    context.drawImage(img, 0, 0);
    }
    img.src = `./Backgrounds/${scene}.jpg`;
}


function createButtonLayer(scene) {
    //console.log(scene);
    const buffer = document.createElement('canvas');
    buffer.width = 1280;
    buffer.height = 720;
    const context = buffer.getContext('2d');

    return function drawButtonLayer(context) {
      scene.buttons.forEach(button => {
          button.draw(context);
      });
    };
}








//collision debug; for drawing collision boxes on sprites
function createCollisionLayer(level) {
    return function drawCollision(context) {
        context.strokeStyle = 'red';
        level.entities.forEach(entity => {
            context.beginPath();
            context.rect(
                entity.pos.x, entity.pos.y,
                entity.size.x, entity.size.y);
            //context.stroke(); ///uncomment to draw boxes for entities
        });
    }
}
