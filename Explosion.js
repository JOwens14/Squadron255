class Explosion extends Entity{
    constructor (x, y) {
        
        super('explosion');

        this.pos.x = x;
        this.pos.y = y;

        this.height = 128;
        this.width = 128;

        this.frameStartX = 0;
        this.frameStartY = 0;

        this.frameWidth = 128;
        this.frameHeight = 128;

        this.frameSpeed = 0.1;
        this.frameCount = 11;

        this.frameLoop = false;
        this.reverseFrames = false;

        this.scale = 1;

        this.centeredX = this.pos.x - this.frameWidth / 2;
        this.centeredY = this.pos.y - this.frameHeight / 2;

        //Center cordinate of img #used for collider
        //0,0 because the actual center is passed in as x,y during construction and the way the collider works is dumb
        this.centerX = 0;
        this.centerY = 0;

        this.explosion = new Image();
        this.explosion.src = `./Effects/explosion.png`;
        this.explosionAnimation = new Animation(this.explosion, this.frameStartX, this.frameStartY, 
            this.frameWidth, this.frameHeight, this.frameSpeed, this.frameCount, this.frameLoop, this.reverseFrames);

        this.doneAnimating = false;

        this.damage = 100;

        this.explosionSound = './Sound/ExplosionSound.wav';
        new sound(this.explosionSound).play();


    }

    draw(context) {
        //draw explosion
        this.doneAnimating = this.explosionAnimation.drawFrame(deltaTime, CTX, this.centeredX, this.centeredY, 1);        
    }

    update(deltaTime) {
        if (this.doneAnimating) {
            GAME.removeEntity(this);
        }
    }
}