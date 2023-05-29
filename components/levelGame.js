export class LevelGame {

    constructor(scene){
        this.levelgame = scene;
        this.score = 1;
    }

    create(){
          this.levelText = this.levelgame.add.text(450, 20, '', { 
            fontSize: '25px',
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
    }

    incrementlevel(points){
        this.levelText.setText( points);
    }
}