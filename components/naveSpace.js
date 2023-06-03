export class NaveSpace {
    constructor(scene){
        this.naveScene = scene;
        
    }

    create(){
        this.naveImage = this.naveScene.physics.add.image(500, 520,'nave').setImmovable();
        this.naveImage.body.allowGravity = false;
        this.naveImage.setCollideWorldBounds(true)
        this.naveImage.setData('crash',false)
    }


}