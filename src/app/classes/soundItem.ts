export class SoundItem{
    description: string = "";
    soundPath: string = "";
    private audio: HTMLAudioElement;

    constructor(description: string, soundPath: string){
       this.description = description;
       this.audio = new Audio(soundPath);
    }
    playSound(){
        this.audio.play();
    }
}