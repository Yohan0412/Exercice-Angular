import { Component, Input } from '@angular/core';
import { Order } from '../Models/order.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  newOrder: Order = {
    title: "",
    quantity: 0,
    date: new Date(),
    contact: ""
  };

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.newOrder);
  }
 


}
