import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  // cart items will be here
  // Step 1: Have the default cart items
  private defaultCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ]

  // Step 2: Create an Observable. This should also act as Observer.
  /* It's Subject. But it wont let you have default cart items.
    In order for the Subject to have default cart items, we need to use BehaviourSubject.
  */ 
  private cartItems = new BehaviorSubject(this.defaultCartItems);

  // Step 3: We will make cart items as Observable. So that any comp can subscribe to it 
  latestCartItems: Observable<any[]> = this.cartItems.asObservable();

  constructor() { 
    
  }

  addToCart(product: any) {
    console.log(product);
    // we should add the above product into the exisiting cart items
    this.latestCartItems
      .pipe(take(1)) // learn about take
      .subscribe((existingCartItems: any[]) => {
        console.log(existingCartItems);

        // updating the cart items with exisiting cart items
        const updatedCartItems = [...existingCartItems, product];
        console.log(updatedCartItems);
        // the following line updates the other components which are subscribing
        this.cartItems.next(updatedCartItems); 
      });
  }
  
}
