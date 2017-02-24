import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFood">
    <h3>{{ currentFood.Calories }}



  `
})

export class FoodListComponent {

}
