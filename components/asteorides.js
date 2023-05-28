
export class Asteroides {
    constructor(scene){
        this.asteroidesScene = scene;
    }
    init(){
        this.meteoro1 = 0;
        this.stopasteroidesInterval;
        this.clock = 0;
        this.runningTime = 0;
    }
    create(){
        this.asteroides = this.asteroidesScene.physics.add.group({
            defaultKey: 'asteroides',

        });
        this.startAsteroides()
    }
    //selector de nivel en funcion del tiempo
    // selectorLevel(nowTime){
    //     if(nowTime == 3){
    //         this.newAsteroidelevel1();
    //     }else if(nowTime  == 15){
    //         this.newAsteroidelevel2();
    //     }else if(nowTime  == 30){
    //         this.newAsteroidelevel2();
    //     }
    // }

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
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.9) ? 100 : -100)
                              );
                  }
         if (oneAsteroide1) {
            oneAsteroide1.setActive(true)
                   .setVisible(true)
                   .setGravityY(100)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1,1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.3) ? 90 : -80)
                              );
                  }
     }
     newAsteroidelevel2() {
        // creamos los ateroides y le damos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 1030), -10);
        const oneAsteroide2= this.asteroides.get(Phaser.Math.Between(1.3, 630), -30);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(250)
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
     }
     newAsteroidelevel3() {
        // creamos los ateroides y le damos propiedades
        const oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.6, 850/2.5), -60);
        const oneAsteroide1= this.asteroides.get(Phaser.Math.Between(1.3, 1030), -10);
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
     startAsteroides(){
        this.stopasteroidesInterval = setInterval(() => {
    //      seteamos los datos para que los imprima en la pantalla
            this.newAsteroidelevel1()
          }, 1000);
     }
    //  calculateTime(runningTime){
    //     const total_seconds = Math.floor(runningTime/1000);
    //     const total_minutes = Math.floor(total_seconds/60);
    //     const total_horas = Math.floor(total_minutes/60);
            
    //     const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    //     const display_minutes = (total_minutes % 60).toString().padStart(2, "0");
    //     const display_horas = total_horas.toString().padStart(2, "0");
        
    //         return `${display_horas}:${display_minutes}:${display_seconds}`
    // }

     stopAsteroides(){
        clearInterval(this.stopasteroidesInterval);
        this.meteoro1 = 0;
    }

     update(time){
        if (time > this.meteoro1) {
            this.newAsteroide()
            this.meteoro1 += 2000;
        }
     }


}