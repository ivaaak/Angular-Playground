import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignalsVsBehaviorsubjectsComponent } from './signals-vs-behaviorsubjects/signals-vs-behaviorsubjects.component';
import { BehaviorsubjectLifecycleComponent } from './behaviorsubject-lifecycle/behaviorsubject-lifecycle.component';
import { SignalsDiamondProblemComponent } from './diamond-problem/signals-diamond-problem/signals-diamond-problem.component';
import { BehaviorsubjectDiamondProblemComponent } from './diamond-problem/behaviorsubject-diamond-problem/behaviorsubject-diamond-problem.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsVsBehaviorsubjectsComponent,
    BehaviorsubjectLifecycleComponent,
    SignalsDiamondProblemComponent,
    BehaviorsubjectDiamondProblemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
