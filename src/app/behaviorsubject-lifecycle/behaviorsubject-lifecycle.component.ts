import { Component } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-behaviorsubject-lifecycle',
  templateUrl: './behaviorsubject-lifecycle.component.html'
})
export class BehaviorsubjectLifecycleComponent {
  // Behavior Subject
  count = new BehaviorSubject(0)
  subject = new BehaviorSubject("Testing Behavior Subject"); 
  
  doubleCount =  this.count.pipe(map((count: number) => count * 2));

  destroy$ = new Subject(); 

  ngOnDestroy() {
    this.destroy$.next(); 
  } 
  someMethod() { 
    console.log(this.doubleCount()); 

    this.doubleCount
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: any) => console.log(value)); 
  }
}
