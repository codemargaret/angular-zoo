import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="well">
    <h2>New Animal</h2>
    <div class="form-group">
      <label>Enter Animal Species:</label>
      <input class="form-control" #newSpecies>
    </div>
    <div class="form-group">
      <label>Enter Animal Name:</label>
      <input class="form-control" #newName>
    </div>
    <div class="form-group">
      <label>Enter Animal Age:</label>
      <input class="form-control" type="number" #newAge>
    </div>
    <div class="form-group">
      <label>Enter Animal Diet:</label>
      <input class="form-control" #newDiet>
    </div>
    <div class="form-group">
      <label>Enter Animal Location:</label>
      <input class="form-control" #newLocation>
    </div>
    <div class="form-group">
      <label>Select Number of Caretakers:</label>
      <select class="form-control" #newCaretaker>
        <option [value]="1"> 1 </option>
        <option [value]="2"> 2 </option>
        <option [value]="3"> 3 </option>
        <option [value]="4"> 4 </option>
      </select>
    </div>
    <div class="form-group">
      <label>Enter Animal Sex:</label>
      <input class="form-control" #newSex>
    </div>
    <div class="form-group">
      <label>Enter Animal Likes:</label>
      <input class="form-control" #newLikes>
    </div>
    <div class="form-group">
    <label>Enter Animal Dislikes:</label>
    <input class="form-control" #newDislikes>
    </div>
    <button class="btn btn-warning"(click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
