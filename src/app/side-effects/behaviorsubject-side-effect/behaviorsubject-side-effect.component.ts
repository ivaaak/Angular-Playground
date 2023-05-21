import { Component, inject } from '@angular/core';
import { tap, map } from 'rxjs';

@Component({
  selector: 'app-behaviorsubject-side-effect',
  templateUrl: './behaviorsubject-side-effect.component.html'
})
export class BehaviorsubjectSideEffectComponent {
  myService = inject(MyService); 

  count:any = this.myService
    .getCount()
    .pipe( 
      tap((count: any) => 
        console.log("count updated!", count)
      )
    );
  doubleCount = this.count.pipe(map((count: number) => count * 2)); 
  
  // {{ count | async }}
  // {{ count | async }}
  // {{ count | async }}
  // the side effect will be triggered 3 times
}
