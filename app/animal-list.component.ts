import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="well">
    <h1>Animal List</h1>
      <select (change)="onChange($event.target.value)">
        <option value="allAnimals">All Animals</option>
        <option value="young">Young Animals</option>
        <option value="mature" selected="selected">Mature Animals</option>
      </select>
      <ul *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
          <li> Name: {{currentAnimal.name}}</li>
          <li>Species: {{currentAnimal.species}}</li>
          <li>Age: {{currentAnimal.age}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Location: {{currentAnimal.location}}</li>
          <li>Caretakers: {{currentAnimal.caretakers}}</li>
          <li>Sex: {{currentAnimal.sex}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
          <button class="btn btn-info" (click)="editClicked(currentAnimal)">Edit!</button>
      </ul>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  editClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
