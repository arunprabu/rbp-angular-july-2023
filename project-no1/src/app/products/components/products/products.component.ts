import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  products: any[] = [
    {
      id: 1,
      name: 'Apple',
      category: 'Fruits',
      price: '$2.76'
    },
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    },
    {
      id: 3,
      name: 'Orange',
      category: 'Fruits',
      price: '$4.85'
    },
    {
      id: 4,
      name: 'Tomato',
      category: 'Vegetables',
      price: '$5.01'
    },
    {
      id: 5,
      name: 'Table Cloth',
      category: 'Kitchen Essentials',
      price: '$6.13'
    }
  ];

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
  }

  handleAddToCart(product: any){
    console.log(product);

    // we have to send this data to common data service
    this.cartDataService.addToCart(product);
  }
}
