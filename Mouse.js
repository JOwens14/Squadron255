function getMouseCords(event) {
  var rect = document.getElementById("gameWorld").getBoundingClientRect();
  if (event) {
    xpos = event.clientX;
    ypos = event.clientY;
    MouseX = Math.ceil((xpos - rect.left) / (document.getElementById("gameWorld").clientWidth / document.getElementById("gameWorld").width));
    MouseY = Math.ceil((ypos - rect.top) / (document.getElementById("gameWorld").clientHeight / document.getElementById("gameWorld").height));

    //console.log(MouseX + ', ' + MouseY);
  }
}

function onMouseDown(event) {
  MouseClicked = true;
}

function onMouseUp(event) {
  MouseClicked = false;
}


class Mouse {
  constructor() {
    this.img = new Image();
    this.img.src = `./Cursors/cursor.png`;

    this.width = this.img.width;
    this.height = this.img.height;

    //draw scale
    this.scale = 1;

  }

  //draw mouse location
  draw(context, x,y) {
    context.drawImage(this.img, x - this.width/2, y - this.height/2, this.img.width * this.scale, this.img.height * this.scale);

}


}