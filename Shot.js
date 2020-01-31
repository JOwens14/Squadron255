var shotColorFiles = [`./Projectiles/shot_clear.png`,`./Projectiles/shot_red.png`,`./Projectiles/shot_green.png`,`./Projectiles/shot_blue.png`]

class Shot extends Entity {

    constructor(player) {

        super('shot');

        GAME.addEntity(this);

        this.knockback = .1;
        
        //sprite for shot
        this.img = new Image();
        this.img.src = shotColorFiles[this.getPlayerColor()];

        this.color = PLAYER.color;

        //draw scale
        this.scale = 0.35;

        //shot width and height
        this.width = this.img.width;
        this.height = this.img.height;

        //start position
        this.defaultPosX = player.pos.x + player.width * player.scale / 2 - this.width / 2 * this.scale;
        this.defaultPosY = player.pos.y  + player.height * player.scale / 2 - this.height / 2 * this.scale;

        //set shot to the default position
        this.pos = new Vector2d(this.defaultPosX, this.defaultPosY);

        //player velocity
        this.velocity = new Vector2d(0,0);

        //Center cordinate
        this.centerX = (this.width * this.scale) / 2;
        this.centerY = (this.height * this.scale) / 2;

        this.clickedX = MouseX;
        this.ClickedY = MouseY;

        //add traits
        this.addTrait(new Shoot(player, this.clickedX, this.ClickedY));
        
    }

    //check bounds of the shot, if out of bounds that shot is deleted
    checkBounds() {
        if (this.pos.y < -10 || this.pos.y > WINDOW_HEIGHT + 10 || this.pos.x < -10 || this.pos.x > WINDOW_WIDTH + 10) {
            GAME.removeEntity(this);
        }
    }

    hitTarget() {
        //TODO explode

        GAME.removeEntity(this);
    }

    draw(context) {
        Entity.prototype.draw(this, context);

        context.drawImage(this.img, this.pos.x, this.pos.y, this.img.width * this.scale, this.img.height * this.scale);
      }


    update(deltaTime) {
        //todo
        this.checkBounds();
    
        this.traits.forEach(trait => {
            trait.update(this, deltaTime);
        });


        //update current center position
        this.currentCenterX = this.pos.x + this.centerX;
        this.currentCenterY = this.pos.y + this.centerY;
    
    }


    getPlayerColor() {
        if (PLAYER.color === 'clear') {
            return 0;
        }
        if (PLAYER.color === 'red') {
            return 1;
        }
        if (PLAYER.color === 'green') {
            return 2;
        }
        if (PLAYER.color === 'blue') {
            return 3;
        }
    }
} 