import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const userRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/:userId', component: UserDetailsComponent }   // url param is id
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
