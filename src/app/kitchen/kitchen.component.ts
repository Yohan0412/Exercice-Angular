import { Component, model, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { MagicOvenComponent } from "../magic-oven/magic-oven.component";



@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [FormsModule, MagicOvenComponent],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})


export class KitchenComponent {
  flourQuantity: number = 0;
  saltQuantity: number = 0;
  sugarQuantity: number = 0;
  eggQuantity: number = 0;
  numberOfCookies: number = 0;

  isCooked: boolean = false;
  

  constructor() {}

  ngOnInit() {}

  startCooking() {
    this.isCooked = true;
  }

  cookiesCooked: number | undefined;

  onGetCookies(event: number): void {
    this.cookiesCooked =+ event;
  }

}
