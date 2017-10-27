import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `

    <div *ngIf="selectedAnimal">
      <div class="well">
        <h3>Edit Animal</h3>
        <label>Enter Animal Name:</label>
        <input [(ngModel)]="selectedAnimal.name">
        <label>Enter Animal Age:</label>
        <input [(ngModel)]="selectedAnimal.age">
        <label>Select Number of Caretakers:</label>
          <input type="radio" [(ngModel)]="selectedAnimal.caretakers" [value]="1"> 1 <br>
          <input type="radio" [(ngModel)]="selectedAnimal.caretakers" [value]="2"> 2 <br>
          <input type="radio" [(ngModel)]="selectedAnimal.caretakers" [value]="3"> 3 <br>
          <input type="radio" [(ngModel)]="selectedAnimal.caretakers" [value]="4"> 4 <br>
        <button (click)="done()">Done</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() selectedAnimal: Animal;
  @Output() doneSender = new EventEmitter();

  done() {
    this.doneSender.emit();
  }
}
