import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="well">
    <h2>Animal List</h2>
      <h4>Filter by Age</h4>
      <div class="form-group">
        <select class = "form-control" (change)="onChange($event.target.value)">
          <option value="young">Young Animals</option>
          <option value="mature">Mature Animals</option>
          <option selected="selected" value="allAnimals">All Animals</option>
        </select>
      </div>
      <h4>Diet Key: Herbivore = 1, Carnivore = 2, Omnivore = 3</h4>
      <div class="form-group">
        <select class = "form-control" (change)="onDietChange($event.target.value)">
          <option value="1">Herbivores</option>
          <option value="2">Carnivores</option>
          <option selected="selected" value="3">Omnivores</option>
        </select>
      </div>
      <div class="row">
        <ul class="list-group" *ngFor="let currentAnimal of childAnimalList | age:filterByAge |diet:filterByDiet" class="list-unstyled">
          <div class="col-md-3">
            <li class="list-group-item list-group-item-warning"> Name: {{currentAnimal.name}}</li>
            <li class="list-group-item">Species: {{currentAnimal.species}}</li>
            <li class="list-group-item">Age: {{currentAnimal.age}}</li>
            <li class="list-group-item">Diet: {{currentAnimal.diet}}</li>
            <li class="list-group-item">Location: {{currentAnimal.location}}</li>
            <li class="list-group-item">Caretakers: {{currentAnimal.caretakers}}</li>
            <li class="list-group-item">Sex: {{currentAnimal.sex}}</li>
            <li class="list-group-item">Likes: {{currentAnimal.likes}}</li>
            <li class="list-group-item">Dislikes: {{currentAnimal.dislikes}}</li>
            <button class="btn btn-warning btn-block" (click)="editClicked(currentAnimal)">Edit!</button>
          </div>
        </ul>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";
  filterByDiet: string = "3";

  editClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  onDietChange(optionFromMenu) {
    this.filterByDiet = optionFromMenu;
  }
}
