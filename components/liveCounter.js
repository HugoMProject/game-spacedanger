export class LiveCounter {
  // Código de la clase para la gestión de vidas del jugador
    constructor(scene, initialLives) {
      this.relatedScene = scene;
      this.initialLives = initialLives;
  }
  init() {}
  loader(){
    this.load.image('nave', 'assets/nave.png');  }
  create() {
    this.liveLostSounds = this.relatedScene.sound.add('livelost')
    let displacement = 50;
    let firstPosition = 900 - ((this.initialLives - 1) * displacement);
    this.liveImages = this.relatedScene.physics.add.staticGroup({
      setScale: { x: 0.6, y: 0.7 },
      key: 'nave',
      frameQuantity: this.initialLives-1,
      gridAlign: {
        width: this.initialLives - 1,
        height: 20,
        cellWidth: displacement,
        cellHeight: 50,
        x: firstPosition,
        y: 30
      }
    });
  }
  liveLost() {
    if (this.liveImages.countActive() == 0) {
      this.relatedScene.endGame();
      return false;
    }
    let currentLiveLost = this.liveImages.getFirstAlive();
    currentLiveLost.disableBody(true, true);
    this.liveLostSounds.play();
    return true;
  }
} 