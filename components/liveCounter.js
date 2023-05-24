export class LiveCounter {
  // Código de la clase para la gestión de vidas del jugador
    constructor(scene, initialLives) {
      this.relatedScene = scene;
      this.initialLives = initialLives;
  }
  init() {
    this.score = 0;
    this.liveCounter = new LiveCounter(this, 3);
  }
  loader(){
    this.load.image('nave', 'assets/nave.png');
    this.load.audio('livelostsample', 'sounds/live-lost.ogg');
  }
  create() {
    let displacement = 60;
    let firstPosition = 800 - ((this.initialLives - 1) * displacement);
    this.liveImages = this.relatedScene.physics.add.staticGroup({
      setScale: { x: 0.5, y: 0.5 },
      key: 'nave',
      frameQuantity: this.initialLives-1,
      gridAlign: {
        width: this.initialLives - 1,
        height: 1,
        cellWidth: displacement,
        cellHeight: 30,
        x: firstPosition,
        y: 30
      }
    });
    this.liveCounter.create();
  }
  liveLost() {
    if (this.liveImages.countActive() == 0) {
      this.relatedScene.endGame();
      return false;
    }
    let currentLiveLost = this.liveImages.getFirstAlive();
    currentLiveLost.disableBody(true, true);
    return true;
  }
}