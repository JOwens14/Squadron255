function setupKeyboard(player, keyboard) {
    const input = keyboard || new keyBoardState(); //new keyboard

    input.addMapping('Space', keyState => { //Fire
        if (!isPaused) {
            if (keyState) {
                //todo
        }
      }
    });

    input.addMapping('KeyW', keyState => { //Up
        if (!isPaused) {
            if (keyState && player.Velocity.vDir != 1) {
                //console.log('w');
                player.Velocity.vDir = -1;
            } else {
                player.Velocity.vDir = 0;

            }
        }
    });

    input.addMapping('KeyD', keyState => { //Right
        if (!isPaused) {
            if (keyState && player.Velocity.hDir != -1) {
                player.Velocity.hDir = 1;
            } else {
                player.Velocity.hDir = 0;

            }
        }
    });

    input.addMapping('KeyA', keyState => { //Left
        if (!isPaused) {
            if (keyState && player.Velocity.hDir != 1) {
                player.Velocity.hDir = -1;
            } else {
                player.Velocity.hDir = 0;

            }
        }
    });

    input.addMapping('KeyS', keyState => { //Down
        if (!isPaused) {
            if (keyState && player.Velocity.vDir != -1) {
                player.Velocity.vDir = 1;
            } else {
                player.Velocity.vDir = 0;

            }
        }
    });

    input.addMapping('KeyM', keyState => { // Mute/Unmute
        if (keyState) {
            if (soundEnabled) {
                soundEnabled = false;
            } else {
                soundEnabled = true;
            }
        }
    });

    return input;
}

