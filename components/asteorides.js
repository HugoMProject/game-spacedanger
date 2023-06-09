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
        this.stopbandaSonoraInterval;
    }
    preload(){
      this.load.audio('newlevel', 'sounds/start-game.ogg');
      this.load.audio('bandasonora','sounds/space-sounds.mp3');
    }
    create(){
      this.bandaSonora = this.asteroidesScene.sound.add('bandasonora');
      // this.sound.setDecodedCallback([  this.bandaSonora ], function(){
         // Es seguro usar los sonidos
      // }, this);
        this.asteroides = this.asteroidesScene.physics.add.group({
            defaultKey: 'asteroides',

        });
        this.bandaSonora.volume = 0.1;
        this.bandaSonora.play();
        this.newLevel= this.asteroidesScene.sound.add('newlevel');
        this.levelgame.create();
        this.startAsteroides();
        this.startBandaSonora();
        
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
                  }else if(nowTime <= 600){
                     this.levelgame.incrementlevel('level: 4')
                     this.newAsteroidelevel3();
                     this.newAsteroidelevel4();
                  }else if(nowTime <= 820){
                     this.levelgame.incrementlevel('level: 5')
                     this.newAsteroidelevel2();
                     this.newAsteroidelevel3();
                     this.newAsteroidelevel4();
               }else if(nowTime <= 1000){
                  this.levelgame.incrementlevel('level: imposible')
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
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(60, 850/2.5), -100);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(200, 930), -50);
        this.asteroidesScene.physics.add.collider(oneAsteroide, oneAsteroide1);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(220)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1)
                   .setVelocityX((Phaser.Math.Between(0, 1.9) ? 150 : -100));
                  }
         if (oneAsteroide1) {
            oneAsteroide1.setActive(true)
                   .setVisible(true)
                   .setGravityY(90)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX((Phaser.Math.Between(0, 1.3) ? 90 : -130));
                  }
     }
     newAsteroidelevel2() {
      
        // creamos los ateroides y le damos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(200, 930), -100);
        const oneAsteroide2= this.asteroides.get(Phaser.Math.Between(50, 830), -30);
        this.asteroidesScene.physics.add.collider(oneAsteroide, oneAsteroide1);
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
                   .setGravityY(110)
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
                   .setGravityY(170)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 100 : -100)
                              );
                  }
     }
     newAsteroidelevel3() {
      this.levelgame.incrementlevel('level: 3')
        // creamos los ateroides y le dos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 930), -90);
        const oneAsteroide2= this.asteroides.get(Phaser.Math.Between(1.3, 630), -150).setScale(1.5);
        const oneAsteroide3= this.asteroides.get(Phaser.Math.Between(1.3, 530), -50);
        this.asteroidesScene.physics.add.collider(oneAsteroide, oneAsteroide1);
        this.asteroidesScene.physics.add.collider(oneAsteroide2, oneAsteroide3);
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
     }
     newAsteroidelevel4() {
      this.levelgame.incrementlevel('level: 4')
        // creamos los ateroides y le damos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 930), -90);
        const oneAsteroide2= this.asteroides.get(Phaser.Math.Between(1.3, 630), -150).setScale(2);
        const oneAsteroide3= this.asteroides.get(Phaser.Math.Between(1.3, 330), -50);
        const oneAsteroide4= this.asteroides.get(Phaser.Math.Between(1.3, 863), -35);
        this.asteroidesScene.physics.add.collider(oneAsteroide, oneAsteroide1);
        this.asteroidesScene.physics.add.collider(oneAsteroide2, oneAsteroide3);
        this.asteroidesScene.physics.add.collider(oneAsteroide3, oneAsteroide4);
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
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -200).setScale(1.5);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 1030), -90);
        const oneAsteroide2= this.asteroides.get(Phaser.Math.Between(1.3, 630), -30);
        const oneAsteroide3= this.asteroides.get(Phaser.Math.Between(1.3, 630), -150).setScale(2);
        const oneAsteroide4= this.asteroides.get(Phaser.Math.Between(1.3, 863), -195).setScale(1.5);
        this.asteroidesScene.physics.add.collider(oneAsteroide, oneAsteroide1);
        this.asteroidesScene.physics.add.collider(oneAsteroide2, oneAsteroide3);
        this.asteroidesScene.physics.add.collider(oneAsteroide3, oneAsteroide4);
        this.asteroidesScene.physics.add.collider(oneAsteroide4, oneAsteroide);
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
                   .setGravityY(350)
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
                   .setGravityY(350)
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
     //funcion para repetir la bandasonara durante el juego
     startBandaSonora(){
      this.stopbandaSonoraInterval = setInterval(() => {
         // cuando acabe la cancion se va a volver a reproducir
            this.bandaSonora.play();
        }, 68000);
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
      this.bandaSonora.pause();
        clearInterval(this.stopasteroidesInterval);
        clearInterval(this.stopbandaSonoraInterval);
        this.meteoro1 = 0;
    }


}