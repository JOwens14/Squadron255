class Scene{
    constructor(sceneName) {
        this.SceneName = sceneName;
        this.comp = new Compositor();
        this.entities = new Set();
        this.buttons = new Set();
    }

    addEntity(entity) {
      this.entities.add(entity);
    }

    removeEntity(entity) {
      this.entities.delete(entity);
    }

    addButton(button) {
      this.buttons.add(button);
    }

    removeButton(button) {
      this.buttons.delete(button);
    }

    clearScene() {
      this.comp = new Compositor();
      this.entities = new Set();
      this.buttons = new Set();
    }

    update(deltaTime) {
      if (!isPaused) {
        this.entities.forEach(entity => {
            entity.update(deltaTime);
        });

        this.buttons.forEach(button => {
            button.update(deltaTime);
        });
      }
    }
}

function loadScene(name) {
  //console.log(name);
  const scene = new Scene(name);
  const sceneBackgroundLayer = createSceneBackgroundLayer(scene);   //background layer
  scene.comp.layers.push(sceneBackgroundLayer);

  if (name === 'StartScreen' || name === 'GameOverScreen') {
    const buttonLayer = createButtonLayer(scene);   //button layer
    scene.comp.layers.push(buttonLayer);
    return scene;
  }

  

  const spriteLayer = createSpriteLayer(scene.entities);    //entity layer
  scene.comp.layers.push(spriteLayer);



  return scene;
}

