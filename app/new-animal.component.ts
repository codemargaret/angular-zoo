import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="well">
    <h1>New Animal</h1>
    <label>Enter Animal Species:</label>
    <input #newSpecies>
    <label>Enter Animal Name:</label>
    <input #newName>
    <label>Enter Animal Age:</label>
    <input type="number" #newAge>
    <label>Enter Animal Diet:</label>
    <input #newDiet>
    <label>Enter Animal Location:</label>
    <input #newLocation>
    <label>Select Number of Caretakers:</label>
    <select #newCaretaker>
      <option [value]="1"> 1 </option>
      <option [value]="2"> 2 </option>
      <option [value]="3"> 3 </option>
      <option [value]="4"> 4 </option>
    </select>
    <label>Enter Animal Sex:</label>
    <input #newSex>
    <label>Enter Animal Likes:</label>
    <input #newLikes>
    <label>Enter Animal Dislikes:</label>
    <input #newDislikes>
    <button class="btn btn-info"(click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretaker.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
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
