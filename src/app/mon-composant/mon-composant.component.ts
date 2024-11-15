import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-mon-composant',
  standalone: true,
  imports: [FormsModule],
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

}
  

