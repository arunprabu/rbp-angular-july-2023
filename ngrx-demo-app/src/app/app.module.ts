import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';

// Now, we have the essential building blocks to create store 
// Let's import StoreModule from ngrx
import { StoreModule } from '@ngrx/store';

// combine all reducer here to create big store object 
const store = {
  count: counterReducer // count -- is the selector 
                        // we need to use this selector in counter.comp.ts as it needs data from the store
}   

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(store) // here's the store made available to the whole app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
