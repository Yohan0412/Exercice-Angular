import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonComposantComponent } from './mon-composant/mon-composant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MonComposantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  div = 'ABC';

}



