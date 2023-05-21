import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignalsVsBehaviorsubjectsComponent } from './signals-vs-behaviorsubjects/signals-vs-behaviorsubjects.component';
import { BehaviorsubjectLifecycleComponent } from './behaviorsubject-lifecycle/behaviorsubject-lifecycle.component';
import { SignalsDiamondProblemComponent } from './diamond-problem/signals-diamond-problem/signals-diamond-problem.component';
import { BehaviorsubjectDiamondProblemComponent } from './diamond-problem/behaviorsubject-diamond-problem/behaviorsubject-diamond-problem.component';
import { SignalSideEffectComponent } from './side-effects/signal-side-effect/signal-side-effect.component';
import { BehaviorsubjectSideEffectComponent } from './side-effects/behaviorsubject-side-effect/behaviorsubject-side-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsVsBehaviorsubjectsComponent,
    BehaviorsubjectLifecycleComponent,
    SignalsDiamondProblemComponent,
    BehaviorsubjectDiamondProblemComponent,
    SignalSideEffectComponent,
    BehaviorsubjectSideEffectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
