export class ResetButton{

        constructor(scene){
            this.resetScene = scene;
            //
        }
        preload(){
            this.resetScene.load.image('button', './assets/resetBtn.png');
        }
        create(){
            this.resetbutton = this.resetScene.add.image(500,330,'button').setInteractive();

            this.resetbutton.on('pointerdown', ()=>{
                this.resetScene.scene.start('game');
            });
        }

} 