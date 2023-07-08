export class LevelGame {

    constructor(scene){
        this.levelgame = scene;
    }

    create(){
          this.levelText = this.levelgame.add.text(450, 20, '', { 
            fontSize: '30px',
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
    }

    incrementlevel(points){
        this.levelText.setText( points);
    }
}