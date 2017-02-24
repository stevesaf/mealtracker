import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
<h1>Add New Food</h1>
<div>
  <label>Enter Food Name:</label>
  <input #newName>
</div>
<div>
  <label> Enter Food Description:</label>
  <input #newDescription>
</div>
<div>
  <label>Enter Calories</label>
  <input #newCalories>
  <button (click)="addClicked(newName.value, newDescription.value, newCalories.value);
  newName.value='';
  newDescription.value='';
  newCalories.value='';
  ">Add</button>
</div>

`
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
    var newFoodToAdd: Food = new Food(name, description, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
