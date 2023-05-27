export class JoyStick {
    constructor(scene){
        this.joystickScene = scene;
        
    }
    preload(){
        let url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
        this.load.plugin('rexvirtualjoystickplugin', url, true);
    }

    create(){
        this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
            x: 855,
            y: 400,
            radius: 100,
            base: this.add.circle(0, 0, 50, 0x888888),
            thumb: this.add.circle(0, 0, 25, 0xcccccc),
      });
    }


}