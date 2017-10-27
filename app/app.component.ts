import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo Animal Tracker</h1>
      <animal-list [childAnimalList]="masterAnimalList"></animal-list>
  </div>
    `
  })

export class AppComponent {
  masterAnimalList: Animal[] =  [
    new Animal('Polar Bear', 'Cuddles', 5, 'carnivore', 'Bear Pit', 2, 'male', 'long walks on an iceberg', 'vegetables'),
    new Animal('Green Tree Frog', 'Fluffy', 1, 'omnivore', 'South American Building', 2, 'female', 'flies', 'French people'),
    new Animal('African Grey Parrot', 'Alexa', 1, 'herbivore', 'Bird Cage', 16, 'female', 'intellectual conversations', 'crackers')
  ];

  selectedAnimal = null;
}
