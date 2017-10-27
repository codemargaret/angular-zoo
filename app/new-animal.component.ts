import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>
  <div>
  <label>Enter Animal Species:</label>
  <input #newSpecies>
  <label>Enter Animal Name:</label>
  <input #newName>
  <label>Enter Animal Age:</label>
  <input #newAge>
  <label>Select Animal Diet:</label>
  <select #newDiet>
    <option [value]="herbivore"> Herbivore </option>
    <option [value]="carnivore"> Carnivore </option>
    <option [value]="omnivore"> Omnivore </option>
  </select>
  <label>Select Animal Location:</label>
  <select #newLocation>
    <option [value]="bird"> Bird Cage </option>
    <option [value]="reptile"> Reptile House </option>
    <option [value]="bear"> Bear Pit </option>
    <option [value]="amphibian"> Amphibian Discovery Center </option>
    <option [value]="mammal"> Mammal Trail </option>
  </select>
  <label>Select Number of Caretakers:</label>
  <select #newCaretaker>
    <option [value]="1"> 1 </option>
    <option [value]="2"> 2 </option>
    <option [value]="3"> 3 </option>
    <option [value]="4"> 4 </option>
  </select>
  <label>Select Animal Sex:</label>
  <select #newSex>
    <option [value]="male"> Male </option>
    <option [value]="female"> Female </option>
  </select>
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
