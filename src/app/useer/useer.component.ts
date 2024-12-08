import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-useer',
  standalone: true,
  imports: [],
  templateUrl: './useer.component.html',
  styleUrl: './useer.component.css'
})
export class UseerComponent {

constructor() {}


  username = new FormControl('');
  email = new FormControl('');
  motdepasse = new FormControl('');
  adresse = new FormControl('');
}
