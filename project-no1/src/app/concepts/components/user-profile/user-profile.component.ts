import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <div>
      <p>Let's send some data to parent comp</p>
      <button (click)="handleSendDataToParent()">Send Data To Parent</button>
    </div>
  `,
  styles: [
  ]
})
export class UserProfileComponent implements OnInit {

  // Step 1: create an obj of EventEmitter class and make it custom event
  @Output() profileLoaded = new EventEmitter();

  // Step 2: What data do you want to send to parent comp. Let's prepare
  private profile = {
    name: 'Steve',
    city: 'London'
  }

  msg = 'wow';

  constructor() { }

  ngOnInit(): void {
  }

  handleSendDataToParent(){
    // step 3: Let's trigger the event thru program
    this.profileLoaded.emit(this.profile); //sending the profile data as event object
  }

}
