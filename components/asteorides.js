import { LevelGame } from './levelGame.js';
import { TimeClock } from '../components/timeClock.js'
export class Asteroides {
    constructor(scene){
        this.asteroidesScene = scene;
        this.clock = 0;
        this.runningTime = 0;
        this.levelgame = new LevelGame(this.asteroidesScene)
        this.timeClock = new TimeClock(this.asteroidesScene)
    }
    init(){
        this.meteoro1 = 0;
        this.stopasteroidesInterval;
    }
    preload(){
      this.load.audio('newlevel', 'sounds/start-game.ogg');
    }
    create(){
        this.asteroides = this.asteroidesScene.physics.add.group({
            defaultKey: 'asteroides',

        });
        this.newLevel= this.asteroidesScene.sound.add('newlevel');
        this.levelgame.create();
        this.startAsteroides();
        
    }
    //selector de nivel en funcion del tiempo
    selectorLevel(nowTime){
        if(nowTime <= 150){
         this.levelgame.incrementlevel('level: 1');
            this.newAsteroidelevel1();
            }else if(nowTime <= 240){
               this.levelgame.incrementlevel('level: 2')
               this.newAsteroidelevel2();
               }else if(nowTime <= 360){
                  this.levelgame.incrementlevel('level: 3')
                  this.newAsteroidelevel3();
                  this.newAsteroidelevel2();
                  }else if(nowTime <= 500){
                     this.levelgame.incrementlevel('level: 4')
                     this.newAsteroidelevel3();
                     this.newAsteroidelevel4();
                  }else if(nowTime <= 720){
                     this.levelgame.incrementlevel('level: 5')
                     this.newAsteroidelevel2();
                     this.newAsteroidelevel3();
                     this.newAsteroidelevel4();
               }else if(nowTime <= 900){
                  this.levelgame.incrementlevel('level: imposible')
                  this.newAsteroidelevel2();
                  this.newAsteroidelevel3();
                  this.newAsteroidelevel4();
                  this.newAsteroidelevel5();
            }else{
               this.asteroidesScene.endGame(true)
            }
    }
    levelsounds(nowtime){
      if(nowtime == 1){
         this.newLevel.play()
      }else if(nowtime==150){
         this.newLevel.play()
      }else if(nowtime==240){
         this.newLevel.play()
      }else if(nowtime==360){
         this.newLevel.play()
      }else if(nowtime==500){
         this.newLevel.play()
      }else if(nowtime==720){
         this.newLevel.play()
      }else if(nowtime==900){
         this.newLevel.play()
      }
    }

