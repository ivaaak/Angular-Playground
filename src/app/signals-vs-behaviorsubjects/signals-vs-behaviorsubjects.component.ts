import { Component, signal, computed } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-signals-vs-behaviorsubjects',
  templateUrl: './signals-vs-behaviorsubjects.component.html',
  styleUrls: ['./signals-vs-behaviorsubjects.component.scss']
})
export class SignalsVsBehaviorsubjectsComponent {
// Signals
  count_signal = signal(0);
  subject_signal = signal("Testing Behaviour Subject"); 


// Behavior Subject
  count_behaviorsubject = new BehaviorSubject(0)
  subject_behaviorsubject = new BehaviorSubject("Testing Behavior Subject"); 

// Access values
  logSignalValue() {
    console.log(this.count_signal());
  }

  logBehaviorSubjectValue() {
    console.log(this.count_behaviorsubject.value);
  }

// Modify Values
  doubleCountSignal(){
    let count = signal(1);
    return computed(() => this.count_signal() * 2);
  } 

  doubleCountBehaviorSubject() {
    let count = new BehaviorSubject(0)
    return count.pipe(map((count: number) => count * 2));
  }
}
