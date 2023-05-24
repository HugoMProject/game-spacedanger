import { Game } from './scenes/game.js';
import {GameOver} from './scenes/gameover.js'


const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  scene: [Game, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false 
    }
  }
}

const game = new Phaser.Game(config);