                    // funciones para aumentar la dificultad del juego
     newAsteroidelevel1() {
        // creamos los ateroides y le damos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 1030), -10);
        this.asteroidesScene.physics.add.collider(oneAsteroide, oneAsteroide1);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(200)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1)
                   .setVelocityX((Phaser.Math.Between(0, 1.9) ? 150 : -100));
                  }
         if (oneAsteroide1) {
            oneAsteroide1.setActive(true)
                   .setVisible(true)
                   .setGravityY(100)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX((Phaser.Math.Between(0, 1.3) ? 90 : -130));
                  }
     }
     newAsteroidelevel2() {
      
        // creamos los ateroides y le damos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 930), -10);
        const oneAsteroide2= this.asteroides.get(Phaser.Math.Between(1.3, 630), -30);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(190)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.9) ? 100 : -100)
                              );
                  }
         if (oneAsteroide1) {
            oneAsteroide1.setActive(true)
                   .setVisible(true)
                   .setGravityY(120)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 30 : -50)
                              );
                  }
         if (oneAsteroide2) {
            oneAsteroide2.setActive(true)
                   .setVisible(true)
                   .setGravityY(210)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 50 : -30)
                              );
                  }
     }
     newAsteroidelevel3() {
      this.levelgame.incrementlevel('level: 3')
        // creamos los ateroides y le dos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 930), -10);
        const oneAsteroide2= this.asteroides.get(Phaser.Math.Between(1.3, 630), -30);
        const oneAsteroide3= this.asteroides.get(Phaser.Math.Between(1.3, 330), -50);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(300)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.9) ? 100 : -100)
                              );
                  }
         if (oneAsteroide1) {
            oneAsteroide1.setActive(true)
                   .setVisible(true)
                   .setGravityY(250)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 90 : -80)
                              );
                  }
         if (oneAsteroide2) {
            oneAsteroide2.setActive(true)
                   .setVisible(true)
                   .setGravityY(210)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 50 : -30)
                              );
                  }
         if (oneAsteroide3) {
            oneAsteroide3.setActive(true)
                   .setVisible(true)
                   .setGravityY(330)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 90 : -80)
                              );
                  }
     }
     newAsteroidelevel4() {
      this.levelgame.incrementlevel('level: 4')
        // creamos los ateroides y le damos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 930), -10);
        const oneAsteroide2= this.asteroides.get(Phaser.Math.Between(1.3, 630), -30);
        const oneAsteroide3= this.asteroides.get(Phaser.Math.Between(1.3, 330), -50);
        const oneAsteroide4= this.asteroides.get(Phaser.Math.Between(1.3, 863), -15);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(320)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.9) ? 100 : -100)
                              );
                  }
         if (oneAsteroide1) {
            oneAsteroide1.setActive(true)
                   .setVisible(true)
                   .setGravityY(250)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 120 : -120)
                              );
                  }
         if (oneAsteroide2) {
            oneAsteroide2.setActive(true)
                   .setVisible(true)
                   .setGravityY(260)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 50 : -30)
                              );
                  }
         if (oneAsteroide3) {
            oneAsteroide3.setActive(true)
                   .setVisible(true)
                   .setGravityY(330)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 130 : -80)
                              );
                  }
         if (oneAsteroide4) {
            oneAsteroide4.setActive(true)
                   .setVisible(true)
                   .setGravityY(430)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 90 : -80)
                              );
                  }
     }
     newAsteroidelevel5() {
      this.levelgame.incrementlevel('level: imposible')
        // creamos los ateroides y le damos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 1030), -10);
        const oneAsteroide2= this.asteroides.get(Phaser.Math.Between(1.3, 630), -30);
        const oneAsteroide3= this.asteroides.get(Phaser.Math.Between(1.3, 330), -50);
        const oneAsteroide4= this.asteroides.get(Phaser.Math.Between(1.3, 863), -15);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(320)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.9) ? 100 : -100)
                              );
                  }
         if (oneAsteroide1) {
            oneAsteroide1.setActive(true)
                   .setVisible(true)
                   .setGravityY(250)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 90 : -80)
                              );
                  }
         if (oneAsteroide2) {
            oneAsteroide2.setActive(true)
                   .setVisible(true)
                   .setGravityY(250)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 50 : -30)
                              );
                  }
         if (oneAsteroide3) {
            oneAsteroide3.setActive(true)
                   .setVisible(true)
                   .setGravityY(330)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 90 : -80)
                              );
                  }
         if (oneAsteroide4) {
            oneAsteroide4.setActive(true)
                   .setVisible(true)
                   .setGravityY(430)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 90 : -80)
                              );
                  }
     }
     startAsteroides(){
      let Clock = Date.now() - this.clock;
        this.stopasteroidesInterval = setInterval(() => {
         let runningTime = Date.now() - Clock;
    //      seteamos los datos para que los imprima en la pantalla
            this.selectorLevel(this.calculateTime(runningTime));
            this.levelsounds(this.calculateTime(runningTime));
          }, 1000);
     }
     calculateTime(runningTime){
        const total_seconds = Math.floor(runningTime/1000);     
        const display_seconds = total_seconds.toString().padStart(2, "0");
            return display_seconds;
    }
     stopAsteroides(){
        clearInterval(this.stopasteroidesInterval);
        this.meteoro1 = 0;
    }


}