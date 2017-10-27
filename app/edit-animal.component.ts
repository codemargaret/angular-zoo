import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `

    <div *ngIf="selectedAnimal">
      <div class="well">
        <h2>Edit Animal</h2>
        <div class="form-group">
          <label>Enter Animal Name:</label>
          <input class="form-control" [(ngModel)]="selectedAnimal.name">
        </div>
        <div class="form-group">
          <label>Enter Animal Age:</label>
          <input type="number" class="form-control" [(ngModel)]="selectedAnimal.age">
        </div>
        <div class="form-check">
        <label class="form-check-label">Select Number of Caretakers:<br>
          <input class="form-check-input" type="radio" [(ngModel)]="selectedAnimal.caretakers" [value]="1"> 1 <br>
          <input class="form-check-input" type="radio" [(ngModel)]="selectedAnimal.caretakers" [value]="2"> 2 <br>
          <input class="form-check-input" type="radio" [(ngModel)]="selectedAnimal.caretakers" [value]="3"> 3 <br>
          <input class="form-check-input" type="radio" [(ngModel)]="selectedAnimal.caretakers" [value]="4"> 4 <br>
          </label>
        </div>
        <button class="btn btn-warning"(click)="done()">Done</button>
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
