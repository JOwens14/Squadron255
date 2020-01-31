
var colors = ['clear','red','green','blue'];

class Entity {

    constructor(name) {
        this.name = name;
        this.pos = new Vector2d(0, 0);
        this.vel = new Vector2d(0, 0);
        this.traits = [];
        this.width;
        this.height;
        this.scale;

        //Current centers
        this.currentCenterX;
        this.currentCenterY;

    }

    addTrait(trait) {
    	this.traits.push(trait);
    	this[trait.name] = trait;
    }

    //things to draw for all entities
    draw(entity, context) {
        if (HITBOXES) {
            context.strokeStyle = 'yellow';
            context.beginPath();
            context.arc(entity.currentCenterX, entity.currentCenterY, entity.width * entity.scale/2, 2 * Math.PI, false);
            context.stroke()
        }

            //---debug draw box---//

        // context.strokeStyle = 'red';
        // context.beginPath();
        // context.rect(
        //         entity.pos.x, entity.pos.y,
        //         entity.width *  entity.scale, entity.height * entity.scale);
        // context.stroke(); ///uncomment to draw boxes for entities

        //notes
        //drawImage(image, x_pos_start, y_pos_start, draw_Width, draw_Height)

    }
}
