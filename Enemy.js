var enemyColorFiles = [`./Enemies/enemy_clear.png`,`./Enemies/enemy_red.png`,`./Enemies/enemy_green.png`,`./Enemies/enemy_blue.png`];
var enemyColorChoice;

class Enemy extends Entity {

    constructor() {

        super('enemy');

        this.color;
        this.health = 1;

        this.fallEnabled = true;

        
        //sprite for enemy
        this.img = new Image();
        this.img.src;
        
        //randomly picks a color
        this.colorGenerator();

        //draw scale
        this.scale = 0.5;

        //enemy width and height
        this.width = this.img.width;
        this.height = this.img.height;

        //default position
        this.defaultPosX = Math.floor(Math.random() * WINDOW_WIDTH - this.width * this.scale) + (this.width * this.scale); //random X within the window
        this.defaultPosY = -Math.floor(Math.random() * 40) -10; //random y with 0 to -30 

        //set enemy to the default position
        this.pos = new Vector2d(this.defaultPosX, this.defaultPosY);
        //this.pos = new Vector2d(500, 500);


        //enemy velocity
        this.velocity = new Vector2d(0,0);

        //Center cordinate
        this.centerX = (this.width * this.scale) / 2;
        this.centerY = (this.height * this.scale) / 2;
        
        //enemy velocity;
        this.addTrait(new Velocity());

        this.damage = 1;

     
    }

    colorGenerator(){
        enemyColorChoice = Math.floor(Math.random() * 3) + 1;
        this.color = colors[enemyColorChoice];
        this.img.src = enemyColorFiles[enemyColorChoice];
    }
    
    setColor(color) {
        this.color = color;
    }

    takeDamage(shot) {   
        if (PLAYER.color == this.color) {
            this.health -= PLAYER.weaponDamage;
            if (this.health <= 0) {
                PLAYER.killedEnemy();
                this.die();
            }
        } else {
            this.takeDamageWrongColor(shot);
        }  
    }

    takeDamageWrongColor(shot) {
        var i;
        for (i = 0; i < 100; i++) {
            this.pos.y -= -shot.Shoot.yDirection * shot.knockback * .001;
            this.pos.x += shot.Shoot.xDirection * shot.knockback * .001;
        }
    }

    takeExplosionDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            PLAYER.killedEnemy();
            this.die();
        } 
    }


    die() {
        GAME.removeEntity(this);
    }


    draw(context) {
        Entity.prototype.draw(this, context);

        context.drawImage(this.img, this.pos.x, this.pos.y, this.img.width * this.scale, this.img.height * this.scale);
       
      }


    update(deltaTime) {

        if(this.fallEnabled) {
            this.pos.y += GAMESPEED/3;
        }
        


        //die if enemy has passed below the window height
        if(this.pos.y > WINDOW_HEIGHT + 15) {
            this.die();
        }


        //update current center position
        this.currentCenterX = this.pos.x + this.centerX;
        this.currentCenterY = this.pos.y + this.centerY;
    
    }
}