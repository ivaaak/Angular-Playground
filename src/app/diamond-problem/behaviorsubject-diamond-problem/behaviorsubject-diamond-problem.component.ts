import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-behaviorsubject-diamond-problem',
  templateUrl: './behaviorsubject-diamond-problem.component.html'
})
export class BehaviorsubjectDiamondProblemComponent {
  valueOne = new BehaviorSubject(1); 
  valueTwo = new BehaviorSubject(10); 
  
  derivedValue = combineLatest([this.valueOne, this.valueTwo])
    .pipe(map(([one, two]: [number, number]) => one * two)); 
  
  changeValues() { 
    this.valueOne.next(2); 
    this.valueTwo.next(20); 
  } 
}
