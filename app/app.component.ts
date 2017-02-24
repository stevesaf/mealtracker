import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My Calorie Tracker App</h1>
    <h3 (click)="showDetails(currentFood)" *ngFor="let currentFood of foods">{{ currentFood.name }} {{ currentFood.details }} {{ currentFood.calories }}</h3>
<div>
  <label> Enter Food Name </label>
  <input [(ngModel)]="selectedFood.name">
</div>
<div>
  <label> Enter Food Description </label>
  <input [(ngModel)]="selectedFood.details">
</div>
<div>
  <label> Enter Food Calories </label>
  <input [(ngModel)]="selectedFood.calories">
</div>
<new-food
(newFoodSender)="addFood($event)"
></new-food>
  </div>
  `
})

export class AppComponent {
public foods: Food[] = [
  new Food("Monkey Brains", "Added a little soy sauce", 250),
  new Food("Fish Sticks", "Kanye style", 500)
];
selectedFood: Food = this.foods[0]; // !!! ask why we do this (clickedFood: Food) !!!
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
addFood(newFoodFromChild): Food {
  this.foods.push(newFoodFromChild);
  }
}
