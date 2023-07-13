import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 0: Have HTML form 
  // Step 1: Have HTML form equivalent in TS (an obj of FormGroup class) 
  addUserForm = new FormGroup({
    // Step 2: Have HTML form input equivalents (an obj of FormControl class)
    name: new FormControl('', Validators.required), // For Step 3 & 4 refer HTML
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  isSaved = false;

  constructor( private usersService: UsersService ) { }

  ngOnInit(): void {
  }

  handleAddUser() {
    console.log(this.addUserForm.value);
    this.usersService.addUser(this.addUserForm.value)
      .subscribe((res: any) => {
        console.log(res);
        if(res && res.id) {
          this.isSaved = true;
          this.addUserForm.reset();
        }
      })
  }

}
