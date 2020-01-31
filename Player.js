var weaponDelay = 50;
var weaponDelayCounter = 0;


class Player extends Entity {

    constructor() {

        super('player');

        this.alive = true;

        this.color = colors[0];
        
        //sprite for player
        this.img = new Image();
        this.img.src = `./Player/ship_2.png`;

        //draw scale
        this.scale = 0.35;

        //player width and height
        this.width = this.img.width;
        this.height = this.img.height;

        //default position
        this.defaultPosX = WINDOW_WIDTH/2 - (this.width * this.scale) / 2;
        this.defaultPosY = WINDOW_HEIGHT - (this.height * this.scale) - 20 ;

        //set player to the default position
        this.pos = new Vector2d(this.defaultPosX, this.defaultPosY);

        //player velocity
        this.velocity = new Vector2d(0,0);

        //Center cordinate
        this.centerX = (this.width * this.scale) / 2;
        this.centerY = (this.height * this.scale) / 2;

        //add traits
        this.addTrait(new Velocity());

        //Weapons
        this.weaponsHot = false;
        this.weaponSpeed = 30; //lower int is faster speed
        this.weaponReload = 0;
        this.weaponDamage = 1;
        this.shotCounter = 0;

        //Kill count
        this.killCount = 0;


        this.shootSound;
            
    }

    
    setColor(color) {
        this.color = color;
    }

    shoot() {
        if (this.weaponReload <= 0) {
            SCORE--;

            this.shootSound = new sound('./Sound/ShootSound.wav');
            this.shootSound.sound.volume = 0.03;
            this.shootSound.play();

            new Shot(this);          
            this.weaponReload = this.weaponSpeed;
            this.shotCounter++;
            if (this.shotCounter >= 10) {
                PLAYER.color = colors[0];
                this.shotCounter = 0;
            }
        } else {
            this.reload();  
        }  
    }

    reload() {
        if (this.weaponReload > 0) {
            this.weaponReload--;
        }
    }

    checkWeaponStatus() {
        if (!this.weaponsHot) {
            weaponDelayCounter += 1;
            if (weaponDelayCounter > weaponDelay) {
                this.weaponsHot = true;
            }
        }
    }

    killedEnemy() {
        this.killCount++;
        SCORE += 25;
    }

    takeDamage(damage) {
        //set for instant death 
        this.alive = false;      
        if (!this.alive) {
            this.die();
        }
    }

    die() {     
        GAME.addEntity(new Explosion(this.currentCenterX, this.currentCenterY));
        //resets color to white
        PLAYER.color = colors[0];
        //removes from the game
        GAME.removeEntity(this);
        //Game Over
        //wait for explosion to finish, then gameover
        sleep(1800).then(() => {
            GAMEOVER = true;
        })
        
    }
    

    draw(context) {
        Entity.prototype.draw(this, context);
        //tints the ship to its color
        context.shadowColor = this.color;
        context.shadowBlur = 20;
        
        //draw
        context.drawImage(this.img, this.pos.x, this.pos.y, 
            this.img.width * this.scale, this.img.height * this.scale);

        //resets the tint
        context.shadowBlur = 0;

      }


    update(deltaTime) {

        this.checkBounds();
        this.checkWeaponStatus();
        this.reload();
        
        if (MouseClicked && this.weaponsHot) {
            this.shoot();
        }


        this.traits.forEach(trait => {
            trait.update(this, deltaTime);
        });

        //update current center position
        this.currentCenterX = this.pos.x + this.centerX;
        this.currentCenterY = this.pos.y + this.centerY;
    
    }

    checkBounds() {
        if (this.pos.x < 0) {
            this.pos.x = 0;
        }
        if (this.pos.x > WINDOW_WIDTH - this.width * this.scale) {
            this.pos.x = WINDOW_WIDTH - this.width * this.scale;
        }

        if (this.pos.y < 0) {
            this.pos.y = 0;
        }

        if (this.pos.y > WINDOW_HEIGHT - this.height * this.scale) {
            this.pos.y = WINDOW_HEIGHT - this.height * this.scale;
        }
    }









}