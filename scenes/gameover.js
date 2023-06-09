import { ResetButton} from '../components/reset-button.js'
export class GameOver extends Phaser.Scene {

    constructor() {
        super({ key: 'gameover' });
        this.restartbutton = new ResetButton(this);
      }

    preload(){
        this.load.image('gameover', 'assets/gameover.png');
        this.load.audio('gameoversample', 'sounds/gameover.ogg');
        this.restartbutton.preload();
    }
    create(){
        this.add.image(500, 300,'background').setScale(1.5);
        this.gameoverImage = this.add.image(500, 150,'gameover');
        this.gameOverSample = this.sound.add('gameoversample');
        this.gameOverSample.volume = 0.3;
        this.gameOverSample.play();
        this.restartbutton.create();
        
    }
}