import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-magic-oven',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './magic-oven.component.html',
  styleUrl: './magic-oven.component.css'
})

export class MagicOvenComponent implements OnInit {
  
  @Input()
  numberOfCookies: number = 0;

  @Input()
  flour: number = 0;

  @Input()
  salt: number = 0;

  @Input()
  sugar: number = 0;

  @Input()
  egg: number = 0;

  @Input()
  startCooking: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }


  @Output()
  cookies: EventEmitter<number> = new EventEmitter(); 

  sendCookies() {
    this.cookies.emit(this.numberOfCookies);
  }


}
