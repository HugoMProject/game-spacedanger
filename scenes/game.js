
import { Asteroides } from '../components/asteorides.js';
import { ScoreGame } from '../components/scoreGame.js';
import { TimeClock } from '../components/timeClock.js';
import { NaveSpace } from '../components/naveSpace.js'
export class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'game' });
    }
    init(){
        this.timeclock = new TimeClock(this);
        this.newasteroides = new Asteroides(this);
        this.scoregame = new ScoreGame(this);
        this.naveSpace = new NaveSpace(this);
    }
    preload() {
        this.load.image('asteroides', 'assets/asteroideNew.png');
        this.load.image('background', 'https://th.bing.com/th/id/R.a2087a5e90f90bc454a75a6c1ea5c316?rik=LGxsh%2bzXtHLApg&pid=ImgRaw&r=0');
        this.load.image('gameover', 'assets/gameover.png');
        this.load.image('nave', 'assets/nave.png');
        // sonidos del juego
        this.load.audio('startgamesample', 'sounds/start-game.ogg');
        let url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
        this.load.plugin('rexvirtualjoystickplugin', url, true);
    }
  
    create() {
        this.physics.world.setBoundsCollision(true,true,false,false)
        this.add.image(500, 300,'background');
        this.gameoverImage = this.add.image(500, 250,'gameover');
        this.gameoverImage.visible  = false;
        this.startGameSample = this.sound.add('startgamesample');
        //asteroides
        this.newasteroides.create();

        // creamos el joystick 
        this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
            x: 855,
            y: 400,
            radius: 100,
            base: this.add.circle(0, 0, 50, 0x888888),
            thumb: this.add.circle(0, 0, 25, 0xcccccc),
      });
      this.joystickCursors = this.joyStick.createCursorKeys();
    
        //nave espacial
      this.naveSpace.create();
        // creamos los sonidos del juego
        

        this.cursors = this.input.keyboard.createCursorKeys();
        // con esto indicamos la colicion del juego 
        this.physics.add.collider(this.naveSpace.naveImage, this.newasteroides.asteroides, this.asteroideImpact, null, this);

        // creamos los puntos
            this.scoregame.create();
            // level de la escena
          this.levelText = this.add.text(16, 45, 'level: 1', { 
            fontSize: '20px',
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
          //creamos el reloj
          this.timeclock.create();
    }


     //funcion para detener el juego cuando se produsca la colicion
     asteroideImpact(naveImage, asteroides) {
        this.naveSpace.naveImage.setData('crash', true)
        this.showGameOver();
        this.timeclock.stopTime();
        this.newasteroides.stopAsteroides();
        naveImage.visible = false
        this.scene.pause();
    }
    // futura funcion para disparar desde la nave
    // hitAsteroide(naveImage, asteroides) {
    //     asteroides.destroy();
    // }
    
    asteroidesEvitados() {
        //funcion para aumentar los puntos, con los meteoros esquivados
        this.scoregame.incrementpoints(1)
    }


    
    update(){
        if(this.cursors.left.isDown||this.joystickCursors.left.isDown){
            this.naveSpace.naveImage.setVelocityX(-500);
        }else if(this.cursors.right.isDown||this.joystickCursors.right.isDown){
            this.naveSpace.naveImage.setVelocityX(500);
        }else {
            this.naveSpace.naveImage.setVelocity(0, 0);
        }

    }

    showGameOver(){
        this.scene.start('gameover');
    }
    showNewlevel(){
        this.scene.start('level2');
    }
  }