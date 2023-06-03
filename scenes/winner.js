import { ResetButton} from '../components/reset-button.js';
export class Winner extends Phaser.Scene{
    constructor(){
        super({key:'winner'});
        this.restartbutton = new ResetButton(this)
    }
    preload(){
        this.load.image('congratulations', 'assets/congratulations.png');
        this.load.audio('youwinsample', 'sounds/sounds_you_win.ogg');
        this.restartbutton.preload();
    }
    create(){
        this.add.image(500, 300,'background');
        this.congratulationsImage = this.add.image(500, 150,'congratulations');
        this.youWinsAmple = this.sound.add('youwinsample');
        this.youWinsAmple.play();
        this.restartbutton.create();
    }
}