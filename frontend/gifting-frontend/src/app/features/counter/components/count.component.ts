import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { SelectCountCurrent } from '../state';
import { CounterCommands } from '../state/actions/count-actions';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  current$ = this.store.select(SelectCountCurrent)

  constructor(private store:Store) {}
 current = 0;
  increment() {
    this.store.dispatch(CounterCommands.incremented());
  }

  decrement(){
    //this.current -= 1;
    this.store.dispatch(CounterCommands.decremented());
  }

  reset(){
    this.store.dispatch(CounterCommands.reset())
  }
}
