export class ScoreGame {

    constructor(scene){
        this.scoregame = scene;
        this.score = 0;
    }

    create(){
        this.scoreText = this.scoregame.add.text(170, 16, 'PUNTOS: 0', { 
            fontSize: '20px', 
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
    }

    incrementpoints(points){
        this.score += points;
        this.scoreText.setText('PUNTOS: ' + this.score);
    }
}