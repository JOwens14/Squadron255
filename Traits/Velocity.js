
const maxVel = 1000;
const drag = 6;

var speed = 12000;
var speedGain = 750;

var prev_V_velocity;
var prev_H_velocity;

//Velocity
class Velocity extends Trait {
    constructor() {
        super('Velocity');

		this.vDir = 0;
		this.hDir = 0;

		this.vSpeed = speed;
		this.hSpeed = speed * 1.1;

        this.enabled = true;
    }

    update(entity, deltaTime) {

		//stores current velocity
		prev_V_velocity = entity.velocity.y;
		prev_H_velocity = entity.velocity.x;

		 //moves the player based on velocity and if velocity changes are enabled
		if (this.enabled) {
			entity.velocity.y = this.vSpeed * this.vDir * deltaTime;
			entity.velocity.x = this.hSpeed * this.hDir * deltaTime;
		}

		//increase speed the longer a button is held
		if (this.vDir != 0) {
			this.vSpeed += speedGain;
		} else {
			this.vSpeed = speed;
		}

		if (this.hDir != 0) {
			this.hSpeed += speedGain;
		} else {
			this.hSpeed = speed;
		}

		//apply vertical drag
		if (this.vDir == 0 && prev_V_velocity != 0) {
			if (prev_V_velocity > 0) {
				entity.velocity.y = prev_V_velocity - drag;
				if (prev_V_velocity < 0) {
					entity.velocity.y = 0;
				}
			}

			if (prev_V_velocity < 0) {
				entity.velocity.y = prev_V_velocity + drag;
				if (prev_V_velocity > 0) {
					entity.velocity.y = 0;
				}
			}	
		}

		//apply horizontal drag
		if (this.hDir == 0 && prev_H_velocity != 0) {
			if (prev_H_velocity > 0) {
				entity.velocity.x = prev_H_velocity - drag;
				if (prev_H_velocity < 0) {
					entity.velocity.x = 0;
				}
			}

			if (prev_H_velocity < 0) {
				entity.velocity.x = prev_H_velocity + drag;
				if (prev_H_velocity > 0) {
					entity.velocity.x = 0;
				}
			}
		}

		//speed trapping
		if (entity.velocity.x > maxVel) entity.velocity.x = maxVel;
		if (entity.velocity.y > maxVel) entity.velocity.y = maxVel;
		if (entity.velocity.x < -maxVel) entity.velocity.x = -maxVel;
		if (entity.velocity.y < -maxVel) entity.velocity.y = -maxVel;


		//takes the velocity and moves the player
		entity.pos.x += entity.velocity.x * deltaTime;
		entity.pos.y += entity.velocity.y * deltaTime;	


    }
}


