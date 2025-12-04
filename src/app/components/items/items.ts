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
    new SoundItem("Как дела ?", "/assets/sounds/kakDela.mp3"),
    new SoundItem("Привет !", "/assets/sounds/privetDrug.mp3"), 
    new SoundItem("Как неожиданно !", "/assets/sounds/votEtoPovorot.mp3")
  ];
  title: string = "Крутая подсказка"; 
  
  // Воспроизведение звука
  playSound(item: SoundItem): void {
    item.playSound();
  }
  
}