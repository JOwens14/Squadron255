
scorePad = 125;

function scoreUpdate() {
    CTX.font = "40px Comic Sans MS";
    CTX.fillStyle = "red";
    CTX.textAlign = "left";
    CTX.fillText(SCORE, WINDOW_WIDTH - scorePad, WINDOW_HEIGHT - scorePad/2);
}