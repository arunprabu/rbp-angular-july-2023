import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-concepts',
  templateUrl: "./concepts.component.html",
  styles: [
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {
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

  // related to custom event binding
  dataReceivedFromChild = {
    name: '',
    city: ''
  }

  //@viewchild related -- parent comp is accessing the data
  dataAccessedFromChild: string = '';

  @ViewChild(UserProfileComponent, {static: false}) userProfile!: UserProfileComponent;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  // when static:false --- the data from child comp will be available in this hook
  ngAfterViewInit(): void {
    console.log(this.userProfile);
    this.dataAccessedFromChild = this.userProfile.msg;
    this.cd.detectChanges();
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
