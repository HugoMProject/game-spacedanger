export class StartGame extends Phaser.Scene{
 
    constructor(){
      super({key:'startgame'})
    };
    preload(){
      this.load.image('startGame', 'assets/resetBtn2.png');
      this.load.image('spaceDanger', 'assets/spaceDanger.png');
      this.load.image('background', 'https://th.bing.com/th/id/R.a2087a5e90f90bc454a75a6c1ea5c316?rik=LGxsh%2bzXtHLApg&pid=ImgRaw&r=0');
      this.load.audio('bandasonora','sounds/space-sounds.mp3');
    };
    create(){
      this.bandaSonora = this.sound.add('bandasonora');
      this.bandaSonora.volume = 0.2;
      this.add.image(500, 300,'background').setScale(1.5);
      this.add.image(500, 200,'spaceDanger').setScale(1.3);
      this.startgame =  this.add.image(500, 350,'startGame').setInteractive();
      this.startgame.on('pointerdown', ()=>{
        this.scene.start('game');
        this.bandaSonora.pause();
    });
    this.bandaSonora.play();
    };
}