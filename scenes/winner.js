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
        this.agradecimineto = this.add.text(20, 10, 'Gracias por haber jugado...', { 
            fontSize: '25px',
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
          this.desarrollado = this.add.text(550, 550, 'Desarrollado por Hugo Moyano...', { 
            fontSize: '25px',
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
        this.youWinsAmple = this.sound.add('youwinsample');
        this.youWinsAmple.play();
        this.restartbutton.create();
    }
}