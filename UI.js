export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
    }
    draw(context) {
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        //score
        context.fillText('Score: ' + this.game.score, 20, 50)
        //timer
        context.font = this.fontSize * 0.8 + ' px' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80);
        // game over messages
        if (this.game.gameOver) {
            context.textAlign = 'left';
            context.font = this.fontSize * 2 + ' px' + this.fontFamily;
            if (this.game.score > 15) {
                context.fillText('!! VICTORY !!', this.game.width * 0.5 - 60, this.game.height * 0.5);
            } else {
                context.fillText('!! LOOSER ☠️!!', this.game.width * 0.5 - 60, this.game.height * 0.5);
            }
        }
        context.restore();
    }
}