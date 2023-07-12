import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styles: [
  ]
})
export class MenuListComponent implements OnInit {

  menus = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'Concepts',
      url: '/concepts'
    },
    {
      id: 3,
      title: 'User Management',
      url: '/users'
    },
    {
      id: 4,
      title: 'About',
      url: '/about'
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
