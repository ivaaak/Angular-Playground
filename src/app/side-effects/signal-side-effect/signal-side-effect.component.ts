import { Component, inject, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signal-side-effect',
  templateUrl: './signal-side-effect.component.html'
})
export class SignalSideEffectComponent {
  myService = inject(myService); 

  count = this.myService.getCount(); 
  doubleCount = computed(() => this.count() * 2) 
  
  constructor(){ 
    effect(() => { 
      console.log("count updated!", this.count()) 
    }); 
    // this will run on every value change
  } 
}
