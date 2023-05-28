export class TimeClock{

    constructor(scene){
        this.timegame = scene;
        this.clock = 0;
        this.stopwatchInterval;
        this.runningTime = 0;
    }
    
    create(){
        this.clockText = this.timegame.add.text(16, 16, `00:00:00`, { 
            fontSize: '20px', 
            fill: '#fff', 
            fontFamily: 'verdana, arial, sans-serif',
            zIndex:3 
          });
          this.startTime();
    }


    startTime() {
        let Clock = Date.now() - this.clock;
        this.stopwatchInterval = setInterval(() => {
            let runningTime = Date.now() - Clock;
    //      seteamos los datos para que los imprima en la pantalla
        this.clockText.setText(`${this.calculateTime(runningTime).toString()}`);
          }, 1000);

    }

        //              funcion para calcular la hora
    calculateTime(runningTime){
        const total_seconds = Math.floor(runningTime/1000);
        const total_minutes = Math.floor(total_seconds/60);
        const total_horas = Math.floor(total_minutes/60);
            
        const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
        const display_minutes = (total_minutes % 60).toString().padStart(2, "0");
        const display_horas = total_horas.toString().padStart(2, "0");
        
            return `${display_horas}:${display_minutes}:${display_seconds}`
    }

        stopTime(){
            clearInterval(this.stopwatchInterval);
            this.clockText.setText('00:00:00');
        }
}