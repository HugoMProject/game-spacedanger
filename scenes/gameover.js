import { ResetButton} from '../components/reset-button.js'
export class GameOver extends Phaser.Scene {

    constructor() {
        super({ key: 'gameover' });
        this.restartbutton = new ResetButton(this);
      }

    preload(){
        this.load.image('gameover', 'assets/gameover.png');
        this.load.audio('gameoversample', 'sounds/gameover.ogg');
        this.restartbutton.preload()
    }
    create(){
        this.add.image(500, 300,'background');
        this.gameoverImage = this.add.image(500, 150,'gameover');
        this.gameOverSample = this.sound.add('gameoversample');
        this.gameOverSample.play();
        this.restartbutton.create();
    }
}