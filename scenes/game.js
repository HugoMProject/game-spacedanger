
import { Asteroides } from '../components/asteorides.js';
import { LevelGame } from '../components/levelGame.js';
import { TimeClock } from '../components/timeClock.js';
import { NaveSpace } from '../components/naveSpace.js';
import { LiveCounter } from '../components/liveCounter.js';
export class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'game' });
    }
    init(){
        this.timeclock = new TimeClock(this);
        this.newasteroides = new Asteroides(this);
        this.levelgame = new LevelGame(this);
        this.naveSpace = new NaveSpace(this);
        this.score = 0;
        this.liveCounter = new LiveCounter(this, 3);
    }
    preload() {
      this.load.image('asteroides', 'assets/asteroideNew.png');
      this.load.image('background', 'https://th.bing.com/th/id/R.a2087a5e90f90bc454a75a6c1ea5c316?rik=LGxsh%2bzXtHLApg&pid=ImgRaw&r=0');
      this.load.image('gameover', 'assets/gameover.png');
      this.load.image('nave', 'assets/nave.png');
      // sonidos del juego
      this.load.audio('startgamesample', 'sounds/start-game.ogg');
      this.load.audio('livelost', 'sounds/sounds_brick-impact.ogg');
      //controles del juego
      this.load.image('btn-left', './assets/btn-left-80x80.png');
      this.load.image('btn-right', './assets/btn-right-80x80.png');

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
        this.btnLeftImg = this.add.image(100,550,'btn-left').setInteractive();
        this.btnControlLeft =  false;// variable del boton por defecto
        this.btnRightImg = this.add.image(850,550,'btn-right').setInteractive();
        this.btnControlRight =  false;// variable del boton por defecto
          //controles del boton hacia la izquierda
        this.btnLeftImg.on('pointerdown', ()=>{
          this.btnControlLeft =  true;
        });
        this.btnLeftImg.on('pointerup', ()=>{
          this.btnControlLeft =  false;
        });
        // controles del boton hacia la derecha
        this.btnRightImg.on('pointerdown', ()=>{
          this.btnControlRight =  true;
        });
        this.btnRightImg.on('pointerup', ()=>{
          this.btnControlRight =  false;
        });
        //nave espacial
      this.naveSpace.create();
        // creamos los sonidos del juego

        this.cursors = this.input.keyboard.createCursorKeys();
        // con esto indicamos la colicion del juego 
        this.physics.add.collider(this.naveSpace.naveImage, this.newasteroides.asteroides, this.asteroideImpact, null, this);

             // level de la escena
             this.levelgame.create()
          //creamos el reloj
            this.timeclock.create();
           this.liveCounter.create();
    }


     //funcion para detener el juego cuando se produsca la colicion
     asteroideImpact(naveImage, asteroides) {
        this.naveSpace.naveImage.setData('crash', true)
        let gameNotfinished = this.liveCounter.liveLost();
        asteroides.setBounce(1)
        if(!gameNotfinished){
            this.timeclock.stopTime();
            this.newasteroides.stopAsteroides();
            naveImage.visible = false
            this.scene.pause();
        }
    }
    // futuraS funcion para disparar desde la nave
    // hitAsteroide(naveImage, asteroides) {
    //     asteroides.destroy();
    // }
  

    endGame(completed = false){
        if(!completed){
          this.scene.start('gameover');
        }else{
          this.timeclock.stopTime();
          this.newasteroides.stopAsteroides();
          this.scene.start('winner');
        }
      }
    
    update(){
        if(this.cursors.left.isDown||this.btnControlLeft){
            this.naveSpace.naveImage.setVelocityX(-400);
        }else if(this.cursors.right.isDown||this.btnControlRight){
            this.naveSpace.naveImage.setVelocityX(400);
        }
        else {
            this.naveSpace.naveImage.setVelocity(0, 0);
        }

    }

  }