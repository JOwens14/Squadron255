var spawnRate = 50;
var spawnTickCounter = 0

class EnemeySpawner {

    constructor() {
        this.spawnRate = spawnRate;
    }


    update() {
        if (spawnTickCounter >= spawnRate) {
            GAME.addEntity(new Enemy());
            spawnTickCounter = 0;
        } else {
            spawnTickCounter++;
        }

    }



}