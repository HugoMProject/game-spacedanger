
// import VirtualJoystick from './phaser3-rex-plugins/plugins/virtualjoystick.js';
import { ScoreGame } from '../components/scoreGame.js'
import { TimeClock } from '../components/timeClock.js'
import { JoyStick } from '../components/joyStick.js'
export class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'game' });
    }
    init(){
        this.timeclock = new TimeClock(this);
        this.scoregame = new ScoreGame(this);
        // this.joystickScene = new JoyStick(this);
        this.meteoro1 = 0;
    }
    preload() {
        this.load.image('nave', 'assets/nave.png');
        this.load.image('asteroides', 'assets/asteroideNew.png');
        this.load.image('background', 'https://th.bing.com/th/id/R.a2087a5e90f90bc454a75a6c1ea5c316?rik=LGxsh%2bzXtHLApg&pid=ImgRaw&r=0');
        this.load.image('gameover', 'assets/gameover.png');
        // sonidos del juego
        this.load.audio('startgamesample', 'sounds/start-game.ogg');
    }
  
    create() {
        this.physics.world.setBoundsCollision(true,true,false,false)
        this.add.image(500, 300,'background');
        this.gameoverImage = this.add.image(500, 250,'gameover');
        this.gameoverImage.visible  = false;
        this.startGameSample = this.sound.add('startgamesample');
        //asteroides
           this.asteroides = this.physics.add.group({
            defaultKey: 'asteroides',

        });

        //c
    //      this.joystickScene.create();

    //   this.joystickCursors = this.joyStick.createCursorKeys();
    
        //nave espacial
        this.naveImage = this.physics.add.image(500, 555,'nave').setImmovable();
        this.naveImage.body.allowGravity = false;
        this.naveImage.setCollideWorldBounds(true)
        this.naveImage.setData('crash',false)
        // creamos los sonidos del juego
        

        this.cursors = this.input.keyboard.createCursorKeys();
        // con esto indicamos la colicion del juego 
        this.physics.add.collider(this.naveImage, this.asteroides, this.asteroideImpact, null, this);

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
        //   this.newAsteroide()
    }
    startGame(){
        let waitGame = setInterval(()=>{
            console.log('el codigo se a ejecutado debe de iniciar el juego');
            this.asteroidesEvitados();
            clearInterval(waitGame);
        },2000)
        console.log('se ha ejecutado')
    }
    newAsteroide() {
        // creamos los ateroides y le damos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.3, this.game.config.width), -20);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(200)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1, 1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.5) ? 50 : -50)
                              );
                  }
     }

     //funcion para detener el juego cuando se produsca la colicion
     asteroideImpact(naveImage, asteroides) {
    this.naveImage.setData('crash', true)
    this.showGameOver();
    this.timeclock.stopTime();
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


    
    update(time,delta){
        // if(this.cursors.left.isDown||this.joystickCursors.left.isDown){
        //     this.naveImage.setVelocityX(-500);
        // }else if(this.cursors.right.isDown||this.joystickCursors.right.isDown){
        //     this.naveImage.setVelocityX(500);
        // }else {
        //     this.naveImage.setVelocity(0, 0);
        // }



        //               se debe resolver el error del joystick
        if(this.cursors.left.isDown){
            this.naveImage.setVelocityX(-500);
        }else if(this.cursors.right.isDown){
            this.naveImage.setVelocityX(500);
        }else {
            this.naveImage.setVelocity(0, 0);
        }
        if (time > this.meteoro1) {
            this.newAsteroide();
            this.meteoro1 += 2000;
        }
        if(this.scoregame == 500){
            // this. showNewlevel();
            console.log('cambio de nivel')
        }
    }

    showGameOver(){
        this.scene.switch('game')
        this.scene.start('gameover');
    }
    showNewlevel(){
        this.scene.start('level2');
    }
  }