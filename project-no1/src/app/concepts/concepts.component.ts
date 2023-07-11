import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: "./concepts.component.html",
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {
  devName = "Arun"; // interpolation
  clientName = "citi bank"; // prop binding
  course = 'Angular 14'; // two way binding

  employeeList = [
    {
      name: 'John',
      phone: 1234567,
    },
    {
      name: 'Peter',
      phone: 6587436345,
    }
  ];

  dataReceivedFromChild = {
    name: '',
    city: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  // event binding
  handleClickMe(event: any) {
    console.log(event);
    event.target.innerText = "Clicked";
    // TODO: disable the button
  }

  // Step 5 of Custom Event Binding -- receive the data in event object
  handleProfileLoaded(event: any) {
    debugger;
    console.log(event);
    this.dataReceivedFromChild = event;
  }
}
