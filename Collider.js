

function checkCollisions(current) {
    GAME.entities.forEach(entity => {
        if (current !== entity) {

            
            
            currentCenterX = current.pos.x + current.centerX;
            currentCenterY = current.pos.y + current.centerY;

            entityCenterX = entity.pos.x + entity.centerX;
            entityCenterY = entity.pos.y + entity.centerY;

            var dx = currentCenterX - entityCenterX;
            var dy = currentCenterY - entityCenterY;
            var distance = Math.sqrt(dx * dx + dy * dy);

            var currentRadius = current.width * current.scale/2;
            var entityRadius = entity.width * entity.scale/2;

            
            //debug hitbox
            CTX.strokeStyle = 'red';
            CTX.beginPath();
            CTX.arc(currentCenterX, currentCenterY, currentRadius, 0, 2 * Math.PI);
            //CTX.stroke();
            

            if (distance < currentRadius + entityRadius) {
                //collision happened

                //checks to see if the player came into contact with their own shot
                if (!((current.name === 'player' && entity.name === 'shot') || (current.name === 'shot' && entity.name === 'player'))) {
                    //console.log(current.name + ' colided with ' + entity.name);

                    //enemy hit with a shot
                    if (current.name === 'shot' && entity.name === 'enemy') {
                        //if clear in color, sets the next targets color
                        if (PLAYER.color === colors[0]) {
                            PLAYER.color = entity.color;
                            PLAYER.shotCounter = 0;
                        }
                        //enemy takes damage
                        entity.takeDamage(current);
                        current.hitTarget();
                        
                    }

                    //player hit by enemy
                    if ((current.name === 'player' && entity.name === 'enemy') || (current.name === 'enemy' && entity.name === 'player')) {
                        if (entity.name === 'enemy') {
                            PLAYER.takeDamage(entity.damage);
                        } else if (current.name === 'enemy') {
                            PLAYER.takeDamage(current.damage);
                        }
                    }
                }

                //explosion
                if (current.name === 'explosion') {
                    if (entity.name === 'player') {
                        PLAYER.takeDamage(current.damage);
                    } else if (entity.name === 'enemy') {
                        entity.takeExplosionDamage(current.damage);
                    }
                }

                
                
            }

















        }
    });




}