import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: "concepts.component.html",
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {
  devName = "Arun"; // interpolation
  clientName = "citi bank"; // prop binding
  course = 'Angular 14'; // two way binding

  constructor() { }

  ngOnInit(): void {
  }

  // event binding
  handleClickMe(event: any) {
    console.log(event);
    event.target.innerText = "Clicked";
    // TODO: disable the button
  }

}
