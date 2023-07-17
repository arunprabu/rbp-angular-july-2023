import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';

// Main switching box for the feature
@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // needed for formGroup
    UsersRoutingModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
