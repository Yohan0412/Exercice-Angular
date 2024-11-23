import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mon-composant',
  standalone: true,
  imports: [FormsModule, CommonModule , RouterOutlet],
  templateUrl: './mon-composant.component.html',
  styleUrl: './mon-composant.component.css'
})
export class MonComposantComponent {

  user = {
    name : 'Yohan',
    firstName : 'Rosano',
    age : 25,
    quote : 'Hello World',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    hidden : true,
  }

  title: string = 'Raclette party 🧀';
  isThisIngredientVital: boolean = true;

  isGuestListDisplayed: boolean = true;

  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

}
  

