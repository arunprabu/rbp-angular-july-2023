import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent implements OnInit {
  // Let's now subscribe to the store data in counter.comp.ts thru the selector 
  count$: Observable<number>;

  constructor( private store: Store<{count: number}>) { // subscribing to the store data
    this.count$ = this.store.select('count'); // selecting the required from the big store object 
    console.log(this.count$);
  }

  ngOnInit(): void {
  }

  handleIncrement() {
    console.log('Incrementing...');
    // dispatching an action to update the store. 
    // all dispatched action will immediately reach reducers.
    this.store.dispatch(increment());
  }

  handleDecrement() {
    console.log('Decrementing...');
    // dispatching an action to update the store. 
    // all dispatched action will immediately reach reducers.
    this.store.dispatch(decrement());
  }

  handleReset() {
    console.log('Resetting...');
    // dispatching an action to update the store. 
    // all dispatched action will immediately reach reducers.
    this.store.dispatch(reset());
  } 


}
