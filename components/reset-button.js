export class ResetButton{

        constructor(scene){
            this.resetScene = scene;
            //
        }
        preload(){
            this.resetScene.load.spritesheet('button', './assets/resetBtn.png', { frameWidth: 190, frameHeigth:59});
        }
        create(){
            this.resetbutton = this.resetScene.add.sprite(500,330,'button').setInteractive();

            this.resetbutton.on('pointerover', ()=>{
                this.resetbutton.setFrame(1);
            });
            this.resetbutton.on('pointerout', ()=>{
                this.resetbutton.setFrame(0);
            });
            this.resetbutton.on('pointerdown', ()=>{
                this.resetScene.scene.start('game');
                window.location.reload();
            });
        }
} 