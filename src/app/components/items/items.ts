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
  allItems: SoundItem[] = [new SoundItem("описание1", "путь"),new SoundItem("описание2", "путь"), new SoundItem("описание3", "путь")];
  title: String = "Крутая подсказка";


  
  //воспроизведение звука
  playSound(item: SoundItem): void{
  
  }
}

