
export class Level2 extends Phaser.Scene{

    constructor(){
        super({ key: 'level2' });
    }
    init(){
        this.clock = 0;
        this.score = 0;
        this.runningTime = 0;
        this.stopwatchInterval;
        this.stopgameInterval;
        this.meteoro1 = 0;
        this.meteoro2 = 0;
        this.meteoro3 = 0;
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
            defaultKey: 'asteroides'
        });
        this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
            x: 855,
            y: 400,
            radius: 100,
            base: this.add.circle(0, 0, 50, 0x888888),
            thumb: this.add.circle(0, 0, 25, 0xcccccc),
      });

      this.joystickCursors = this.joyStick.createCursorKeys();

        //nave espacial
        this.naveImage = this.physics.add.image(500, 555,'nave').setImmovable();
        this.naveImage.body.allowGravity = false;
        this.naveImage.setCollideWorldBounds(true)
        // creamos los sonidos del juego
        
        this.cursors = this.input.keyboard.createCursorKeys();
        // con esto indicamos la colicion del juego 
        this.physics.add.collider(this.naveImage, this.asteroides, this.asteroideImpact, null, this);
        // this.physics.add.collider(this.naveImage, this.asteroides, this.asteroideImpact, null, this);

        // creamos los puntos
        this.scoreText = this.add.text(150, 16, 'PUNTOS: 0', { 
            fontSize: '20px', 
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
          //mostramos el nivel en el cual se encuentra el jugador
        this.levelText = this.add.text(16, 45, 'level: 2', { 
            fontSize: '20px', 
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
          //creamos el reloj
        this.clockText = this.add.text(16, 16, '00:00:00', { 
            fontSize: '20px', 
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
          this.startTime();

    }
    newAsteroide() {
        var oneAsteroide= this.asteroides.get(Phaser.Math.Between(1.3, this.game.config.width), -40);
         if (oneAsteroide) {
            oneAsteroide.setActive(true)
                   .setVisible(true)
                   .setGravityY(100)
                   .setCollideWorldBounds(true)
                   .setCircle(30,3,-4)
                   .setBounce(1, 1)
                   .setVelocityX(
                                   (Phaser.Math.Between(0, 1.5) ? 50 : -50)
                              );
                  }
     }
     // funcion para perder en el juego
     asteroideImpact(naveImage, asteroides) {
        this.showGameOver();
         naveImage.visible = false
         this.runningTime = 0;
         // detenemos el relejo y lo reiniciamos
         clearInterval(this.stopwatchInterval);
         clearInterval(this.score)
         this.clockText.setText('00:00:00');
         this.scene.pause();
        }
        asteroidesEvitados() {
            //funcion para aumentar los puntos, con los meteoros esquivados
            this.score++;
            this.scoreText.setText('PUNTOS: ' + this.score);
        }
        startTime() {
            // this.startGameSample.play();
            let Clock = Date.now() - this.clock;
            this.stopwatchInterval = setInterval(() => {
                let runningTime = Date.now() - Clock;
        //      seteamos los datos para que los imprima en la pantalla
            this.clockText.setText(this.calculateTime(runningTime))
              }, 1000);
    
        }
        calculateTime(runningTime){
            const total_seconds = Math.floor(runningTime/1000);
            const total_minutes = Math.floor(total_seconds/60);
            const total_horas = Math.floor(total_minutes/60);
            
            const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
            const display_minutes = (total_minutes % 60).toString().padStart(2, "0");
            const display_horas = total_horas.toString().padStart(2, "0");
        
            return `${display_horas}:${display_minutes}:${display_seconds}`
          }
        
        update(time){
            if(this.cursors.left.isDown||this.joystickCursors.left.isDown){
                this.naveImage.setVelocityX(-500);
            }else if(this.cursors.right.isDown||this.joystickCursors.right.isDown){
                this.naveImage.setVelocityX(500);
            }else {
                this.naveImage.setVelocity(0, 0);
            }
            if (time > this.meteoro1 ||time > this.meteoro2 ||time > this.meteoro3 ||time > this.meteoro4) {
                this.newAsteroide();
                this.asteroidesEvitados();
                this.meteoro1 += 1000;
                this.meteoro2 += 1100;
                this.meteoro3 += 1200;
                this.meteoro4 += 1000;
            }

        }
        showGameOver(){
            this.scene.start('gameover');
        }
      }

