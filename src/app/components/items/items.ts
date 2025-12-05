import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SoundItem } from '../../classes/soundItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.scss',
})
export class Items {
  allItems: SoundItem[] = [
    new SoundItem("Привет !", "/assets/sounds/privetDrug.mp3"), 
    new SoundItem("Уважительное здраствуйте всем ", "/assets/sounds/zdravstvuite.mp3"),
    new SoundItem("Дружественное привет всем", "/assets/sounds/zdarova-bandity.mp3"),
    new SoundItem("Всего хорошего !", "/assets/sounds/VsegoHoroshego.mp3"),
    new SoundItem("Как дела ?", "/assets/sounds/kakDela.mp3"),
    new SoundItem("Как неожиданно !", "/assets/sounds/votEtoPovorot.mp3"),
    new SoundItem("Я не уверен", "/assets/sounds/etoNeTochno.mp3"),
    new SoundItem("Как же грустно ...", "/assets/sounds/sadMusic.mp3"),
    new SoundItem("Очень смешно !", "/assets/sounds/smeshno.mp3"),

    new SoundItem("Я крайне вами недоволоден !", "/assets/sounds/250tis.mp3"),
    new SoundItem("Я не понял", "/assets/sounds/error.mp3"), 
    new SoundItem("Зачем этот нехороший человек снова пришёл ?", "/assets/sounds/fu-fu-fu.mp3"),
    new SoundItem("Мне кажется ты глуп", "/assets/sounds/otklonenia.mp3"),
    new SoundItem("Вау !", "/assets/sounds/wow.mp3"),

    new SoundItem("Зря я туда пошёл", "/assets/sounds/zria.mp3")
  ];
  title: string = "Крутая подсказка"; 
  
  // Воспроизведение звука
  playSound(item: SoundItem): void {
    item.playSound();
  }
  
}