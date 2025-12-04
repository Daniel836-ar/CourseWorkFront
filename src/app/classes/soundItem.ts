export class SoundItem {
    description: string = "";
    soundPath: string = "";
    private audio: HTMLAudioElement;
    public isPlaying: boolean = false;
    public iconPath: string = "assets/images/icon-start.png";

    constructor(description: string, soundPath: string) {
        this.description = description;
        this.audio = new Audio(soundPath);
        
        // Обработчики событий аудио
        this.audio.addEventListener('play', () => {
            this.isPlaying = true;
            this.iconPath = "assets/images/icon-flower.png";
        });
        
        this.audio.addEventListener('ended', () => {
            this.isPlaying = false;
            this.iconPath = "assets/images/icon-start.png";
        });
        
        this.audio.addEventListener('pause', () => {
            this.isPlaying = false;
            this.iconPath = "assets/images/icon-start.png";
        });
    }
    
    playSound() {
        // Если уже играет, остановить и начать заново
        if (this.isPlaying) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
        this.audio.play();
    }
    
    stopSound() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.iconPath = "assets/images/icon-start.png";
    }
}