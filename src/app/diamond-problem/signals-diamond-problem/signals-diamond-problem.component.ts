import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals-diamond-problem',
  templateUrl: './signals-diamond-problem.component.html'
})
// The "diamond problem" is an ambiguity that arises when two classes B and C inherit from A, 
// and class D inherits from both B and C. If there is a method in A that B and C have overridden, 
// and D does not override it, then which version of the method does D inherit: that of B, or that of C?

export class SignalsDiamondProblemComponent {
  valueOne = signal(1); 
  valueTwo = signal(10); 

  derivedValue = computed(() => this.valueOne() * this.valueTwo()); 
  
  changeValues() { this.valueOne.set(2); this.valueTwo.set(20); } 
  
}
