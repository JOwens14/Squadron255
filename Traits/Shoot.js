var shotSpeed = 100;

class Shoot extends Trait {
    constructor(entity, xDir, yDir) {
        super('Shoot');
        
        //slopes the shot towards the mouse cursor
        this.xDirection = xDir - (entity.pos.x + entity.centerX);
        this.yDirection = yDir - entity.pos.y;
        
        //shot speed
        this.speed = shotSpeed; 
    }

    update(entity, deltaTime) {

        //sets the velocity the projectile
        entity.velocity.x = ((this.speed * this.xDirection) * deltaTime);
        entity.velocity.y = ((this.speed * this.yDirection) * deltaTime);

        //moves the projectile
        entity.pos.x += entity.velocity.x * deltaTime;
        entity.pos.y += entity.velocity.y * deltaTime;
        
    }
}
