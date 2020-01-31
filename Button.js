class Button {
    constructor(name) {
				this.name = name;
        this.pos = new Vector2d(0, 0);

        this.hovered = false;

        this.img = new Image();
        this.img.src = `./Buttons/${name}.png`;

        this.imgHovered = new Image();
        this.imgHovered.src = `./Buttons/${name}_hovered.png`;

        this.width = this.img.width;
        this.height = this.img.height;

        this.centerPos();

		}

    move(x,y) {
      this.pos.set(x,y);
    }

    centerPos() {
      this.pos.set(WINDOW_WIDTH/2 - this.width/2, WINDOW_HEIGHT/2 - this.height/2);
    }

    draw(context) {
      if (this.hovered === false) {
        context.drawImage(this.img, this.pos.x, this.pos.y);
      } else {
        context.drawImage(this.imgHovered, this.pos.x, this.pos.y);
      }

      //debug draw box
      // context.strokeStyle = 'red';
      // context.beginPath();
      // context.rect(
      //         this.pos.x, this.pos.y,
      //         this.width, this.height);
      // context.stroke(); ///uncomment to draw boxes for entities
    }

    mousedOver() {
      return ((MouseX >= this.pos.x && MouseX <= this.pos.x + this.width)
      && (MouseY >= this.pos.y && MouseY <= this.pos.y + this.height));
    }

    clicked() {
      //maybe needed later
    }


    update(deltaTime) {
      //hover Highlight for button
      this.hovered = this.mousedOver(); 
    }


  }
