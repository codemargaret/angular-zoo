import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="well">
      <h1>Zoo Animal Tracker</h1>
    </div>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <edit-animal [selectedAnimal]="selectedAnimal" (doneSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
    `
  })

export class AppComponent {
  masterAnimalList: Animal[] =  [
    new Animal('Polar Bear', 'Cuddles', 5, 'carnivore', 'Bear Pit', 2, 'male', 'long tundra walks', 'vegetables'),
    new Animal('Green Tree Frog', 'Fluffy', 1, 'omnivore', 'Amphibian Building', 1, 'female', 'flies', 'French people'),
    new Animal('African Grey Parrot', 'Alexa', 16, 'herbivore', 'Bird Cage', 2, 'female', 'intellectual conversations', 'crackers')
  ];

  selectedAnimal = null;

  addAnimal(newAnimal: Animal) {
    this.masterAnimalList.push(newAnimal);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
