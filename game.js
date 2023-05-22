export class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'game' });
    }
    init(){
        this.score = 0;
        this.clock = 0;
        this.meteoro1 = 0;
        this.meteoro2 = 0;
        this.meteoro3 = 0;
    }
    preload() {
        
        this.load.image('nave', 'assets/nave-min.png');
        this.load.image('asteroides', 'assets/Asteroide.png');
    //     this.load.image('background', 'images/background.png');
      this.load.image('gameover', 'assets/gameover.png');
    }
  
    create() {
        this.physics.world.setBoundsCollision(true,true,false,false)
        this.gameoverImage = this.add.image(500, 250,'gameover');
        this.gameoverImage.visible  = false;
        //asteroides
        this.asteroides = this.physics.add.group({
            defaultKey: 'asteroides'
        });

    
        //nave espacial
        this.naveImage = this.physics.add.image(400, 545,'nave').setImmovable();
        this.naveImage.body.allowGravity = false;
        this.naveImage.setCollideWorldBounds(true)


        this.cursors = this.input.keyboard.createCursorKeys();
        // con esto indicamos la colicion del juego 
        this.physics.add.collider(this.naveImage, this.asteroides, this.asteroideImpact, null, this);
        this.physics.add.collider(this.naveImage, this.asteroides, this.asteroideImpact, null, this);

        // creamos los puntos
        this.scoreText = this.add.text(150, 16, 'PUNTOS: 0', { 
            fontSize: '25px', 
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
          //creamos el reloj
        this.clockText = this.add.text(16, 16, '00:00:00', { 
            fontSize: '25px', 
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
    }
    newAsteroide() {
        
        var oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.3, this.game.config.width), -50);
        this.physics.add.collider(this.asteroides, this.naveImage);
        let aleatoryPosition = 100 * Phaser.Math.Between(1.3, 2);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(300)
                   .setCollideWorldBounds(true)
                   .setCircle(45)
                   .setBounce(1, 1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.5) ? 100 : -100)
                              );
                  }
            // if (Phaser.Math.Between(0, 10) > 5) {
            // velocity = 0 - velocity;
            // }
            // this.ball.setVelocity(velocity, 10);
     }
     //funcion para detener el juego cuando se produsca la colicion
     asteroideImpact(naveImage, asteroides) {
     this.gameoverImage.visible = true;
     naveImage.visible = false
        this.scene.pause();
    }
    // futura funcion para disparar desde la nave
    // hitvirus(bullet, asteroides) {
    //     virus.destroy();
    //     bullet.destroy();
    // }
    asteroidesEvitados() {
        //funcion para aumentar los puntos, con los meteoros esquivados
        this.score++;
        this.scoreText.setText('PUNTOS: ' + this.score);
    }
    startTime() {
        this.clockText++;
        this.scoreText.setText(this.clock.toString());
    }
    update(time){
        if(this.cursors.left.isDown){
            this.naveImage.setVelocityX(-500);
        }else if(this.cursors.right.isDown){
            this.naveImage.setVelocityX(500);
        }else {
            this.naveImage.setVelocity(0, 0);
        }
        if (time > this.meteoro1 ||time > this.meteoro2 ||time > this.meteoro3 ) {
            this.newAsteroide();
            this.asteroidesEvitados();
            this.meteoro1 += 2000;
            this.meteoro2 += 1000;
            this.meteoro3 += 1500;
        }
        // console.log(this.meteoro1.y)
        // if(this.meteoro1.y > 600 ) {
        //     console.log('1')
        //     this.asteroidesEvitados();
        // }
    }
  
  }