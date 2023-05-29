import { Game } from './scenes/game.js';
import { Winner} from './scenes/winner.js';
import {GameOver} from './scenes/gameover.js';

//    Por medio de una condicional, le dices que si esta en un celular entonces en
//    ancho del Canvas debe ser igual al ancho de la ventana, sino, pues le das el ancho que tu quieras.
const mediaQuery = window.matchMedia("(orientation: portrait)");
const config = {
  type: Phaser.AUTO,
  version:0.01,
  scale:{
    parent: 'container', // ID DEL CONTENEDOR
    width:(mediaQuery.matches ? window.innerWidth : 1000),
    height: (mediaQuery.matches ? window.innerHeight : 600),
    mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_BOTH
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  scene: [Game,GameOver,Winner],
  physics: {
    default: 'arcade',
    arcade: {
      gravity:{y: 100},
      debug: false 
    },
    
  }
}

export const game = new Phaser.Game(config);