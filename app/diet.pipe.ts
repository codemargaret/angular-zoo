import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "diet",
    pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Animal[], desiredDiet) {
    let output: Animal[] = [];
    if(desiredDiet === "1") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet === '1') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiet === "2") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet === '2') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiet === "3") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet === '3') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
    return input;
    }
  }
}
